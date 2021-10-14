import { Alert } from 'react-native';
import { Container, ListItemContainer, FlatList, ItemSeparator, Text, TextsContainer, SecondaryText } from './styles';
import React, { useEffect, useState } from 'react';

import Icon from '../../components/Icon/Icon';
import Loader from '../../components/Loader/Loader';
import BandService from '../../services/BandService'
import { SCREENS } from '../../routes/Routes';

const Home = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [bands, setBands] = useState([]);
  
  const bandService = new BandService()
  
  const navigateToBandDetails = (band) => (navigation.navigate(SCREENS.BAND_DETAILS, { title: band.name, band }))

  const keyExtractor = (item, index) => (item + index)

  useEffect(() => {
    getBands()
  }, []);

  const getBands = async () => {
    setIsLoading(true)
    bandService.getBands().then(response => {
      if (response.error) {
        Alert.alert('Error', response.error)
        return
      }

      const bands = response.data
      setIsLoading(false)
      setBands(bands)
    })

  };

  const renderListItem = ({ item }) => {
    const handleItem = () => navigateToBandDetails(item)

    return (
      <ListItemContainer onPress={handleItem}>
        <TextsContainer>
          <Text>{item.name}</Text>
          <SecondaryText>{item.id}</SecondaryText>
        </TextsContainer>
        <Icon name='chevron-right' color="#FFF" />
      </ListItemContainer>
    )
  }

  return (
    <Container>
      {isLoading ? <Loader /> : (
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          data={bands}
          renderItem={renderListItem}
          keyExtractor={keyExtractor}
        />
      )}
    </Container>
  )
};

export default Home;
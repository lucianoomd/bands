import { Alert } from 'react-native';
import { Container, ListItemContainer, FlatList, ItemSeparator, Text, TextsContainer, SecondaryText, FavoriteButtonContainer } from './styles';
import React, { useEffect, useState } from 'react';

import Icon from '../../components/Icon/Icon';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Loader from '../../components/Loader/Loader';
import BandService from '../../services/BandService'
import { SCREENS } from '../../routes/Routes';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { add, remove } from '../../store/FavoritesSlice';
import Band from '../../beans/Band';

const Home = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [bands, setBands] = useState([]);
  
  const bandService = new BandService();
  
  const navigateToBandDetails = (band) => navigation.navigate(SCREENS.BAND_DETAILS, { title: band.name, band });

  const favorites = useSelector((state: RootState) => state.favorites.list);
  const dispatch = useDispatch();

  const keyExtractor = (item, index) => (item + index);

  const isFavorite = ((band: Band) => favorites.find(item => item.id === band.id))

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
    const handleItem = () => navigateToBandDetails(item);
    const handleFavoriteButton = () => isFavorite(item) ? dispatch(remove(item)) : dispatch(add(item));

    return (
      <ListItemContainer onPress={handleItem}>
        <FavoriteButtonContainer>
          <ButtonIcon
            name={isFavorite(item) ? 'star' : 'star-outline'}
            color='#fff'
            onPress={handleFavoriteButton}
          />
        </FavoriteButtonContainer>

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
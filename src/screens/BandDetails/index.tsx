import { Container, Image, Text } from './styles';
import React, { useEffect, useState } from 'react';

import { Alert } from 'react-native';
import Loader from '../../components/Loader/Loader';
import Band from '../../beans/Band';
import BandService from '../../services/BandService'

const BandDetails = ({ navigation, route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [band, setBand] = useState(route.params.band);
  
  const bandService = new BandService()

  useEffect(() => {
    getBand()
  }, []);

  const getBand = async () => {
    setIsLoading(true)
    bandService.getBand(route.params.band.id).then(response => {
      if (response.error) {
        Alert.alert('Error', response.error)
        return
      }

      const { id, name, image, genre, biography, numPlays } = response.data
      const responseBand = new Band(id, name, image,genre, biography, numPlays)

      setBand(responseBand)
      setIsLoading(false)

    })

  };
  
  return (
    <Container>
      {isLoading ? <Loader /> : null}
      <Image source={{uri: band.image ? band.image : 'https://www.rajnathsingh.in/wp-content/uploads/2016/09/noImg.png'}} />

      <Text>Genre: {band.genre}</Text>
      <Text>Biography: {band.biography ? band.biography : 'not available'}</Text>
      <Text>number of plays: {band.numPlays ? band.numPlays : 'not available'}</Text>

    </Container>
  )
};

export default BandDetails;
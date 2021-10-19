import { Container, Image, Text } from './styles';
import React, { useEffect, useState } from 'react';

import { Alert } from 'react-native';
import Loader from '../../components/Loader/Loader';
import { getBand } from '../../services/BandService'

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { add, remove } from '../../store/FavoritesSlice';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import Band from '../../beans/Band';

const BandDetails = ({ navigation, route }) => {
  const favorites: Array<Band> = useSelector((state: RootState) => state.favorites.list);
  const loading: boolean = useSelector((state: RootState) => state.details.loading);
  const band: Band = useSelector((state: RootState) => state.details.band);

  const dispatch = useDispatch();
  
  const isFavorite = (() => favorites.find(item => item.id === route.params.band.id));

  const handleFavorite = () => {
    if(isFavorite()) dispatch(remove(route.params.band));
    else dispatch(add(route.params.band));
    updateRouteParams();
  }

  const updateRouteParams = () => {
    navigation.setOptions({ 
      headerRight: () => (
        <ButtonIcon
          onPress={handleFavorite}
          name={isFavorite() ? 'star' : 'star-outline'}
          color="#fff"
        />
      )
    })
  }

  useEffect(() => {
    updateRouteParams();
    dispatch(getBand(route.params.band.id));
  },[])

  useEffect(() => {
    updateRouteParams();
  },[favorites])
  
  return (
    <Container>
      {loading ? <Loader /> : null}
      <Image source={{uri: band.image ?? 'https://www.rajnathsingh.in/wp-content/uploads/2016/09/noImg.png'}} />

      <Text>Genre: {band.genre ?? 'not available'}</Text>
      <Text>Biography: {band.biography ?? 'not available'}</Text>
      <Text>number of plays: {band.numPlays ?? 'not available'}</Text>
    </Container>
  )
};

export default BandDetails;
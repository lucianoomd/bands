import { ActivityIndicator } from 'react-native';
import { Container } from './styles';
import React from 'react';

const Loader = () => (
  <Container>
    <ActivityIndicator size="large" color="#FFF" />
  </Container>
);

export default Loader;

import React from 'react';
import Icon from '../Icon/Icon';
import { Container } from './styles';

const ButtonIcon = ({ name = '', size = 30, color = '#FFF', onPress = () => {} }) => (
  <Container onPress={onPress}>
    <Icon
      color={color}
      size={size}
      name={name}
    />
  </Container>
);

export default ButtonIcon;

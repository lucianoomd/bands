import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

const Icon = ({ name = '', size = 30, color = '#FFF' }) => (
  <MaterialCommunityIcon
    color={color}
    size={size}
    name={name}
  />
);

export default Icon;

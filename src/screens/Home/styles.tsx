import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3F3F3F;
`;

export const FlatList = styled.FlatList``;

export const ListItemContainer = styled.TouchableOpacity`
  padding: 15px 20px;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const FavoriteButtonContainer = styled.View`
  margin-right: 20px;
`;

export const TextsContainer = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #FFF;
`;

export const SecondaryText = styled.Text`
  font-size: 10px;
  color: #ddd;
`;

export const ItemSeparator = styled.View`
  height: 2px;
  background-color: #fff;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3F3F3F;
`;

export const FlatList = styled.FlatList``;

export const ListItemContainer = styled.TouchableOpacity`
  padding: 15px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TextsContainer = styled.View``;

export const Text = styled.Text`
  font-size: 16px;
  color: #FFF;
  flex: 1;
  margin-left: 10px;
`;

export const SecondaryText = styled.Text`
  font-size: 10px;
  color: #ddd;
  flex: 1;
  margin-left: 10px;
`;

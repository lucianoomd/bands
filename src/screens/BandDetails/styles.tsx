import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #3F3F3F;
`;

export const Image = styled.Image`
  height: 160px;
  resize-mode: contain;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #FFF;
  flex: 1;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #FFF;
  flex: 1;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const ItemSeparator = styled.View`
  height: 2px;
  background-color: #FFF;
`;

import styled from 'styled-components';
import { Animated } from 'react-native';

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
  zIndex: 5;
`;

export const ProductContainer = styled(Animated.View)`
  flex: 1;
  flex-direction: row;
  margin: 10px 10px;
  border-radius: 8px;
`;

export const DescriptionContainer =styled(Animated.View)`
  flex: 1;
  flex-direction: column;
`;

export const ProductImage = styled.Image`
  width: 130;
  height: 200;
  border-radius: 8px;
  align-self: center;
`
export const DescriptionTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`

export const DescriptionText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`
import styled from 'styled-components';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
`;

export const RemoveFromCartButton = styled(Icon)`
  font-size: 30px;
  color: #ff3333;
  margin-right: 30px
`

export const CartItemContainer = styled.View`
  flex-direction: row;
  margin: 10px 10px;
  align-items: center;
  border-top-width: 0.6;
  border-top-color: gray;
  padding-top: 25px;
`
export const CartItemDescriptionContainer = styled.View`
  flex-direction: column;
  margin-left: 10px;
  border-left-width: 0.6;
  border-left-color: gray;
  flex: 1;
`

export const CartItemImage = styled.Image`
  width: 70;
  height: 85;
`

export const CartItemTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`
export const CartItemText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
`;

export const DescriptionContainer =styled.View`
  flex: 6;
  flex-direction: column;
`;

export const ManageQuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`

export const ManageQuantityIcon = styled(Icon)`
  font-size: 22px;
`

export const ManageQuantityText = styled.Text`
  font-size: 25px;
  padding-horizontal: 30px;
  border-radius: 8;
  background-color: #2196f3;
  color: white
`

export const HeaderCheckoutContainer = styled(Animatable.View)`
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
  margin: 10px 10px;
  justify-content: space-around;
`

export const CheckoutValue = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`

export const DescriptionValueContainer = styled.View`
  flex-direction: column
`

export const RemoveFromCartButton = styled(Icon)`
  font-size: 30px;
  color: #ff3333;
  margin-right: 30px;
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
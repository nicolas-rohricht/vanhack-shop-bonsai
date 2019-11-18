import styled from 'styled-components';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
`;

export const ProductContainer = styled.View`
  flex-direction: column;
  margin: 10px 10px;
  border-radius: 8px;
  height: 250px;
  background-color: #b6dcfb;
`;

export const ImageAndDescriptionContainer  = styled.View`
  flex-direction: row;
  margin: 10px 10px;
`

export const DescriptionContainer =styled.View`
  flex: 6;
  flex-direction: column;
`;

export const ProductImage = styled.Image`
  width: 130;
  height: 170;
  border-radius: 8px;
`
export const DescriptionTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
`
export const DescriptionText = styled.Text`
  font-size: 16px;
  margin-left: 10px;
`

export const ManageQuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
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

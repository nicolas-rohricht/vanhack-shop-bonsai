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
  height: 310px;
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
  height: 200;
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

export const ExtraButtonContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ExtraButton = styled(Icon)`
  border-radius: 8;
  padding: 8px;
`

export const AdditionalButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
` 

export const ExtraButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const HeaderButtonsContainer = styled(Animatable.View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 5px;
`
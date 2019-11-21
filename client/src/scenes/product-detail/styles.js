import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const device_width = Dimensions.get('screen').width;

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex-direction: column;
  width: ${device_width}
`;

export const DescriptionContainer =styled.View`
  flex-direction: column;
  height: 280px; 
  border-bottom-width: 1;
  border-top-width: 1; 
  border-left-width: 0.5; 
  border-right-width: 0.5; 
  border-color: silver;
`

export const TitleAndMerchantContainer = styled.View`
  flex-direction: row;
  flex: 2;
  margin-top: 5;
  margin-left: 10;
`

export const TextsContainer = styled.View`
  flex-direction: column;
  flex: 2;
`

export const ProductImage = styled.Image`
  align-self: center;
  width: 230;
  height: 300;
`

export const DescriptionTitle = styled.Text`
  font-weight: bold;
  font-size: 24;
`

export const DescriptionTexts= styled.Text`
  font-size: 17;
`

export const ButtonsContainer = styled.View`
  flex-direction: row;
  flex: 2;
  align-items: center; 
  justify-content: center;
`

export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center; 
  justify-content: center;
`
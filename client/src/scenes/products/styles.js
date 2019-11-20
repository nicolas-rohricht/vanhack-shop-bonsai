import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const device_width = Dimensions.get('screen').width;

export const Container = styled.View`
  background-color: #f4f4f4;
  flex: 1;
`;

export const ProductContainer = styled.View`
  flex-direction: column;
  width: ${device_width/2}
`;

export const DescriptionContainer =styled.View`
  flex-direction: column;
  height: 115px; 
  border-bottom-width: 1;
  border-top-width: 1; 
  border-left-width: 0.5; 
  border-right-width: 0.5; 
  border-color: silver;
`

export const TitleAndMerchantContainer = styled.View`
  flex-direction: column;
  flex: 2;
  margin-top: 5;
  margin-left: 10;
`

export const ProductImage = styled.Image`
  align-self: center;
  width: 130;
  height: 200;
`

export const DescriptionTitle = styled.Text`
  font-weight: bold;
  font-size: 15;
`

export const DescriptionMerchant= styled.Text`
 
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

export const ExtraButton = styled(Icon)`
  border-radius: 8;
  padding: 8px;
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

export const ExtraButtonContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
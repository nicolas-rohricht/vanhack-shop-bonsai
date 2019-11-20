import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const UserContainer = styled.View`
  flex:1;
  flex-direction: column;
  align-items: center;
`
export const UserImage = styled.Image`
  margin-top: 50px;
  height: 120px;
  width: 120px;
  border-radius: 60;
  border-width: 0.6;
  border-color: black;
`
export const UserName = styled.Text`
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
`
export const UserEmail = styled.Text`
  text-align: center;
  font-size: 13px;
`

export const ButtonsContainer = styled.View`
  margin: 50px 40px;
  border-top-width: 0.6;
  border-top-color: black;
  flex-direction: row;
`
export const Separator = styled.View`
  margin: 30px;
  border-left-width: 0.6;
  border-left-color: black;
`
export const ButtonContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`
export const ButtonIcon = styled(Icon)`
  font-size: 45px;
`

export const ButtonText = styled.Text`
  text-align: center;
  font-size: 15px;
`
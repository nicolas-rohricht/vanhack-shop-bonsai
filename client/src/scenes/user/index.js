//User page

import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { UserContainer, UserImage, UserName, UserEmail, ButtonsContainer, 
         ButtonContainer, Separator, ButtonIcon, ButtonText } from './styles';
import { Actions } from 'react-native-router-flux';

export default class User extends Component {
  render() {
    return (
      <UserContainer>
        <UserImage source={{ uri: 'https://picsum.photos/300/?random'}} />
        <UserName>Nícolas Michel Rohricht</UserName>
        <UserEmail>nicolas.rohricht@outlook.com</UserEmail>

        <ButtonsContainer>
          <ButtonContainer>
            <TouchableOpacity onPress={() => Actions.liked()}>
                <ButtonIcon name='heart' color='#2196f3' />
                <ButtonText>Liked products</ButtonText>
            </TouchableOpacity>
          </ButtonContainer>
          <Separator />
          <ButtonContainer>
            <TouchableOpacity onPress={() => Actions.lastOrders()}>
              <ButtonIcon name='history' color='#009933' />
              <ButtonText>Last orders</ButtonText>
            </TouchableOpacity>
          </ButtonContainer>
        </ButtonsContainer>
      </UserContainer>
    )
  }
}

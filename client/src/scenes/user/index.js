import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { UserContainer, UserImage, UserName, UserEmail, ButtonsContainer, 
         ButtonContainer, Separator, ButtonIcon, ButtonText } from './styles';
import { Actions } from 'react-native-router-flux';

class User extends Component {
  render() {
    return (
      <UserContainer>
        <UserImage source={{ uri: 'https://picsum.photos/300/?random'}} />
        <UserName>Nícolas Michel Rohricht</UserName>
        <UserEmail>nicolas.rohricht@outlook.com</UserEmail>

        <ButtonsContainer>
          <TouchableOpacity onPress={() => Actions.liked()}>
            <ButtonContainer>
              <ButtonIcon name='heart' color='#2196f3' />
              <ButtonText>Liked products</ButtonText>
            </ButtonContainer>
          </TouchableOpacity>
          <Separator />
          <TouchableOpacity onPress={() => Actions.lastOrders()}>
            <ButtonContainer>
              <ButtonIcon name='history' color='#009933' />
              <ButtonText>Last orders</ButtonText>
            </ButtonContainer>
          </TouchableOpacity>
        </ButtonsContainer>
      </UserContainer>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect( mapStateToProps, {})(User);
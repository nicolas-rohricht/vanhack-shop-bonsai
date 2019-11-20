import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserContainer, UserImage, UserName, UserEmail, ButtonsContainer, 
         ButtonContainer, Separator, ButtonIcon, ButtonText } from './styledComponents';

class User extends Component {
  render() {
    return (
      <UserContainer>
        <UserImage source={{ uri: 'https://picsum.photos/300/?random'}} />
        <UserName>Nícolas Michel Rohricht</UserName>
        <UserEmail>nicolas.rohricht@outlook.com</UserEmail>

        <ButtonsContainer>
          <ButtonContainer>
            <ButtonIcon name='heart' color='#ff1a1a' />
            <ButtonText>Liked products</ButtonText>
          </ButtonContainer>
          <Separator />
          <ButtonContainer>
            <ButtonIcon name='history' color='#009933' />
            <ButtonText>Last orders</ButtonText>
          </ButtonContainer>
        </ButtonsContainer>
      </UserContainer>
    )
  }
}

const mapStateToProps = state => ({

});

export default connect( mapStateToProps, {})(User);
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';

class ActivityIndicator extends Component {

  render() {
    let { message, size: sizeCircle, color: colorCircle } = this.props;

    if (message === undefined) { message = 'Wait...'}
    if (sizeCircle === undefined) { sizeCircle = 50 }
    if (colorCircle === undefined) { colorCircle = 'white' }

    return (
      <LoadingContainer>
        <IndicatorContainer>
          <Logo
            animation='rotate'
            useNativeDriver
            duration={480}
            iterationCount="infinite"
            source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiyvkl72WK2VLpiEMGcUrI7ynDTfQbU96Qn32QkdU4PGleD6Bf'}}
          />
          <Message>{message}</Message>
        </IndicatorContainer>
      </LoadingContainer>
    );
  }
}

const LoadingContainer = styled.View`
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.7;
  background-color: black;
  justify-content: center;
  align-items: center;
`
const IndicatorContainer = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`

const Message = styled.Text`
  color: white;
  font-size: 21px;
  margin: 15px 100px;
  text-align: center;
`
const Logo = styled(Animatable.Image)`
  width: 120;
  height: 120;
  resize-mode: contain;
  border-radius: 60;
`

export default ActivityIndicator;

import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

class Checkout extends Component {
  state = {
    done: false,
    textOpacity: 0,
    buttonOpacity: 0
  }

  doneText = ref => this.doneText = ref;
  back = ref => this.back = ref;

  componentDidMount() {
    setTimeout(() => this.setState({ done: true }), 4000);
  }
  
  render() {
    if ( this.state.done ) {
      return(
        <Container>
          <AnimationContainer>
            <LottieView 
              resizeMode='contain' 
              source={require('../../android/app/src/main/assets/done.json')} 
              autoPlay 
              loop={false}
              onAnimationFinish={() => {
                setTimeout(() => this.doneText.fadeIn(), 200);
                setTimeout(() => this.back.fadeIn(), 500);
              }}
            />
          </AnimationContainer>
          <CongratsText 
            ref={this.doneText}
            style={{ opacity: this.state.textOpacity }}>
              Congrats!
          </CongratsText>
          <TouchableOpacity onPress={() => {
            Actions.pop();
            Actions.tabUser();
          }}>
            <BackToProducts 
              ref={this.back}
              style={{ opacity: this.state.buttonOpacity }}>
                Check your Last Orders
            </BackToProducts>
          </TouchableOpacity>
        </Container>
      )
    } else {
      return (
        <LottieView autoSize source={require('../../android/app/src/main/assets/checkingout.json')} autoPlay  />
      )
    }
    
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center; 
  justify-content: center;
  flex-direction: column;
`
const AnimationContainer = styled.View`
  align-self: center;
  height: 280px; 
  width: 280px;
`

const CongratsText = styled(Animatable.Text)`
  text-align: center;
  font-size: 25px;
  color: #2196f3;
  font-weight: bold;
`

const BackToProducts = styled(Animatable.Text)`
  text-align: center;
  font-size: 20px;
  margin-top: 60px;
  textDecorationLine: underline;
  color: #0645AD;
`

export default Checkout;
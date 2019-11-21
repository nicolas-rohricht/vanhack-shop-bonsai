//A separated TabBarIcon to count how many items are already added to the cart

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const tabBarIconSize = 42;
const focusedColor = 'black';
const unfocusedColor = 'gray';

class UserIcon extends Component {
  render() {
    const { focused } = this.props;
    return (
      <ContainerIconTab
        animation='tada'
        duration={400}
        useNativeDriver 
        style={{ marginTop: this.props.likedItems.length > 0 ? 20 : 0}}
      >
        { this.props.likedItems.length > 0 &&
          <CounterText 
            animation='slideInUp'
            duration={100}
            useNativeDriver
          >{this.props.likedItems.length}</CounterText>
        }
        
        <Icon name='user' size={tabBarIconSize} color={ focused ? focusedColor : unfocusedColor} />
      </ContainerIconTab>
    )
  }
}


const ContainerIconTab = styled(Animatable.View)`
  align-items: center;
  justify-content: center;
  
`

const CounterText = styled(Animatable.Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
  z-index: 1;
  margin-bottom: -42px;
  margin-right: -2px;
`

const mapStateToProps = state => ({
  likedItems: state.dbReducer.likedItems
})

export default connect( mapStateToProps, {})(UserIcon);
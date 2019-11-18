import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions, Reducer, Overlay, Modal, Stack, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';

import Styles from './styles';
import TabIcon from './src/components/TabIcons';

//Scenes
import Products from './src/scenes/products';

const focusedColor = 'black';
const unfocusedColor = 'gray';
const tabBarIconSize = 42;

class RouterComponent extends Component {
  TabStore = ({ focused }) => (
    <ContainerIconTab>
      <Icon name='home' size={tabBarIconSize} color={ focused ? focusedColor : unfocusedColor} />
    </ContainerIconTab>
  );

  TabCart = ({ focused }) => (
    <ContainerIconTab
      animation='tada'
      duration={400}
      useNativeDriver  
    >
      { this.props.cartItems.length > 0 &&
        <CounterText 
          animation='slideInUp'
          duration={100}
          useNativeDriver
        >{this.props.cartItems.length}</CounterText>
      }
      
      <Icon name='shopping-cart' size={tabBarIconSize} color={ focused ? focusedColor : unfocusedColor} />
    </ContainerIconTab>
  );

  TabUser = ({ focused }) => (
    <ContainerIconTab>
      <Icon name='user' size={tabBarIconSize} color={ focused ? focusedColor : unfocusedColor} />
    </ContainerIconTab>
  );
  
  render() {
    return (
      <Router>
        <Overlay key='overlay'>
          <Modal key='modal' hideNavBar>
            <Scene
              key='appScenes'
              hideNavBar
            >
              <Tabs
                key='appTabs'
                tabBarStyle={ Styles.tabBarStyle }
                navigationBarStyle={ Styles.navigatorBar }
                titleStyle={ Styles.navigatorTitle }
                headerLayoutPreset={'center'}

                tabBarPosition='bottom'
                showLabel={false}
                swipeEnabled={false}

                lazy
              >
                <Stack
                  key='tabStore'
                  title='Store'
                  icon={ this.TabStore }
                >
                  <Scene 
                    key='products'
                    title='Products'
                    component={Products}
                  />
                </Stack>  
                <Stack
                  key='tabCart'
                  title='Cart'
                  icon={ this.TabCart }
                >
                  <Scene 
                    key='cart'
                    title='Cart'
                    component={Products}
                  />
                </Stack>  
                <Stack
                  key='tabUser'
                  title='User'
                  icon={ this.TabUser }
                >
                  <Scene 
                    key='user'
                    title='Profile'
                    component={Products}
                  />
                </Stack>  
              </Tabs>
            </Scene>
          </Modal>
        </Overlay>
      </Router>
    )
  }
}

const ContainerIconTab = styled(Animatable.View)`
  align-items: center;
  justify-content: center;
`

const CartCounter = styled.View`
  width: 24;
  height: 24;
  border-radius: 12;
  background-color: #ff1a1a;
  align-items: center;
  margin-right: -20px;
  position: absolute;
  z-index: 1;
`
const CounterText = styled(Animatable.Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
  z-index: 1;
  margin-bottom: -28px;
  margin-right: -5px;
`

const mapStateToProps = state => ({
  cartItems: state.dbReducer.cartItems
});

export default connect( mapStateToProps, {})(RouterComponent);
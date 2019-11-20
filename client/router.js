import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions, Reducer, Overlay, Modal, Stack, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as Animatable from 'react-native-animatable';

import Styles from './styles';

//Scenes
import Products from './src/scenes/products';
import ShoppingCart from './src/scenes/shopping-cart';
import Checkout from './src/components/checkout';
import User from './src/scenes/user';
import LikedProducts from './src/scenes/liked-products';
import LastOrders from './src/scenes/last-orders';
import { RenderFilterButtonLeft } from './src/components/navBarFilterButton';
import TabCartIconTab from './src/components/tabCartIcon';

const focusedColor = 'black';
const unfocusedColor = 'gray';
const tabBarIconSize = 42;

class RouterComponent extends Component {
  TabStore = ({ focused }) => (
    <ContainerIconTab>
      <Icon name='home' size={tabBarIconSize} color={ focused ? focusedColor : unfocusedColor} />
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
                    renderLeftButton={ () => RenderFilterButtonLeft() }
                  />
                </Stack>  
                <Stack
                  key='tabCart'
                  title='Cart'
                  icon={ TabCartIconTab  }
                >
                  <Scene 
                    key='cart'
                    title='Cart'
                    component={ShoppingCart}
                  />

                  <Scene 
                    key='checkout'
                    title='Chekout'
                    hideNavBar
                    hideTabBar
                    component={Checkout}
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
                    component={User}
                  />

                  <Scene 
                    key='liked'
                    title='My Liked Products'
                    component={LikedProducts}
                  />

                  <Scene 
                    key='lastOrders'
                    title='My Last Orders'
                    component={LastOrders}
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



const mapStateToProps = state => ({
  //cartItems: state.dbReducer.cartItems
});

export default connect( mapStateToProps, {})(RouterComponent);
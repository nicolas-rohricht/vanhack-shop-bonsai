import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Actions, Reducer, Overlay, Modal, Stack, Tabs } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Styles from './styles';
import TabIcon from './src/components/TabIcons';

//Scenes
import Products from './src/scenes/products';

const focusedColor = 'black';
const unfocusedColor = 'gray';
const tabBarIconSize = 26;

class RouterComponent extends Component {
  TabStore = ({ focused }) => (
    <ContainerIconTab>
      <Icon name='home' size={tabBarIconSize} color={ focused ? focusedColor : unfocusedColor} />
    </ContainerIconTab>
  );

  TabCart = ({ focused }) => (
    <ContainerIconTab>
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

const ContainerIconTab = styled.View`
  align-items: center;
  justify-content: center;
`

const mapStateToProps = state => ({

});

export default connect( mapStateToProps, {})(RouterComponent);
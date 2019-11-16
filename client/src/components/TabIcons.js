import React, { Component } from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, Image, View} from 'react-native';
import styled from 'styled-components';

const ContainerIconTab = styled.View`
  align-items: center;
  justify-content: center;
`
export default function TabIcon() {
  return(
    <View>
      <Icon 
        name={name} 
        size={22} 
        //color={focused ? 'black' : 'gray' } 
      />
    </View>
  )
}

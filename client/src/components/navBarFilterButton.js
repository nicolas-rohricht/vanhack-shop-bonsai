import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const RenderFilterButtonLeft = () => (
  <FilterIcon name='filter'/>
);

const FilterIcon = styled(Icon)`
  font-size: 26px;
  color: black;
  padding-left: 20px;
`
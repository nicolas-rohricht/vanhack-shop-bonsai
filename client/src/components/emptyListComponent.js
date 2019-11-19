import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EmptyListComponent extends Component {
  render() {
    const { icon = 'frown-o', title = 'Empty list', subtitle='Try to add some item to see it here...'} = this.props;
    return(
      <EmptyListContainer>
        <EmptyListIcon name={icon}/>
        <EmptyListTitle>{title}</EmptyListTitle>
        <EmptyListSubtitle>{subtitle}</EmptyListSubtitle>
      </EmptyListContainer>
    )
  }
}

const EmptyListContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
`
const EmptyListIcon = styled(Icon)`
  font-size: 100px;
  color: gray;
`
const EmptyListTitle = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: gray;
  margin: 20px;
`

const EmptyListSubtitle = styled.Text`
  font-size: 14px;
  color: gray;
  text-align: center;
  margin: 0px 50px;
`
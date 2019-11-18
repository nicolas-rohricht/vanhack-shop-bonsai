import React, { Component } from 'react';
import styled from 'styled-components';

import { Chip } from './chip';

export default class ProductsFilter extends Component {
  render() {
    return (
      <Container>
        <Title></Title>
      </Container>
    )
  }
}

const Container = styled.View`
  flex-direction: column;
  margin: 10px 10px;
`

const Title = styled.Text`
  font-size: 16px;

`
import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { brands, merchants, colors } from '../components/db';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductsFilter extends Component {
  state={
    brands: [],
    merchants: [],
    colors: []
  }

  componentDidMount() {
    this.setState({ brands, merchants, colors });
  }
  
  changeSelectedBrands = ( item ) => {
    this.state.brands.map(element => { 
      if ( item.id === element.id ) {
        element.selected = !element.selected
      };
    });

    this.setState({ brands });
  }

  changeSelectedMerchants = ( item ) => {
    this.state.merchants.map(element => { 
      if ( item.id === element.id ) {
        element.selected = !element.selected
      };
    });

    this.setState({ merchants });
  }
  
  renderBrandsItems = ( {item} ) => {
    return(
      <TouchableOpacity onPress={ () => { this.changeSelectedBrands( item ) }}>
        <ItemContainer>
          <ItemInitialsContainer style={{ borderWidth: item.selected ? 4 : 0.6, 
                                          borderColor: item.selected ? '#00cc66' : 'black' }} >
            <ItemInitials>{item.initials}</ItemInitials>
          </ItemInitialsContainer>
          <ItemName style={{ color: item.selected ? '#00cc66' : 'black' }} >{item.name}</ItemName>
        </ItemContainer>
      </TouchableOpacity>
    )
  }
  
  renderMerchantsItems = ({ item }) => {
    return(
      <TouchableOpacity onPress={ () => { this.changeSelectedMerchants( item ) }}>
        <ItemContainer>
          <ItemInitialsContainer style={{ borderWidth: item.selected ? 4 : 0.6, 
                                          borderColor: item.selected ? '#00cc66' : 'black' }} >
            <ItemInitials>{item.initials}</ItemInitials>
          </ItemInitialsContainer>
          <ItemName style={{ color: item.selected ? '#00cc66' : 'black' }} >{item.name}</ItemName>
        </ItemContainer>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        <Container>
          <TitlesContainer>
            <Title>Are you looking for a specific thing?</Title>
            <Subtitle>Find here!</Subtitle>
          </TitlesContainer>
          <SectionContainer>
            <SectionTitle>Brands</SectionTitle>
              <FlatList
                style={{ alignSelf: "center"}}
                data={this.state.brands}
                renderItem={this.renderBrandsItems}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
              />
          </SectionContainer>
          <SectionContainer>
            <SectionTitle>Merchants</SectionTitle>
              <FlatList
                style={{ alignSelf: "center"}}
                data={this.state.merchants}
                renderItem={this.renderMerchantsItems}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
              />
          </SectionContainer>
        </Container>
      </ScrollView>
    )
  }
}

const Container = styled.View`
  flex-direction: column;
  margin: 10px 10px;
`

const Title = styled.Text`
  font-size: 20px;
  align-self: center;
  text-align: center;
`

const Subtitle = styled.Text`
  font-size: 17px;
  align-self: center;
  text-align: center;
`
const TitlesContainer = styled.View`
  border-bottom-width: 0.3;
  border-bottom-color: gray;
  padding-bottom: 15px;
`
const SectionContainer = styled.View`
  flex-direction: column;
  margin-top: 15px;
`
const SectionTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`
const ItemContainer = styled.View`
 flex-direction: column;
 margin: 10px 10px;
`
const ItemInitialsContainer = styled.View`
  border-radius: 8;
  height: 60px;
  width: 60px;
  background-color: gray;
  align-items: center;
  justify-content: center;
`
const ItemInitials = styled.Text`
  font-size: 24px;
  color: black;
`

const ItemName = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 5px;
`
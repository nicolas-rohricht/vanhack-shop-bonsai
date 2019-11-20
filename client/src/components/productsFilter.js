//A filter component added to the produtcs list.
//If I had some API together with the app, this class would be wrote only with some visual components
//The logical part like filter the products should be done by the API

import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { brands, merchants, colors, products } from '../components/db';
import { connect } from 'react-redux';

import { store } from '../../config';
import Types from '../actions/actionsTypes';

class ProductsFilter extends Component {
  state={
    brands: [],
    merchants: [],
    colors: [],
    products: [],
    nameOfProduct: ''
  }

  //When mounted, save on state the data from API
  componentDidMount() {
    this.setState({ brands, merchants, colors, products });
  }
  
  //Select the brands to filter
  changeSelectedBrands = ( item ) => {
    this.state.brands.map(element => { 
      if ( item.id === element.id ) {
        element.selected = !element.selected
      };
    });

    this.setState({ brands });
  }

  //Select the merchants to filter
  changeSelectedMerchants = ( item ) => {
    this.state.merchants.map(element => { 
      if ( item.id === element.id ) {
        element.selected = !element.selected
      };
    });

    this.setState({ merchants });
  }

  //Select the colors to filter
  changeSelectedColors = ( item ) => {
    this.state.colors.map(element => { 
      if ( item.id === element.id ) {
        element.selected = !element.selected
      };
    });

    this.setState({ colors });
  }
  
  //Render the brands squares
  renderBrandsItems = ( {item} ) => {
    return(
      <TouchableOpacity onPress={ () => { this.changeSelectedBrands( item ) }}>
        <ItemContainer>
          <ItemInitialsContainer style={{ borderWidth: item.selected ? 4 : 0, 
                                          borderColor: item.selected ? '#00cc66' : 'black' }} >
            <ItemInitials>{item.initials}</ItemInitials>
          </ItemInitialsContainer>
          <ItemName style={{ color: item.selected ? '#00cc66' : 'black' }} >{item.name}</ItemName>
        </ItemContainer>
      </TouchableOpacity>
    )
  }
  
  //Render the merchants squares
  renderMerchantsItems = ({ item }) => {
    return(
      <TouchableOpacity onPress={ () => { this.changeSelectedMerchants( item ) }}>
        <ItemContainer>
          <ItemInitialsContainer style={{ borderWidth: item.selected ? 4 : 0, 
                                          borderColor: item.selected ? '#00cc66' : 'black' }} >
            <ItemInitials>{item.initials}</ItemInitials>
          </ItemInitialsContainer>
          <ItemName style={{ color: item.selected ? '#00cc66' : 'black' }} >{item.name}</ItemName>
        </ItemContainer>
      </TouchableOpacity>
    )
  }

  //Render the colors squares
  renderColorsItems = ({ item }) => {
    return(
      <TouchableOpacity onPress={ () => { this.changeSelectedColors( item ) }}>
        <ItemContainer>
          <ItemInitialsContainer 
            style={{ borderWidth: item.selected ? 4 : 0, 
                     borderColor: item.selected ? '#00cc66' : 'black' ,
                     backgroundColor: item.color
                   }} 
          >
          </ItemInitialsContainer>
          <ItemName style={{ color: item.selected ? '#00cc66' : 'black' }} >{item.name}</ItemName>
        </ItemContainer>
      </TouchableOpacity>
    )
  }

  //Filter the products accordint to selected options
  filter = () => {
    
    //Hide the keyboard for a better user experience
    Keyboard.dismiss();

    //Unfortunatelly, I had to write the app with a universe of mocked JSON's.
    //Here I read them to filter the products
    //On a real and totally working application, this job should be done by the API
    let tmpProducts = this.state.products;

    const selectedBrands = this.state.brands.filter( element => element.selected );
    const selectedMerchants = this.state.merchants.filter( element => element.selected );  
    const selectedColors = this.state.colors.filter( element => element.selected );

    let localList0 = [];

    //Filter by name of products
    if (this.state.nameOfProduct !== '') {
      localList0 = tmpProducts.filter( element => element.name.includes( this.state.nameOfProduct ));
    } else {
      localList0 = tmpProducts;
    }

    let localList1 = [];

    if (selectedBrands.length> 0) {
      //Filter by brands
      localList0.map( (element, index) => {
        selectedBrands.forEach( brandElement => {
          if (element.brandID ===  brandElement.id) {
            const newElement = {...element};
            localList1.push( newElement );
          }
        })
      });
    } else {
      localList1 = localList0;
    }

    let localList2 = [];

    if ( selectedMerchants.length > 0 ) {
      //Filter by merchants
      localList1.forEach( (element, index) => {
        selectedMerchants.forEach( merchantElement => {
          if (element.merchantID === merchantElement.id) {

            const newElement = {...element};
            localList2.push( newElement );
          }
        })
      });
    } else {
      localList2 = localList1;
    }

    let finalList = [];

    if ( selectedColors.length > 0 ) {
      //Filter by colors
      localList2.forEach( (element, index) => {
        selectedColors.forEach( colorElement => {

          if (element.colorID === colorElement.id) {
            
            const newElement = {...element};
            finalList.push( newElement );
          }
        })
      });
    } else {
      finalList = localList2;
    }
    
    //Update on reducer, the filtered products
    store.dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: finalList });
  }

  clearFilter = () => {
    //Hide the keyboard for a better user experience
    Keyboard.dismiss();
    
    //Return all filter's array to default
    this.state.brands.map(element => { element.selected = false });
    this.setState({ brands });
    
    this.state.merchants.map(element => { element.selected = false });
    this.setState({ merchants });

    this.state.colors.map(element => { element.selected = false });
    this.setState({ colors });

    this.setState({ nameOfProduct: ' '});
    
    store.dispatch({ type: Types.GET_LIST_OF_PRODUCTS_SUCCESS, payload: products });
  }

  render() {
    return (
      <Container>
        <ScrollView>
            <TitlesContainer>
              <Title>Are you looking for a specific thing?</Title>
              <Subtitle>Find here!</Subtitle>
            </TitlesContainer>
            <SectionContainer>
              <SectionTitle>Product name</SectionTitle>
              <InputFilter 
                placeholder='Search here by product name...'
                value={ this.state.nameOfProduct }
                onChangeText={ nameOfProduct => this.setState({ nameOfProduct }) }
              />
            </SectionContainer>
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
              <SectionTitle>Colors</SectionTitle>
                <FlatList
                  style={{ alignSelf: "center"}}
                  data={this.state.colors}
                  renderItem={this.renderColorsItems}
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
        </ScrollView>
        <FooterButtonsContainer>
          <TouchableOpacity onPress={() => this.clearFilter() }>
            <FooterButtonsText>Clear all</FooterButtonsText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.filter() }>
            <FooterButtonsText>Apply</FooterButtonsText>
          </TouchableOpacity>
        </FooterButtonsContainer>
      </Container>
    )
  }
}

const Container = styled.View`
  flex-direction: column;
  margin: 10px 10px;
  flex: 1;
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

const InputFilter = styled.TextInput`
  height: 45px;
  border-width: 0.4;
  border-color: gray;
  border-radius: 8;
  margin-top: 10px;
  font-size: 18px;
`

const FooterButtonsContainer = styled.View`
  flex-direction: row;
  z-index: -1;
  justify-content: space-around;
  padding-top: 10px;
`

const FooterButtonsText = styled.Text`
  font-size: 18px;
`

const mapStateToProps = state => ({
  listOfProducts : state.productsReducer.listOfProducts,
})

export default connect( mapStateToProps, {})(ProductsFilter);
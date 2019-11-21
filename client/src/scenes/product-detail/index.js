import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Button from 'apsl-react-native-button';
import { verticalScale, scale } from '../../../sizes';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import { Container,  DescriptionContainer, ProductContainer, 
          ProductImage, DescriptionTitle, DescriptionTexts, 
          TitleAndMerchantContainer, TextsContainer, 
          ButtonsContainer, ButtonContainer } from './styles';
import { changeCartItems, changeLikedItems } from '../../actions/dbActions';

class ProductDetails extends Component {
  //Add items to the cart
  addToCart = ( item ) => {
    this.props.changeCartItems( this.props.cartItems, [item]);
  }

  //Add items to the liked list
  addToLiked = ( item ) => {
    this.props.changeLikedItems( this.props.likedItems, item);
  }

  //Buy a single product
  buyProduct = ( item ) => {
    this.props.changeCartItems( this.props.cartItems, [item]);
    Actions.tabCart();
  }
  
  render() {
    const { item } = this.props;
    return (
      <Container>
        <ProductContainer>
          <ProductImage 
            source={{ uri: item.image }}
          />
          <DescriptionContainer>
            <TitleAndMerchantContainer >
              <TextsContainer>
                <DescriptionTitle>{item.name}</DescriptionTitle>
                <DescriptionTexts>Sold by: {item.merchant}</DescriptionTexts>
                <DescriptionTexts>Color: {item.color}</DescriptionTexts>
                <DescriptionTexts>Size: {item.size}</DescriptionTexts>
                <DescriptionTexts>Brand: {item.brand}</DescriptionTexts>
                <DescriptionTexts>Price: ${item.price.toFixed(2)}</DescriptionTexts>
              </TextsContainer>
              
                <Button
                  onPress={()=>{ this.buyProduct( item ) }}      
                  style={ styles.buyButton } 
                  textStyle={ styles.textStyle }
                >
                  Buy
                </Button>
            </TitleAndMerchantContainer>
            <ButtonsContainer>
              <ButtonContainer>
                <TouchableOpacity onPress={() => { this.addToLiked( item ) }}>
                  <Icon color={'#2196f3'} name='heart' size={45} />
                </TouchableOpacity>
              </ButtonContainer>
              <ButtonContainer>
                <TouchableOpacity onPress={() => { this.addToCart( item ) }}>
                  <Icon color={'#008000'} name='shopping-cart' size={45} />
                </TouchableOpacity>
              </ButtonContainer>
            </ButtonsContainer>
          </DescriptionContainer>
        </ProductContainer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: verticalScale(10)
  },
  buyButton: {
    paddingHorizontal: scale(10),
    backgroundColor: '#2196f3',
    borderWidth: 0,
    marginRight: scale(10),
    marginTop: verticalScale(15),
    flex: 1
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
});

const mapStateToProps = state => ({
  cartItems: state.dbReducer.cartItems,
  likedItems: state.dbReducer.likedItems
})

export default connect( mapStateToProps, { changeCartItems, changeLikedItems })(ProductDetails);
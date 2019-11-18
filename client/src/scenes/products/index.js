import React, { Component } from 'react';
import {View, SafeAreaView, FlatList, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';

import Button from 'apsl-react-native-button';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

import { Container,  DescriptionContainer, ProductContainer, 
          ProductImage, DescriptionTitle, DescriptionText,  ExtraButtonContainer, 
          ExtraButton, AdditionalButtonsContainer, ImageAndDescriptionContainer,
          ExtraButtonText } from './styledComponents';
import { verticalScale, scale } from '../../../sizes';
import { getListOfProducts } from '../../actions/productsActions';
import ActivityIndicator from '../../components/activityIndicator';
import { changeCartItems } from '../../actions/dbActions';

const extraButtonIconSize = 32;




class ProductList extends Component {
  componentDidMount() {
    this.props.getListOfProducts();
  }

  addToCart = ( item ) => {
    const { listOfProducts, cartItems } = this.props;
    this.props.changeCartItems( listOfProducts, cartItems, item);
  }

  renderItem = ({item}) => {
    return (
      <ProductContainer >
        <ImageAndDescriptionContainer>
          <ProductImage resizeMode='stretch' source={{ uri: item.image }}/>
          <DescriptionContainer>
            <DescriptionTitle>{item && item.name}</DescriptionTitle>
            <DescriptionText>Size: {item && item.size}</DescriptionText>
            <DescriptionText>Color: {item && item.color}</DescriptionText>
            <DescriptionText>Price: {item && item.price}</DescriptionText>
            <DescriptionText >Description: {item && item.description}</DescriptionText>
            <Button
              onPress={()=>{}}      
              style={ styles.buyButton } 
              textStyle={ styles.textStyle }
            >
                Buy
            </Button>
          </DescriptionContainer>
        </ImageAndDescriptionContainer>
        <AdditionalButtonsContainer>
          <TouchableOpacity onPress={() => { }}>
            <ExtraButtonContainer>
              <ExtraButton name='check' size={extraButtonIconSize} color={ item.selected ? '#00cc66' : '#808080'} /> 
              <ExtraButtonText style={{ color: item.selected ? '#00cc66' : '#808080'}}>Select</ExtraButtonText>
            </ExtraButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <ExtraButtonContainer>
              <ExtraButton name='heart' size={extraButtonIconSize} color={'#ff1a1a'} />
              <ExtraButtonText style={{ color:'#ff1a1a'}}>Favorite</ExtraButtonText>
            </ExtraButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.addToCart( item ) }}>
            <ExtraButtonContainer>
              <ExtraButton name='shopping-cart' size={extraButtonIconSize} color={'#008000'} />
              <ExtraButtonText style={{ color:'#008000'}}>Add to cart</ExtraButtonText>
            </ExtraButtonContainer>
          </TouchableOpacity>
          </AdditionalButtonsContainer>
      </ProductContainer>
    );
  }
  
  render() {
    return (
      <>
        { this.props.gettingListOfProducts &&
          <ActivityIndicator message={`Getting only best products for you (:`}/>
        }
        <Container>
          <SafeAreaView>
            <FlatList
              data={this.props.listOfProducts}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </SafeAreaView>
        </Container>
      </>
    )
  }
}

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: verticalScale(10)
  },
  buyButton: {
    paddingHorizontal: scale(20),
    backgroundColor: '#2196f3',
    borderWidth: 0,
    marginHorizontal: scale(10),
    marginTop: verticalScale(7)
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  },
});

const mapStateToProps = state => ({
  listOfProducts : state.productsReducer.listOfProducts,
  gettingListOfProducts: state.productsReducer.gettingListOfProducts,
  cartItems: state.dbReducer.cartItems
});

export default connect( mapStateToProps, { getListOfProducts, changeCartItems })(ProductList);

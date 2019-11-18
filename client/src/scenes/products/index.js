import React, { Component } from 'react';
import {View, SafeAreaView, FlatList, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';

import Button from 'apsl-react-native-button';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer-menu';

import { Container,  DescriptionContainer, ProductContainer, 
          ProductImage, DescriptionTitle, DescriptionText,  ExtraButtonContainer, 
          ExtraButton, AdditionalButtonsContainer, ImageAndDescriptionContainer,
          ExtraButtonText, HeaderButtonsContainer } from './styledComponents';
import { verticalScale, scale } from '../../../sizes';
import { getListOfProducts } from '../../actions/productsActions';
import ActivityIndicator from '../../components/activityIndicator';
import { changeCartItems, changeLikedItems, changeSelectedItems, clearSelection } from '../../actions/dbActions';

const extraButtonIconSize = 32;

class ProductList extends Component {
  componentDidMount() {
    this.props.getListOfProducts();
  }

  addToCart = ( item ) => {
    this.props.changeCartItems( this.props.cartItems, [item]);
  }

  addToLiked = ( item ) => {
    this.props.changeLikedItems( this.props.likedItems, item);
  }

  selectProduct = ( item ) => {
    this.props.changeSelectedItems( this.props.listOfProducts, item );
  }

  clearSelection = () => {
    this.props.clearSelection( this.props.listOfProducts );
  }

  addAllToCart = () => {
    const allSelected = this.props.listOfProducts.filter(element => element.selected);

    this.props.changeCartItems( this.props.cartItems, [allSelected]);
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
            <DescriptionText>Brand: {item && item.brand}</DescriptionText>
            <DescriptionText>Price: ${item && (item.price).toFixed(2)}</DescriptionText>
            <DescriptionText>Sold by: {item && item.merchant}</DescriptionText>
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
          <TouchableOpacity onPress={() => { this.selectProduct( item ) }}>
            <ExtraButtonContainer>
              <ExtraButton name={item.selected ? 'check-square-o' : 'square-o'} size={extraButtonIconSize} color={ item.selected ? '#00cc66' : '#808080'} /> 
              <ExtraButtonText style={{ color: item.selected ? '#00cc66' : '#808080'}}>Select</ExtraButtonText>
            </ExtraButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.addToLiked( item ) }}>
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

  renderClearOrBuyAllProducts() {
    const counter = this.props.listOfProducts.filter(element => element.selected);

    if (counter.length > 0 ){
      return(
        <HeaderButtonsContainer
          animation='slideInDown'
          useNativeDriver
          duration={300}
        >
          <TouchableOpacity onPress={() => { this.clearSelection() }}>
            <ExtraButtonContainer>
              <ExtraButton name='times' size={extraButtonIconSize}  />
              <ExtraButtonText style={{ fontWeight: 'normal'}}>Clear selection</ExtraButtonText>
            </ExtraButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.addAllToCart() }}>
          <ExtraButtonContainer>
              <ExtraButton name='list-ul' size={extraButtonIconSize} />
              <ExtraButtonText style={{ fontWeight: 'normal'}}>Add all selected to cart</ExtraButtonText>
            </ExtraButtonContainer>
          </TouchableOpacity>
        </HeaderButtonsContainer>
      )
    }
  }
  
  render() {
    return (
      <>
        { this.props.gettingListOfProducts &&
          <ActivityIndicator message={`Getting only the best products for you (:`}/>
        }
        <Drawer
          ref={'sideButtonsDrawer'}
          drawerWidth={270}
          drawerContent={ <View /> }
          type={Drawer.types.Replace }
          drawerPosition={Drawer.positions.Left}
          disabled={ false }
        >
          <Container>
            <SafeAreaView>
              { this.renderClearOrBuyAllProducts() }
              <FlatList
                data={this.props.listOfProducts}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
              />
            </SafeAreaView>
              
          </Container>
        </Drawer>
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
  cartItems: state.dbReducer.cartItems,
  likedItems: state.dbReducer.likedItems
});

export default connect( mapStateToProps, { getListOfProducts, changeCartItems, changeLikedItems, changeSelectedItems, clearSelection })(ProductList);

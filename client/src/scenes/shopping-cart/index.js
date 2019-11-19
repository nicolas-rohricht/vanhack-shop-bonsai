import React, { Component } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';

import { Container,  DescriptionContainer, ProductContainer, 
        ProductImage, DescriptionTitle, DescriptionText, 
        ImageAndDescriptionContainer, ManageQuantityContainer, 
        ManageQuantityIcon, ManageQuantityText, HeaderCheckoutContainer, 
        CheckoutIcon, CheckoutValue, DescriptionValueContainer, RemoveFromCartButton } from './styledComponents';
import ActivityIndicator from '../../components/activityIndicator';
import EmptyListComponent from '../../components/emptyListComponent';
import { manageProductCartQuantity, removeCartItem, removeAllItemsFromCart } from '../../actions/dbActions';
import { verticalScale, moderateScale } from '../../../sizes';
import { Actions } from 'react-native-router-flux';

class ShoppingCart extends Component {
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
            <DescriptionText>Price: ${item && (item.price).toFixed(2)} - Total ${item && (item.price * item.quantity).toFixed(2)}</DescriptionText>
            <DescriptionText>Sold by: {item && item.merchant}</DescriptionText>

            <DescriptionText></DescriptionText>
            <DescriptionText>How many you want to buy?</DescriptionText>
            <ManageQuantityContainer>
              <TouchableOpacity onPress={() => item.quantity > 0 ? this.props.manageProductCartQuantity( item, this.props.cartItems, 'decrease' ) : () => {} } >
                <ManageQuantityIcon style={{ opacity: item.quantity > 0 ? 1 : 0.3 }} name='chevron-left'/>
              </TouchableOpacity>
              <ManageQuantityText>{item.quantity}</ManageQuantityText>
              <TouchableOpacity onPress={() => this.props.manageProductCartQuantity( item, this.props.cartItems, 'increase' ) }>
                <ManageQuantityIcon name='chevron-right'/>
              </TouchableOpacity>
            </ManageQuantityContainer>
          </DescriptionContainer>
          <TouchableOpacity onPress={ () => { this.props.removeCartItem( item, this.props.cartItems ) }}>
            <RemoveFromCartButton name='times-circle'/>
          </TouchableOpacity>
        </ImageAndDescriptionContainer>
      </ProductContainer>
    );
  }

  totalOfBuy() {
    const cartItems = this.props.cartItems;
    let totalValue = 0;

    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      
      const tmpValue = element.price * element.quantity;

      totalValue += tmpValue;
    }
    if (totalValue > 0) {
      return(
        <TouchableOpacity onPress={()=> {
          Actions.checkout();
          setTimeout(() => this.props.removeAllItemsFromCart(), 1000);
        }}>
          <HeaderCheckoutContainer
            animation='slideInDown'
            useNativeDriver
            duration={300}
          >
            <DescriptionValueContainer>
              <CheckoutValue>{`Total of\nyour purchase`}</CheckoutValue>
              <CheckoutValue style={{ fontSize: moderateScale(13)}}>{`Press here to checkout!`}</CheckoutValue>
            </DescriptionValueContainer>
            
          
            <CheckoutValue>${(totalValue).toFixed(2)}</CheckoutValue>
            
          </HeaderCheckoutContainer>
        </TouchableOpacity>
      )
    }
  }

  render() {
    return (
      <>
        { this.props.gettingListOfProducts &&
          <ActivityIndicator message={`Getting only the best products for you (:`}/>
        }
        
        <Container>
          <SafeAreaView>
            { this.totalOfBuy() }
            <FlatList
              style={{marginBottom: verticalScale(60)}}
              data={this.props.cartItems}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={ <EmptyListComponent 
                                      title='Your cart is empty!' 
                                      subtitle='Check the best products for you on the Products page and add them to see here and make you happy again!'
                                    /> }
            />
          </SafeAreaView>
            
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.dbReducer.cartItems,
});

export default connect( mapStateToProps, { manageProductCartQuantity, removeCartItem, removeAllItemsFromCart })(ShoppingCart);

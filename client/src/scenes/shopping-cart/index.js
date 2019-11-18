import React, { Component } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import { Container,  DescriptionContainer, ProductContainer, 
        ProductImage, DescriptionTitle, DescriptionText, 
        ImageAndDescriptionContainer, ManageQuantityContainer, 
        ManageQuantityIcon, ManageQuantityText } from './styledComponents';
import ActivityIndicator from '../../components/activityIndicator';
import EmptyListComponent from '../../components/emptyListComponent';
import { manageProductCartQuantity } from '../../actions/dbActions';

const extraButtonIconSize = 32;

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
        </ImageAndDescriptionContainer>
        
      </ProductContainer>
    );
  }

  render() {
    return (
      <>
        { this.props.gettingListOfProducts &&
          <ActivityIndicator message={`Getting only the best products for you (:`}/>
        }
        
        <Container>
          <SafeAreaView>
            <FlatList
              data={this.props.cartItems}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={ <EmptyListComponent 
                                      title='Your cart is empty!' 
                                      subtitle='Check our best products on the Products page and add to see here and make you happy again!'
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

export default connect( mapStateToProps, { manageProductCartQuantity })(ShoppingCart);
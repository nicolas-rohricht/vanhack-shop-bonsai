//Shows the list with liked products

import React, { Component } from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';

import { Container, CartItemContainer, CartItemImage,
         CartItemDescriptionContainer, CartItemTitle, CartItemText,
         RemoveFromCartButton } from './styles';
import EmptyListComponent from '../../components/emptyListComponent';
import { removeLikedItem } from '../../actions/dbActions';

class LikedProducts extends Component {
  renderItem = ({item}) => {
    return(
      <CartItemContainer>
        <CartItemImage source={{ uri: item.image }}/>
        <CartItemDescriptionContainer>
          <CartItemTitle>{item && item.name}</CartItemTitle>
          <CartItemText>Size: {item && item.size}</CartItemText>
          <CartItemText>Color: {item && item.color}</CartItemText>
          <CartItemText>Brand: {item && item.brand}</CartItemText>
          <CartItemText>Price: ${item && (item.price).toFixed(2)}</CartItemText>
        </CartItemDescriptionContainer>
        <TouchableOpacity onPress={ () => { this.props.removeLikedItem( item, this.props.likedItems ) }}>
          <RemoveFromCartButton name='trash'/>
        </TouchableOpacity>
      </CartItemContainer>
    )
  }

  render() {
    return (
      <>
        <Container>
          <SafeAreaView>
            <FlatList
              data={this.props.likedItems}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={ <EmptyListComponent 
                                      title='Your liked list is empty!' 
                                      subtitle='Check the products and hit the heart button to see some of them here!'
                                    /> }
            />
          </SafeAreaView>
            
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  likedItems: state.dbReducer.likedItems,
});

export default connect( mapStateToProps, { removeLikedItem })(LikedProducts);

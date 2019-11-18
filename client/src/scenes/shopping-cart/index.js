import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { connect } from 'react-redux';

import { Container,  DescriptionContainer, ProductContainer, 
        ProductImage, DescriptionTitle, DescriptionText, 
        ImageAndDescriptionContainer, ManageQuantityIcon } from './styledComponents';
import ActivityIndicator from '../../components/activityIndicator';
import EmptyListComponent from '../../components/emptyListComponent';

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
            <DescriptionText>Price: {item && item.price}</DescriptionText>
          </DescriptionContainer>
          <ManageQuantityContainer>
            <ManageQuantityIcon name=''/>
            <ManageQuantityText></ManageQuantityText>
            <ManageQuantityIcon />
          </ManageQuantityContainer>
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

export default connect( mapStateToProps, { })(ShoppingCart);

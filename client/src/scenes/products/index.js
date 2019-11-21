//The main App's screen. List the producst and all the functionalities

import React, { Component } from 'react';
import { SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';
import ProductsFilter from '../../components/productsFilter';
import { Actions } from 'react-native-router-flux';
import Button from 'apsl-react-native-button';

import { Container,  DescriptionContainer, ProductContainer, 
          ProductImage, DescriptionTitle, DescriptionMerchant,  ExtraButtonContainer, 
          TitleAndMerchantContainer, TextsContainer, ExtraButton, ButtonsContainer, ButtonContainer,
          ExtraButtonText, HeaderButtonsContainer } from './styles';
import { verticalScale, scale } from '../../../sizes';
import { getListOfProducts } from '../../actions/productsActions';
import ActivityIndicator from '../../components/activityIndicator';
import { changeCartItems, changeLikedItems, changeSelectedItems, clearSelection } from '../../actions/dbActions';
import EmptyListComponent from '../../components/emptyListComponent';
import { RenderFilterButtonLeft } from '../../components/navBarFilterButton';

const extraButtonIconSize = 32;

class ProductList extends Component {
  state={
    isMenuOpen: false
  }
  
  componentWillUpdate(nextProps) {
    if ((nextProps.listOfProducts !== this.props.listOfProducts) &&
        ( this.state.isMenuOpen )) {
      this.setState({ isMenuOpen: false });
    }
  }

  //When mounted
  componentDidMount() {
    //Update a filter button, passing a local function to toggle the side menu
    this.props.navigation.setParams({ left: () => 
      <TouchableOpacity
        onPress={() => this.setState({ isMenuOpen: !this.state.isMenuOpen })}
      >
        <RenderFilterButtonLeft />
      </TouchableOpacity>
    });
    
    //Get the list of products 
    this.props.getListOfProducts();
  }

  //Add items to the cart
  addToCart = ( item ) => {
    this.props.changeCartItems( this.props.cartItems, [item]);
  }

  //Add items to the liked list
  addToLiked = ( item ) => {
    this.props.changeLikedItems( this.props.likedItems, item);
  }

  //Add items to the selected. This is controled by a multiselector 
  selectProduct = ( item ) => {
    this.props.changeSelectedItems( this.props.listOfProducts, item );
  }

  //Clear the products selection
  clearSelection = () => {
    this.props.clearSelection( this.props.listOfProducts );
  }

  //Add all selected products to cart
  addAllToCart = () => {
    const allSelected = this.props.listOfProducts.filter(element => element.selected);

    this.props.changeCartItems( this.props.cartItems, allSelected);
  }

  //Buy a single product
  buyProduct = ( item ) => {
    this.props.changeCartItems( this.props.cartItems, [item]);
    Actions.tabCart();
  }

  //Render the product item
  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => Actions.productDetail({ item: item })}
      >
        <ProductContainer>
          <ProductImage 
            source={{ uri: item.image }}
          />
          <DescriptionContainer>
            <TitleAndMerchantContainer >
              <TextsContainer>
                <DescriptionTitle>{item.name}</DescriptionTitle>
                <DescriptionMerchant>{item.merchant}</DescriptionMerchant>
                <DescriptionMerchant>{item.color}</DescriptionMerchant>
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
                <TouchableOpacity onPress={() => { this.selectProduct( item ) }}>
                  <Icon color={ item.selected ? '#00cc66' : '#808080'} name={item.selected ? 'check-square-o' : 'square-o'} size={25} />
                </TouchableOpacity>
              </ButtonContainer>
              <ButtonContainer>
                <TouchableOpacity onPress={() => { this.addToLiked( item ) }}>
                  <Icon color={'#2196f3'} name='heart' size={25} />
                </TouchableOpacity>
              </ButtonContainer>
              <ButtonContainer>
                <TouchableOpacity onPress={() => { this.addToCart( item ) }}>
                  <Icon color={'#008000'} name='shopping-cart' size={25} />
                </TouchableOpacity>
              </ButtonContainer>
            </ButtonsContainer>
          </DescriptionContainer>
        </ProductContainer>
      </TouchableOpacity>
    )
  }

  //Render a top container with two options: clear the selection or add selected items to the cart
  renderClearOrAddAllProducts() {
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
        <SideMenu 
          menu={<ProductsFilter />}
          isOpen={this.state.isMenuOpen}
          onChange={isMenuOpen => this.setState({ isMenuOpen })}
        >
          <Container>
            <SafeAreaView>
              { this.renderClearOrAddAllProducts() }
              <FlatList
                numColumns={ 2 }
                style={{ alignSelf: 'center' }}
                data={this.props.listOfProducts}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={ <EmptyListComponent 
                                       title='There are no products to show!' 
                                       subtitle='Check your connection or verify the params of the filter!'
                                       icon='list'
                                      />}
              />
            </SafeAreaView>
              
          </Container>
        </SideMenu>
      </>
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
  listOfProducts : state.productsReducer.listOfProducts,
  gettingListOfProducts: state.productsReducer.gettingListOfProducts,
  cartItems: state.dbReducer.cartItems,
  likedItems: state.dbReducer.likedItems
});

export default connect( mapStateToProps, { getListOfProducts, changeCartItems, changeLikedItems, changeSelectedItems, clearSelection })(ProductList);

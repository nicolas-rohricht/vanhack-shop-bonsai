import React from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Container,  DescriptionContainer, ProductContainer, ProductImage, DescriptionTitle, DescriptionText} from './styledComponents';
import { verticalScale, scale } from '../../../sizes';

const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      price
      description
      color
      size
      image
    }
  }
`;

const renderItem = ({item}) => {
  return (
    <ProductContainer>
      <ProductImage source={{uri: item.image}} />
      <DescriptionContainer>
        <DescriptionTitle>{item && item.name}</DescriptionTitle>
        <DescriptionText>Size: {item && item.size}</DescriptionText>
        <DescriptionText>Color: {item && item.color}</DescriptionText>
        <DescriptionText>Price: {item && item.price}</DescriptionText>
        <DescriptionText>Description: {item && item.description}</DescriptionText>
        <Button title="Buy" type="solid" style={ styles.buyButton } />
      </DescriptionContainer>
    </ProductContainer>
  );
};

const keyExtractor = item => item.id;

const loadingList = () => {
  return( <Text> Loading... </Text> );
}

const ProductsList = () => {
  const { loading, error, data } =  useQuery(GET_PRODUCTS);
  const { products } = data || {};

  if (loading) {
    return(
      loadingList()
    )
  }
  if (data && data.products) return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaView>
  );
  else console.error(error);
};

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: verticalScale(10)
  },
  buyButton: {
    paddingHorizontal: scale(20),
    color: '#2196f3'
  }
});

export default ProductsList;

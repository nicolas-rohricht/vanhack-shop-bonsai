import React from 'react';
import {View, SafeAreaView, FlatList, StyleSheet, Text, Animated } from 'react-native';

import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Button from 'apsl-react-native-button';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { Container,  DescriptionContainer, ProductContainer, ProductImage, DescriptionTitle, DescriptionText} from './styledComponents';
import { verticalScale, scale } from '../../../sizes';

const translateX = new Animated.Value(0);

const animatedEvent = Animated.event(
  [
    {
      nativeEvent: {
        translationX: translateX
      }
    }
  ],
  {
    useNativeDriver: true 
  }
)



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

function onHandlerStateChange( event ) {
  console.tron.log('chegou aqui');
  if (event.nativeEvent.oldState === State.ACTIVE) {
    let opened = false;
    const { translationX } = event.nativeEvent;

    offset += translationX;

    if (translationX >= 100) {
      opened = true;
    } else {
      translateX.setValue(offset);
      translateX.setOffset(0);
      offset = 0;
    }

    Animated.timing(translateX, {
      toValue: opened ? 380 : 0,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      offset = opened ? 380 : 0;
      translateX.setOffset(offset);
      translateX.setValue(0);
    });
    

    //translateY.setOffset(offset);
    //translateY.setValue(0);
  }
}

const LeftActions = () => {
  return(
    <View>
      <Text>Funciona pleaaase!</Text>
    </View>
  )
}

const renderItem = ({item}) => {
  
  return (
    <Swipeable
      renderLeftActions={LeftActions}
    >
      <ProductContainer >
        <ProductImage source={{uri: item.image}} />
        <DescriptionContainer>
          <DescriptionTitle>{item && item.name}</DescriptionTitle>
          <DescriptionText>Size: {item && item.size}</DescriptionText>
          <DescriptionText>Color: {item && item.color}</DescriptionText>
          <DescriptionText>Price: {item && item.price}</DescriptionText>
          <DescriptionText>Description: {item && item.description}</DescriptionText>
          <Button
            onPress={()=>{}}      
            style={ styles.buyButton } 
            textStyle={ styles.textStyle }
          >
              Buy
          </Button>
        </DescriptionContainer>
      </ProductContainer>
    </Swipeable>
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
    backgroundColor: '#2196f3',
    borderWidth: 0,
    marginHorizontal: scale(10),
    marginTop: verticalScale(10)
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
  }
});

export default ProductsList;

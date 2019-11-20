import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import moment from 'moment-timezone';
import 'moment/locale/pt-br';

import { connect } from 'react-redux';

import { Container, LastContainer, LastID,
         LastDescriptionContainer, LastItemPrice, CartItemText } from './styles';
import EmptyListComponent from '../../components/emptyListComponent';
import { removeLikedItem } from '../../actions/dbActions';

class LikedProducts extends Component {
  renderItem = ({item}) => {
    const date = moment.tz(item.date, 'America/Toronto');
    return(
      <LastContainer>
        <LastID>#{item.id}</LastID>
        <LastDescriptionContainer>
          <LastItemPrice>${item && item.value.toFixed(2)}</LastItemPrice>
          <CartItemText>{date.format('MM/DD/YYYY HH:mm:ss')}</CartItemText>
        </LastDescriptionContainer>
      </LastContainer>
    )
  }

  render() {
    return (
      <>
        <Container>
          <SafeAreaView>
            <FlatList
              data={this.props.lastOrders}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
              ListEmptyComponent={ <EmptyListComponent 
                                      title={`Oh! It seems you didn't buy anything yet!` }
                                      subtitle='Add some items to the cart, and finish the order by clicking on the header!'
                                    /> }
            />
          </SafeAreaView>
            
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => ({
  lastOrders: state.dbReducer.lastOrders,
});

export default connect( mapStateToProps, { removeLikedItem })(LikedProducts);

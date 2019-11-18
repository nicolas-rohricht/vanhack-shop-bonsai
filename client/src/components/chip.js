import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import commonStyles from '../../../assets/css/commonStyles'
import { verticalScale } from '../../utils/sizes';

class Chip extends Component {

  state = {
    idChipSelected: this.props.selectedValue,
  }

  selectedChip = id => {
    let tmpId = id

    if (this.state.idChipSelected == id) {
      tmpId = 0
    }

    this.setState({ idChipSelected: tmpId })

     this.props.returnValue(tmpId)
  }

  checks = (id, style) => {
    if (id == this.state.idChipSelected)
      return style

    return
  }

  renderItemText( item ) {
    let field = this.props.nameOfField

    if (field === undefined) {
      field = 'value'
    }

    switch (field) {
      case 'value':
        return item.value

      case 'categoria':
        return item.categoria

      default:
        return ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.items.map((item) => (
          <TouchableWithoutFeedback key={item.id} onPress={() => { this.selectedChip(item.id) }}>
            <View style={[styles.containerChip, this.checks(item.id, styles.selectedBG)]}>
              <Text style={[styles.chipText, this.checks(item.id, styles.selectedCOLOR)]}>{ this.renderItemText( item ) }</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  containerChip: {
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    height: verticalScale(30),
  },

  chipText: {
    fontWeight: 'bold'
  },

  selectedBG: {
    backgroundColor: commonStyles.colors.default,
  },

  selectedCOLOR: {
    color: commonStyles.colors.primary,
  },
})

export default Chip

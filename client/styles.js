import { StyleSheet, Platform } from 'react-native';

import { moderateScale, verticalScale, scale } from './sizes';

const colorSilverMedium = '#b7b7b7';

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colorSilverMedium,
    opacity: 1,
    backgroundColor: 'white'
  },
  navigatorBar: {
    margin: 0,  
    elevation: 0,
    height: (Platform.OS == 'ios' ? 70 : 60),
    borderBottomWidth: 0,
    backgroundColor: 'white'
  },
  navigatorTitle: {
    alignSelf: 'center',
    fontSize: moderateScale(19)
  },
  containerTab: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitleTab: {
    paddingTop: verticalScale(2),
    color: 'gray',
    fontSize: moderateScale(10)
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  button: {
    borderWidth: 0,
    borderRadius: 8,
    height: verticalScale(50),
    marginBottom: verticalScale(0),//Passado zero para sobresrever o MarginBottom do componente Button
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: moderateScale(15),
    fontWeight: '700'
  },
});


export default styles;
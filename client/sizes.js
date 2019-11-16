import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
//const { widthScreen, heightScreen } = Dimensions.get('screen');

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + ((scale(size) - size) * factor);
const clientHeight = () => (height - 70);
const clientWidth = () => (width);

export { width, height, scale, clientHeight, clientWidth, verticalScale, moderateScale };

import {Dimensions, Platform} from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const screenHeightWithoutStatusBar =
  Dimensions.get('screen').height - (Platform.OS === 'ios' ? 50 : 0);
export const platformTop = Platform.OS === 'ios' ? 50 : 10;

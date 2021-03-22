import { Dimensions } from 'react-native';
import { isTablet } from 'react-native-device-info';

// Size const
const MOCK_WIDTH = isTablet() ? 768 : 375; // iPhone 11 width
export const entireScreenWidth = Dimensions.get('window').width;
export const rem = (remValue = 1) => (remValue * entireScreenWidth) / MOCK_WIDTH; // root element

const MOCK_HEIGHT = isTablet() ? 1024 : 812;
export const entireScreenHeight = Dimensions.get('window').height;
export const vrem = (remValue = 1) => (remValue * entireScreenHeight) / MOCK_HEIGHT;
export const vh = (vhValue = 1) => (vhValue * entireScreenHeight) / 100;

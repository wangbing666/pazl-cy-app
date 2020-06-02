import {
  Platform,
  NativeModules,
  DeviceInfo,
  PixelRatio,
  Dimensions
} from 'react-native';
/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;

const { PlatformConstants = {} } = NativeModules;
const { minor = 0 } = PlatformConstants.reactNativeVersion || {};

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export const isIPhoneX = () => {
  if (minor >= 50) {
    return DeviceInfo.isIPhoneX_deprecated;
  }
  return (
    Platform.OS === 'ios'
          && ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH)
              || (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
  );
};

export const px2Dp = (px) => {
  const basePx = Platform.OS === 'ios' ? 375 : 360;
  const layoutSize = (px / basePx) * width;
  return PixelRatio.roundToNearestPixel(layoutSize);
};

export const ScaleSizeH = (px) => {
  const basePx = Platform.OS === 'ios' ? 667 : 640;
  const layoutSize = (px / basePx) * height;
  return PixelRatio.roundToNearestPixel(layoutSize);
};

export const RNLog = (data) => (__DEV__ ? Reactotron.log(data) : console.log(data));

/* eslint-disable import/no-extraneous-dependencies */
import Reactotron from 'reactotron-react-native';

Reactotron
  .configure({ host: '192.168.227.28' }) // 本机IP地址
  // .configure({ host: '10.188.116.195' }) // 本机IP地址
  .useReactNative()
  .connect();

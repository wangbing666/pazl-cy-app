/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import './src/utils/Global';

if (__DEV__) {
    import('./ReactotronConfig').then(() => { console.log('Reactotron Configured'); });
}

AppRegistry.registerComponent(appName, () => App);

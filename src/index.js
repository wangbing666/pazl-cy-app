import React from 'react';
import { YellowBox, StatusBar, Platform } from 'react-native';
import RootNavigator from './navigations';

YellowBox.ignoreWarnings([
  '_[RCTRootView cancelTouches]',
  '-[RCTRootView cancelTouches]'
]);

export default class App extends React.Component {
  render() {
    return (
      <RootNavigator
        onNavigationStateChange={(prevState, currentState) => {
          const { routes } = currentState.routes[1];
          routes.forEach((item) => {
            StatusBar.setBarStyle('dark-content');
            if (Android) {
              StatusBar.setBackgroundColor('#fff');
            }
          });
        }}
      />
    );
  }
}

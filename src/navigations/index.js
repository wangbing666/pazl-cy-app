import React from 'react';
import { View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ColorCommon } from '../assets/publicConsts';
import { Back } from '../components';
import tabScreens from './tabNavigations';
import SearchScreens from './search';
import FormScreens from './form';
import Detail from './detail';
import thirdpartyServiceScreens from './thirdPartyServiceNavigations';

const RootStack = createStackNavigator({
  Tab: {
    screen: tabScreens,
    navigationOptions: {
      header: null
    }
  },
  ...SearchScreens,
  ...FormScreens,
  ...thirdpartyServiceScreens,
  ...Detail
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <Back navigation={navigation} />,
    headerTitleStyle: {
      fontSize: 18,
      color: ColorCommon.dark
    },
    headerStyle: {
      elevation: 0,
      borderBottomWidth: 0,
    },
    gesturesEnabled: true,
    swipeEnabled: true
  }),
  headerLayoutPreset: 'center'
}
);

const TabStack = createStackNavigator({
  Tab: {
    screen: tabScreens,
    navigationOptions: {
      header: null
    }
  },
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <Back navigation={navigation} />,
    headerTitleStyle: {
      fontSize: 18,
      color: ColorCommon.dark
    },
    headerStyle: {
      elevation: 0,
      borderBottomWidth: 0,
    },
    gesturesEnabled: true,
    swipeEnabled: true
  }),
  headerLayoutPreset: 'center'
});

const SwitchNavigator = createSwitchNavigator({
  App: RootStack,
  Auth: TabStack
});

export default createAppContainer(SwitchNavigator);

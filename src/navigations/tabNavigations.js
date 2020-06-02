import React from 'react';
import PropTypes from 'prop-types';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from '../screens/home';
import User from '../screens/user';
import { ColorCommon } from '../assets/publicConsts';
import {
  HomeNSVG,
  HomeSSVG,
  MeNSVG,
  MeSSVG
} from '../assets/svgs';


const HomeTabBarIcon = ({ focused }) => (focused ? <HomeSSVG width={24} height={24} />
  : <HomeNSVG width={24} height={24} />);

HomeTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired
};

const MeTabBarIcon = ({ focused }) => (focused ? <MeSSVG width={24} height={24} />
  : <MeNSVG width={24} height={24} />);

MeTabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired
};

const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: HomeTabBarIcon
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: MeTabBarIcon
    }
  },
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 10
    },
    activeTintColor: ColorCommon.primary,
    inactiveTintColor: ColorCommon.fontGray
  },
  backBehavior: 'none'
});

export default tabNavigator;

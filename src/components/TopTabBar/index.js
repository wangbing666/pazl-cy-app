import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { ColorCommon } from '../../assets/publicConsts';

export default class PreListTab extends React.Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    children: PropTypes.element,
    changeTab: PropTypes.func
  }

  static defaultProps = {
    children: null,
    changeTab: null
  }

  handelChangeTab = (i) => {
    const { changeTab } = this.props;
    if (changeTab) changeTab(i);
  }

  render() {
    const { tabs, children } = this.props;
    return (
      <ScrollableTabView
        initialPage={0}
        onChangeTab={({ i }) => { this.handelChangeTab(i); }}
        renderTabBar={() => (
          <ScrollableTabBar
            backgroundColor={ColorCommon.white}
            activeTextColor={ColorCommon.primary}
            inactiveTextColor={ColorCommon.fontGray}
            textStyle={{ fontSize: 14 }}
            underlineStyle={{ height: 1, backgroundColor: ColorCommon.primary }}
            style={{ borderWidth: 0.5 }}
          />
        )}
      >
        {
          tabs.map((item) => (
            <View
              key={item.id}
              tabLabel={item.label}
            >
              {children}
            </View>
          ))
        }
      </ScrollableTabView>
    );
  }
}

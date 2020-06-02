import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { ColorCommon, GapCommon } from '../assets/publicConsts';
import GlobalStyles from '../assets/globalStyles';
import {
  TopTabBar
} from '../components';

export const options = [
  { label: '全部', id: 1 },
  { label: '视频', id: 2 },
  { label: '音乐', id: 3 },
  { label: '新闻', id: 4 },
  { label: '娱乐', id: 5 },
  { label: '关注', id: 6 }
];

class User extends React.Component {

  constructor() {
    super();
  }

  state = {
    index: 0,
  }

  handleChangeTab = (index) => {
    this.setState({
      index
    })
  }

  render() {
    const { index } = this.state;
    return (
      <View style={[GlobalStyles.container, styles.user]}>
        <TopTabBar
          tabs={options}
          changeTab={this.handleChangeTab}
        >
          <Text>{options[index].label}</Text>
        </TopTabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  user: {
    marginTop: 44
  },
});

export default User;

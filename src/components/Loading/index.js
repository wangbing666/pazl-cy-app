import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { store } from '../../store';
import { isLoading } from '../../store/actions/base';
import { ColorCommon, GapCommon } from '../../assets/publicConsts';

const { width, height } = Dimensions.get('window');

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    const loadingListener = () => {
      // 当 store 中的状态发生变化时，将 store 中的新状态通过this.setState 设置到本组件，从而触发本组件被重新渲染输出
      this.setState({ show: isLoading(store.getState()) });
    };
      // 监听Redux store中状态的变化
    store.subscribe(loadingListener);
  }

  render() {
    const { show } = this.state;
    return show ? (
      <View style={styles.loadingContainer}>
        <View style={styles.loading}>
          <ActivityIndicator size="small" color={ColorCommon.white} />
          <Text style={styles.loadingText}>请稍后...</Text>
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.6)',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
  loadingText: {
    marginLeft: GapCommon.gapBase * 2,
    color: ColorCommon.white,
    marginTop: GapCommon.gapBase * 2
  }
});

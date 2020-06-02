import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { ColorCommon, GapCommon } from '../../assets/publicConsts';

// 输入框防抖
const debounce = (fn, ms) => {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, arguments);
    }, ms);
  };
};

export default class SearchBar extends React.Component {
  static propTypes = {
    onChangeSearchInput: PropTypes.func
  }

  static defaultProps = {
    onChangeSearchInput: null
  }

  constructor(props) {
    super(props);
    this._handleInputChange = debounce(this._handleInputChange, 800);
  }

  _handleInputChange = (text) => {
    const { onChangeSearchInput } = this.props;
    onChangeSearchInput(text);
  }

  render() {
    return (
      <TextInput
        autoFocus
        ref={(ref) => { this.input = ref; }}
        style={styles.input}
        clearButtonMode="while-editing"
        returnKeyType="search"
        placeholder="请输入搜索内容"
        blurOnSubmit
        onChangeText={this._handleInputChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    paddingVertical: 0,
    width: GapCommon.gapBase * 75,
    height: GapCommon.gapBase * 8,
    fontSize: GapCommon.gapBase * 3,
    borderRadius: GapCommon.gapBase * 1,
    color: ColorCommon.dark,
    backgroundColor: ColorCommon.bgGray,
  }
});

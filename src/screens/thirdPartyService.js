/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from '../components';
import { BackSVG } from '../assets/svgs';
import { GapCommon } from '../assets/publicConsts';
import { RNLog } from '../utils/Tool';

export default class ThirdPartyService extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    const { title } = state.params;
    return {
      title,
      headerLeft: <TouchableOpacity
        style={{ width: 80, height: 40, justifyContent: 'center' }}
        onPress={navigation.getParam('back')}
      >
        <BackSVG
          width={20}
          height={20}
          style={{ marginLeft: GapCommon.gapBase * 4 }}
        />
      </TouchableOpacity>
    };
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'url'
  }

  constructor(props) {
    super(props);
    this.webView = React.createRef();
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ back: this.handleBack });
  }

  handleBack = () => {
    if (this.canGoBack) {
      this.webView.current.goBack();
    } else {
      const { navigation } = this.props;
      navigation.goBack();
    }
  }

  onWebViewLoadEnd = (syntheticEvent) => {
    const { canGoBack } = syntheticEvent.nativeEvent;
    const { navigation } = this.props;
    const title = navigation.getParam('title');
    navigation.setParams({ title });
    this.canGoBack = canGoBack;
  }

  render() {
    const { navigation, type } = this.props;
    const { source } = navigation.state.params;
    return (
      <WebView
        ref={this.webView}
        source={type === 'html' ? { html: source || '' } : { uri: source }}
        onWebViewLoadEnd={this.onWebViewLoadEnd}
      />
    );
  }
}

import React from 'react';
import { View, BackHandler } from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';
import ProgressBar from 'react-native-progress/Bar';
import { ColorCommon } from '../../assets/publicConsts';

class ProgressWebView extends React.Component {
  state = {
    progress: 0,
    visible: false
  }

  componentDidMount() {
    if (Android) {
      BackHandler.addEventListener('hardwareBackPress', this._onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    if (Android) {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  _onAndroidBackPress = () => {
    if (this.canGoBack) {
      const { forwardedRef } = this.props;
      forwardedRef.current.goBack();
      return true;
    }
    return false;
  }

  _onLoadProgress = (syntheticEvent) => {
    this.setState({ progress: syntheticEvent.nativeEvent.progress });
  }

  _onError = () => {
    this.setState({ progress: 1 });
  };

  _onLoadStart = (syntheticEvent) => {
    const { onWebViewLoadStart } = this.props;
    this.setState({ visible: true });
    if (onWebViewLoadStart) onWebViewLoadStart(syntheticEvent);
  };

  _onLoadEnd = (syntheticEvent) => {
    const { onWebViewLoadEnd, disappearDuration } = this.props;
    const { canGoBack } = syntheticEvent.nativeEvent;
    this.timer = setTimeout(() => {
      this.setState({ visible: false });
    }, disappearDuration);
    this.canGoBack = canGoBack;
    if (onWebViewLoadEnd) onWebViewLoadEnd(syntheticEvent);
  }

  render() {
    const { progress, visible } = this.state;
    const { forwardedRef } = this.props;
    return (
      <View style={{ flex: 1 }}>
        {visible && (
        <ProgressBar
          width={SCREEN_WIDTH}
          height={1}
          progress={progress}
          borderWidth={0}
          color={ColorCommon.primary}
          useNativeDriver
        />
        )}
        <WebView
          style={{ fontSzie: 24 }}
          ref={forwardedRef}
          originWhitelist={['*']}
          useWebKit
          javaScriptEnabled
          onLoadStart={this._onLoadStart}
          onLoadEnd={this._onLoadEnd}
          onLoadProgress={this._onLoadProgress}
          onError={this._onError}
          {...this.props}
        />
      </View>
    );
  }
}

ProgressWebView.propTypes = {
  disappearDuration: PropTypes.number,
  forwardedRef: PropTypes.object.isRequired,
  onWebViewLoadEnd: PropTypes.func,
  onWebViewLoadStart: PropTypes.func
};

ProgressWebView.defaultProps = {
  disappearDuration: 300,
  onWebViewLoadEnd: null,
  onWebViewLoadStart: null
};

export default React.forwardRef((props, ref) => (
  <ProgressWebView {...props} forwardedRef={ref} />
));

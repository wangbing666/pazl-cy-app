import React from 'react';
import {
  View, Text, StyleSheet, PixelRatio
} from 'react-native';
// import PropTypes from 'prop-types';

export default class interView extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: true
    };
  }

  hide = () => {
    this.setState({ isShow: false });
  }

  render() {
    const { isShow } = this.state;
    return (
      isShow
        ? (
          <View style={styles.container}>
            <View style={styles.close}>
              <Text
                style={styles.close}
                onPress={() => { this.hide(); }}
              >
                x
              </Text>
            </View>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{
                  height: 15,
                  width: 15,
                  marginRight: 8,
                  backgroundColor: 'red',
                }}
                />
                <Text style={styles.name}>张三</Text>
              </View>
              <Text
                onPress={() => { alert('面签'); }}
                style={styles.interView}
              >
                面签
              </Text>
            </View>
            <View style={styles.capationView}>
              <Text style={{ color: '#333333', fontSize: 12 }}>合同签约已通过，等待放款审批，请知悉</Text>
              <Text style={{ color: '#888888', fontSize: 12 }}>03.13 16:33</Text>
            </View>
          </View>
        ) : <View />
    );
  }
}
interView.defaultProps = {
  option: []
};

interView.propTypes = {
  // option: PropTypes.array
};
const styles = StyleSheet.create({
  container: {
    height: 66.5,
    borderWidth: 1 / PixelRatio.get(),
    padding: 12,
    paddingTop: 0,
    marginTop: 20
  },
  close: {
    // width: 10,
    textAlign: 'right',
    marginBottom: 2,
    position: 'relative',
    width: '100%',
    right: 0,
  },
  name: {
    color: '#333333',
    fontSize: 14
  },
  interView: {
    color: '#FF8055',
    fontSize: 14,
    fontWeight: 'bold'
  },
  capationContainer: {

  },
  capationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4
  }
});

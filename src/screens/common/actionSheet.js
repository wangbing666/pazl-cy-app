import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  PixelRatio
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import PropTypes from 'prop-types';

import {
  GapCommon, FontCommon, ColorCommon, BorderCommon
} from '../../../consts/componentSpeci';
import { RNLog } from '../../../utils/Tool';

class Actionsheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     if (nextProps.bankCardInfo) {
  //       const { bankCardInfo } = nextProps;
  //       this.setState({ bankListInfo: bankCardInfo });
  //     }
  //   }

  // 显示
  showModal = (val) => {
    this.val = val;
    this.setState({ modalVisible: true });
  }

  // 隐藏
  cancelModal = (title) => {
    this.setState({ modalVisible: false });
    const { setSelect } = this.props;
    setSelect(title);
  }

  render() {
    const { modalVisible } = this.state;
    const { data } = this.props;
    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => this.setState({ modalVisible: false })}
      >

        <View style={styles.container}>
          <SafeAreaView style={{
            backgroundColor: ColorCommon.white,
            width: '100%',
          }}
          >
            <View
              style={styles.headerText}
            >
              <Text style={{
                fontSize: FontCommon.fontSize16,
                color: ColorCommon.dark,
              }}
              >
                经营年限
              </Text>
              <Text
                style={{
                  height: 16, width: 16, backgroundColor: 'red', position: 'absolute', right: 16
                }}
                onPress={() => { this.setState({ modalVisible: false }); }}
              />
            </View>

            <ScrollView
              style={{ maxHeight: 308, minHeight: 188 }}
              showsVerticalScrollIndicator={false}
            >
              { data && data.map((item, index) => (
                <TouchableOpacity
                  onPress={() => this.cancelModal(item)}
                  style={[styles.contentWrapper, index === data.length - 1 ? { borderBottomWidth: 0 } : '']}
                >
                  <Text
                    style={[
                      {
                        color: item === this.val ? '#FD864A' : ColorCommon.dark,
                        fontSize: 16
                      }
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )) }
            </ScrollView>
          </SafeAreaView>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerText: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
  contentWrapper: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: GapCommon.gapBase * 6,
    marginRight: GapCommon.gapBase * 6,
    backgroundColor: ColorCommon.white,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: '#DDDDDD'
  },
  pinganSvg: {
    width: 30,
    height: 30,
    backgroundColor: '#F7F7F7',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
});


Actionsheet.propTypes = {
  setSelect: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};
Actionsheet.defaultProps = {
};

export default Actionsheet;

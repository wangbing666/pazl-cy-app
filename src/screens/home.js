import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Platform,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import GlobalStyles from '../assets/globalStyles';
import {
  MenuBar,
  InterView,
  Swiper
} from './common';
import ModalExample from './modal';
import { ColorCommon, GapCommon } from '../assets/publicConsts';

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={[GlobalStyles.container, styles.home]}>
        {/* <Text>主页</Text>
        <View style={{ paddingBottom: 16 }}>
          <Button color={ColorCommon.primary} title="搜索" onPress={() => navigation.navigate("Search")}></Button>
        </View>
        <View style={{ paddingBottom: 16 }}>
          <Button color={ColorCommon.primary} title="Form" onPress={() => navigation.navigate("Form")}></Button>
        </View>
        <View>
          <Button color={ColorCommon.primary} title="跳转到H5" onPress={
            () => navigation.navigate("ThirdpartyService", { 
              title: "百度一下，你就知道", 
              source: 'https://www.baidu.com',
            })
          }></Button>
        </View> */}
        <ScrollView>
          <ImageBackground
            style={{ height: 100, paddingLeft: 12, paddingRight: 12 }}
            source={localImages.approvalBg}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { navigation.navigate('Detail'); }}
            >
              <MenuBar
                showCard
                navigation={navigation}
                data={['本月预审', '本月预审', '本月起租', '本月通过率']}
              />
            </TouchableOpacity>

          </ImageBackground>
          <MenuBar
            total={9}
            data={['本月预审', '本月预审', '本月起租', '本月通过率']}
          />
          <MenuBar
            total={100}
            data={['本月预审', '本月预审', '本月起租', '本月通过率']}
          />
          <Swiper />
          <InterView />
          <MenuBar
            total={100}
            data={['本月预审', '本月预审', '本月起租', '本月通过率']}
          />
          <Text
            onPress={() => { this.modal.showModal(); }}
            style={{ fontSize: 32, textAlign: 'center', marginTop: 32 }}
          >
            线索池

        </Text>
        </ScrollView>
        <ModalExample
          ref={(ref) => { this.modal = ref; }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? GapCommon.gapBase * 12 : 16,
    paddingLeft: GapCommon.gapBase * 4,
    paddingRight: GapCommon.gapBase * 4,
  },
});

export default Home;

import React from 'react';
import {
  View, StyleSheet, ImageBackground, Text, PixelRatio, TouchableOpacity
} from 'react-native';
// import PropTypes from 'prop-types';

export default class Detail extends React.Component {
  renderItem =(data) => (
    data && data.map((item, index) => (
      <View key={index.toString()}>
        <View style={styles.menuTitle} key={index.toString()}>
          { !item.name ? <Text style={styles.menuTitleCaption}>{item.caption}</Text>
            : (
              <View style={[styles.menuTitle, { flex: 1 }]}>
                <View style={styles.menuTitle}>
                  <View style={{
                    width: 49, height: 49, backgroundColor: 'red', marginRight: 8
                  }}
                  />
                  <View>
                    <Text style={{
                      color: '#7A4805', fontSize: 20, fontWeight: 'bold', lineHeight: 28
                    }}
                    >
                      张三
                    </Text>
                    <Text style={{ color: '#7A4805', fontSize: 12, lineHeight: 16 }}>深圳市</Text>
                  </View>
                </View>
                <View>
                  <View>
                    <View style={[styles.menuTitle, { justifyContent: 'flex-end', marginBottom: 8 }]}>
                      <View style={{
                        width: 14, height: 17.5, backgroundColor: 'red', marginRight: 8
                      }}
                      />
                      <Text style={{ color: 'rgba(122,72,5,1)', fontSize: 14, fontWeight: 'bold' }}>风控宗师</Text>
                    </View>
                  </View>
                  <Text style={{ color: 'rgba(122,72,5,1)', fontSize: 12, opacity: 0.5 }}>账号开通时间：2020.5.4</Text>
                </View>
              </View>
            )
          }
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          { item.list.map((i, idx) => (
            <View key={idx.toString()} style={{ alignItems: 'center', width: '25%' }}>
              <Text style={{
                color: 'rgba(202,150,59,1)', fontSize: 20, fontWeight: 'bold', lineHeight: 28, marginTop: 4
              }}
              >
                {i}
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 10, color: '#666666' }}>当日预审量</Text>
                <TouchableOpacity
                  onPress={() => { alert(1); }}
                >
                  <Text>?</Text>
                </TouchableOpacity>
              </View>
            </View>
          )) }

        </View>
      </View>
    ))

  )

  render() {
    const data = [{ name: '张三', list: [20, 20, 20, 20] }, { caption: '预审日报', list: [20, 20, 20, 20] }, { caption: '预审日报', list: [20, 20, 20, 20] }];
    // 根据是否有用户名展示卡片
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            padding: 12, paddingTop: 0
          }}
          source={localImages.approvalBg}
        >
          {this.renderItem(data.filter((i) => i.name))}
        </ImageBackground>
        <View style={{
          borderWidth: 1 / PixelRatio.get(),
          borderRadius: 8,
          padding: 12,
          paddingTop: 0,
          marginTop: 16
        }}
        >
          { this.renderItem(data.filter((i) => !i.name))}

        </View>
        <View style={{
          borderWidth: 1 / PixelRatio.get(),
          borderRadius: 8,
          padding: 12,
          paddingTop: 0,
          marginTop: 16
        }}
        >
          { this.renderItem(data.filter((i) => !i.name))}

        </View>

      </View>
    );
  }
}

// Demo.propTypes = {
//   navigation: PropTypes.object.isRequired
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  menuTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    marginTop: 12
  },
  menuTitleCaption: {
    color: '#333333',
    fontSize: 12,
    fontWeight: 'bold'
  },
});

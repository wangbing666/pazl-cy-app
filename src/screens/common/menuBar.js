import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class menuBar extends React.Component {
  // showCard 展示卡片样式
  render() {
    const {
      showCard, total, data, manage, navigation
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.menuTitle}>
          <View style={[styles.menuTitle, { flex: 1 }]}>
            { showCard
              ? (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => { navigation.navigate('Detail'); }}
                  style={styles.menuTitle}
                >
                  <View style={{
                    width: 14, height: 17.5, backgroundColor: 'red', marginRight: 8
                  }}
                  />
                  <Text style={{ color: 'rgba(122,72,5,1)', fontSize: 14, fontWeight: 'bold' }}>风控宗师&gt;</Text>
                </TouchableOpacity>
              ) : <Text style={styles.menuTitleCaption}>预审批</Text> }
            { showCard ? <Text style={{ color: 'rgba(122,72,5,1)', fontSize: 12 }}>本月起租金额&nbsp;224万</Text>
              : (
                <Text
                  onPress={() => { alert('全部订单'); }}
                  style={styles.menuTitleOrder}
                >
                  全部订单 &gt;
                </Text>
              ) }
          </View>
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
          { data && data.map((item, index) => (
            <View style={{ alignItems: 'center', width: '25%' }} key={index.toString()}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={showCard ? () => { alert(item); } : () => { alert('1'); }}
                style={{ alignItems: 'center' }}
              >
                { showCard ? (
                  <Text style={{
                    color: 'rgba(125,80,19,1)',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 4,
                    marginTop: 16
                  }}
                  >
                    24
                  </Text>
                )
                  : (
                    <View style={{
                      width: 22.5,
                      height: 22.5,
                      backgroundColor: 'red',
                      marginBottom: manage ? 8 : 4,
                      marginTop: 16,
                    }}
                    />
                  )}
                { total
                  ? (
                    <View style={[styles.totalradius, { right: total && total > 99 ? -7 : 2 }]}>
                      <Text style={styles.totalText}>{ total > 99 ? '99+' : total }</Text>
                    </View>
                  ) : <View />}
                <Text style={{ fontSize: 12, color: showCard ? 'rgba(122,72,5,1)' : '#666666' }}>{item}</Text>
              </TouchableOpacity>
            </View>
          ))
}
        </View>
      </View>
    );
  }
}
menuBar.defaultProps = {
  data: [],
  showCard: false,
  total: 0,
  manage: false
};

menuBar.propTypes = {
  data: PropTypes.array,
  showCard: PropTypes.bool,
  total: PropTypes.number,
  manage: PropTypes.bool,
  navigation: PropTypes.object.isRequired
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20
    // flex: 1,
    // padding: 16
  },
  menuTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuTitleCaption: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold'
  },
  menuTitleOrder: {
    color: '#BBBBBB',
    fontSize: 12
  },
  totalradius: {
    height: 16,
    minWidth: 16,
    borderRadius: 16,
    backgroundColor: '#FF8055',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 2,
    paddingRight: 2,
    position: 'absolute',
    top: 4,
  },
  totalText: {
    fontSize: 12,
    color: '#FFFFFF'
  }
});

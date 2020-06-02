import React, { Component } from 'react';
import {
  Modal, Text, TouchableOpacity, View, ImageBackground
} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  }

  hideModal = () => {
    this.setState({ modalVisible: false });
  }

  render() {
    const { modalVisible } = this.state;
    const today = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const weekday = today[date.getDay()];
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => { this.hideModal(); }}
      >
        <ImageBackground
          style={{ flex: 1, backgroundColor: '#fff', padding: 38 }}
        >
          <Text style={{ color: '#C99781', fontSize: 12, marginTop: '30%' }}>{`${year}/${month}`}</Text>
          <Text style={{ color: '#C99781', fontSize: 38 }}>{day}</Text>
          <Text style={{ color: '#C99781', fontSize: 12, marginBottom: 36 }}>{weekday}</Text>

          <Text style={{ fontSize: 14, color: '#C99781', lineHeight: 28 }}>
            每一份
            <Text style={{ color: '#FF8055' }}>坚持</Text>
            都是
            <Text style={{ color: '#FF8055' }}>成功</Text>
            的累积。
          </Text>
          <Text style={{ fontSize: 14, color: '#C99781', lineHeight: 28 }}>
            相信自己，一定会有
            <Text style={{ color: '#FF8055' }}>新的惊喜</Text>
            。
          </Text>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 134
          }}
          >
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { alert(1); }}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <View style={{
                width: 28, height: 28, backgroundColor: 'red', marginBottom: 8
              }}
              />
              <Text>创建线索</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { alert(1); }}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <View style={{
                width: 28, height: 28, backgroundColor: 'red', marginBottom: 8
              }}
              />
              <Text>创建线索</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => { alert(1); }}
              style={{ justifyContent: 'center', alignItems: 'center' }}
            >
              <View style={{
                width: 28, height: 28, backgroundColor: 'red', marginBottom: 8
              }}
              />
              <Text>创建线索</Text>
            </TouchableOpacity>
          </View>

        </ImageBackground>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: 'absolute', bottom: 40, width: '100%', height: 32
          }}
          onPress={() => { this.hideModal(); }}
        >
          <Text style={{ fontSize: 32, textAlign: 'center' }}>x</Text>
        </TouchableOpacity>
      </Modal>
    );
  }
}

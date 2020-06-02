import React from 'react';
import {
  View, StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import PropTypes from 'prop-types';

export default class Swiper extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590401594247&di=6b92020dd92b896092546a18743a0c69&imgtype=0&src=http%3A%2F%2Fdmimg.5054399.com%2Fallimg%2Fpkm%2Fpk%2F13.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590401594325&di=bc1b6ef97299c51d6b9778258e95fb13&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg' },
        { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590401594325&di=321be2ca321ab5b30faafae1eedc6802&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F35%2F34%2F19300001295750130986345801104.jpg' }
      ],
      activeSlide: 0
    };
  }

  _renderItem({ item }) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => { alert(1); }}
      >
        <ImageBackground
          resizeMode="stretch"
          source={{ uri: item.url }}
          style={styles.advItem}
        />
      </TouchableOpacity>

    );
  }

  render() {
    const { entries, activeSlide } = this.state;
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Carousel
          data={entries}
          renderItem={this._renderItem}
          inactiveSlideOpacity={1}
          sliderWidth={SCREEN_WIDTH} // 轮播的宽度
          itemWidth={SCREEN_WIDTH - 32} //  单个Item的宽度
          loop={entries.length > 1}
          autoplay
          autoplayInterval={2000}
          onSnapToItem={(index) => this.setState({ activeSlide: index })}
        />
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          containerStyle={{ marginTop: -39 }}
          dotStyle={styles.swiperActiveDot}
          inactiveDotStyle={styles.swiperDot}
          inactiveDotOpacity={0.16}
          inactiveDotScale={1.2}
        />
      </View>
    );
  }
}
Swiper.defaultProps = {
  entries: []
};

Swiper.propTypes = {
//   entries: PropTypes.array
};
const styles = StyleSheet.create({
  advItem: {
    width: '100%',
    height: 69,
    borderRadius: 8,
    justifyContent: 'center'
  },
  swiperActiveDot: {
    backgroundColor: '#888888',
    width: 11,
    height: 2.5,
    borderRadius: 2.5,
    marginLeft: -8
  },
  swiperDot: {
    width: 2.5,
    height: 2.5,
    backgroundColor: '#000000',
  }
});

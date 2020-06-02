import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import BackSVG from '../../assets/svgs/back_arrow.svg';
import { GapCommon } from '../../assets/publicConsts';

const Back = (props) => {
  const { onBeforeUnload, navigation } = props;
  const handlePress = () => {
    if (onBeforeUnload) {
      onBeforeUnload();
      return;
    }
    navigation.goBack();
  };
  return (
    <TouchableOpacity
      style={{ width: 60, height: 40, justifyContent: 'center' }}
      onPress={handlePress}
    >
      <BackSVG
        width={20}
        height={20}
        style={{ marginLeft: GapCommon.gapBase * 4 }}
      />
    </TouchableOpacity>
  );
};

Back.propTypes = {
  navigation: PropTypes.object.isRequired,
  onBeforeUnload: PropTypes.func
};

Back.defaultProps = {
  onBeforeUnload: null,
};

export default Back;

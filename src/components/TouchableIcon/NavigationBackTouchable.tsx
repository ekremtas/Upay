import React from 'react';
import {StyleSheet} from 'react-native';
import TouchableIcon from '.';
import LeftArrow from '../../assets/icons/leftArrow.svg';

const NavigationBackTouchable = ({onPress}: {onPress: Function}) => {
  return (
    <TouchableIcon style={styles.backIcon} onPress={onPress} Icon={LeftArrow} />
  );
};

const styles = StyleSheet.create({
  backIcon: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 16,
    zIndex: 1,
  },
});

export default NavigationBackTouchable;

import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function TouchableIcon({
  style,
  onPress,
  Icon,
}: {
  style: any;
  onPress: Function;
  Icon: any;
}) {
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      <Icon width={45} height={45} />
    </TouchableOpacity>
  );
}

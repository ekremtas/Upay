import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Header = ({title, Icon}: {title: string; Icon: any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Icon width={40} height={'100%'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {color: '#000', fontSize: 25, fontWeight: '700'},
});

export default Header;

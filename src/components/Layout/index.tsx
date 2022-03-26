import React from 'react';
import {Platform, View, StyleSheet} from 'react-native';

const Layout = ({
  children,
  containerStyle,
}: {
  children?: JSX.Element | JSX.Element[];
  containerStyle: any;
}) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 50 : 0,
    backgroundColor: '#fff',
  },
});

export default Layout;

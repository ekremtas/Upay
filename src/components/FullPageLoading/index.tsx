import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

const FullPageLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={30} />
      <Text style={styles.text}>{'Loading'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#000', fontSize: 20, margin: 5},
});

export default FullPageLoading;

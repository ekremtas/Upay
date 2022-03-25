import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ProductDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Detail</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ProductDetail;

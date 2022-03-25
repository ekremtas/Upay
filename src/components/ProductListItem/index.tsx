import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {screenWidth} from '../../helpers/globalSizes';
import {Product} from '../../store/product/models';

interface ProductCardMiddleName {
  item: Product;
  onPress: Function;
}

const ProductCard = ({item, onPress}: ProductCardMiddleName) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress();
      }}
      style={styles.itemContainer}>
      <Image
        source={{
          uri: item.avatar,
        }}
        style={styles.itemImage}
      />
      <Text style={styles.text} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={[styles.text, styles.price]}>${item.price}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    // (screenWidth - flatList and Item margin) / 2
    width: (screenWidth - 48) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 8,
    margin: 8,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemImage: {
    width: '90%',
    height: 160,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
    color: '#000',
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: 'orange',
  },
});

export default ProductCard;

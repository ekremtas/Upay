import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {screenWidth} from '../../helpers/globalSizes';
import {Product} from '../../store/product/models';
import Edit from '../../assets/icons/edit.svg';

interface ProductCardMiddleName {
  item: Product;
  onPress: Function;
  onPrressEdit: Function;
}

const ProductCard = ({item, onPress, onPrressEdit}: ProductCardMiddleName) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        onPress();
      }}
      style={styles.itemContainer}>
      <View style={styles.editIconContainer}>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => onPrressEdit()}>
          <Edit width={20} height={20} />
        </TouchableOpacity>
      </View>

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
  editIconContainer: {alignItems: 'flex-end', width: '100%'},
  editIcon: {paddingHorizontal: 8},
});

export default ProductCard;

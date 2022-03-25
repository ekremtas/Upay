import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Category} from '../../store/categories/models';

interface CategorySelectorItemMiddleName {
  item: Category;
  selectedId: string;
  onPress: Function;
}

const CategorySelectorItem = ({
  item,
  selectedId,
  onPress,
}: CategorySelectorItemMiddleName) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={[
        styles.itemContainer,
        selectedId === item.id
          ? styles.selectedItemContainer
          : styles.unSelectedItemContainer,
      ]}>
      <Text
        style={[
          styles.itemText,
          selectedId === item.id
            ? styles.selectedItemText
            : styles.unSelectedItemText,
        ]}>
        {item.name.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginHorizontal: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  selectedItemContainer: {
    backgroundColor: '#FFA500',
    color: '#fff',
  },
  selectedItemText: {
    color: '#fff',
  },
  unSelectedItemContainer: {
    backgroundColor: '#fff',
    color: '#000',
  },
  unSelectedItemText: {
    color: '#000',
  },
});

export default CategorySelectorItem;

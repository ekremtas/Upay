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
      disabled={selectedId === item.id}
      activeOpacity={0.5}
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
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,

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
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  selectedItemContainer: {
    backgroundColor: '#FFA500',
  },
  selectedItemText: {
    color: '#fff',
  },
  unSelectedItemContainer: {
    backgroundColor: '#fff',
  },
  unSelectedItemText: {
    color: '#000',
  },
});

export default CategorySelectorItem;

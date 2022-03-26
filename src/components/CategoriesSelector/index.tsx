import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {Category} from '../../store/categories/models';
import CategorySelectorItem from '../CategorySelectorItem';

function CategorySelector({
  items,
  onPress,
  selectedCategory,
}: {
  items: Category[];
  onPress: Function;
  selectedCategory: Category;
}) {
  const renderItem = ({item}: {item: Category}) => {
    return (
      <CategorySelectorItem
        item={item}
        selectedId={selectedCategory.id}
        onPress={() => onPress(item)}
      />
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        horizontal
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 8,
  },
});

export default CategorySelector;

import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import {Category} from '../../store/categories/models';
import {setSelectedCategory} from '../../store/categories/actions';
import CategorySelectorItem from '../CategorySelectorItem';

function CategorySelector({items}: {items: Category[]}) {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector((state: AppState) => state.category);

  const renderItem = ({item}: {item: Category}) => {
    return (
      <CategorySelectorItem
        item={item}
        selectedId={selectedCategory.id}
        onPress={() => dispatch(setSelectedCategory(item))}
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

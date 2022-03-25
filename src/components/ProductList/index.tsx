import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Product} from '../../store/product/models';
import ProductListItem from '../ProductListItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../helpers/RootStackPrams';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

function ProductList({items}: {items: Product[]}) {
  const navigation = useNavigation<homeScreenProp>();

  const renderItem = ({item}: {item: Product}) => {
    return (
      <ProductListItem
        item={item}
        onPress={() =>
          navigation.navigate('ProductDetail', {Id: item.id.toString()})
        }
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 8,
  },
});

export default ProductList;

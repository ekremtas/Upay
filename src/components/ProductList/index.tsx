import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
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

  return items.length > 0 ? (
    <FlatList
      contentContainerStyle={styles.flatListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  ) : (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>Product not found</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 8,
  },
  messageContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  messageText: {fontSize: 20, fontWeight: '700', color: '#000'},
});

export default ProductList;

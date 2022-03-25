import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store';
import {getProducts} from '../store/product/actions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './RootStackPrams';
import CategorySelector from '../components/CategoriesSelector';
import {getCategories} from '../store/categories/actions';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  const dispatch = useDispatch();
  const {categories, selectedCategory} = useSelector(
    (state: AppState) => state.category,
  );
  const {products} = useSelector((state: AppState) => state.product);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts =
    selectedCategory.name !== 'all'
      ? products.filter(prod => prod.category === selectedCategory.name)
      : products;

  return (
    <SafeAreaView style={styles.container}>
      <CategorySelector items={categories} />
      <Text>{JSON.stringify(filteredProducts)}</Text>

      <Button
        title="Go to detail"
        onPress={() => navigation.navigate('ProductDetail')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});

export default Home;

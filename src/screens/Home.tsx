import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store';
import {getProducts} from '../store/product/actions';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../helpers/RootStackPrams';
import CategorySelector from '../components/CategoriesSelector';
import {getCategories, setSelectedCategory} from '../store/categories/actions';
import Header from '../components/Header';
import Search from '../assets/icons/search.svg';
import ProductList from '../components/ProductList';
import FullPageLoading from '../components/FullPageLoading';
import TouchableIcon from '../components/TouchableIcon';
import Plus from '../assets/icons/addButton.svg';
import {Category} from '../store/categories/models';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProp>();
  const dispatch = useDispatch();
  const {categories, selectedCategory} = useSelector(
    (state: AppState) => state.category,
  );
  const {products, loading} = useSelector((state: AppState) => state.product);

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
      <Header title={'UPayments Store'} Icon={Search} />
      <CategorySelector
        items={[{id: 'all', name: 'all'}, ...categories]}
        selectedCategory={selectedCategory}
        onPress={(item: Category) => {
          dispatch(setSelectedCategory(item));
        }}
      />
      {loading ? <FullPageLoading /> : <ProductList items={filteredProducts} />}

      <TouchableIcon
        style={styles.plusIcon}
        onPress={() => navigation.navigate('CreateProduct')}
        Icon={Plus}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  plusIcon: {
    padding: 10,
    position: 'absolute',
    right: 18,
    bottom: 30,
    zIndex: 1,
  },
});

export default Home;

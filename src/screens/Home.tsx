import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../store';
import {addProduct, getProduct} from '../store/product/actions';
import {Product} from '../store/product/models';

const Home = () => {
  const dispatch = useDispatch();
  const {products, loading} = useSelector((state: AppState) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) {
    return <Text>LOADING</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text> {JSON.stringify(products)}</Text>
      <Button
        title="Increase enthusiasm"
        onPress={() => {
          const initProduct: Product = {
            id: 1,
            Name: 'string',
            Price: 123,
            Category: 'string',
            Description: 'string',
            Avatar: 'string',
            DeveloperEmail: 'string',
          };

          dispatch(addProduct(initProduct));
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Home;

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {RootStackParamList} from '../helpers/RootStackPrams';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../store/product/actions';
import {AppState} from '../store';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
const ProductDetail = () => {
  const {params} = useRoute<ProfileScreenRouteProp>();
  const dispatch = useDispatch();
  const {product} = useSelector((state: AppState) => state.product);

  useEffect(() => {
    dispatch(getProduct(params.Id));
  }, [dispatch, params.Id]);

  return (
    <SafeAreaView style={styles.container}>
      <Text> {JSON.stringify(product)}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ProductDetail;

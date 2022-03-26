import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../helpers/RootStackPrams';
import {platformTop, screenWidth} from '../helpers/globalSizes';
import NavigationBackTouchable from '../components/TouchableIcon/NavigationBackTouchable';
import ProductForm from '../components/ProductForm';
import {clearProduct, getProduct} from '../store/product/actions';
import {useDispatch, useSelector} from 'react-redux';
import FullPageLoading from '../components/FullPageLoading';
import {AppState} from '../store';

type CreateProductScreenProp = StackNavigationProp<
  RootStackParamList,
  'CreateProduct'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CreateProduct'>;
const CreateProduct = () => {
  const dispatch = useDispatch();
  const {params} = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation<CreateProductScreenProp>();
  const {product, loading} = useSelector((state: AppState) => state.product);
  const isCreate = !params?.Id;

  useEffect(() => {
    params?.Id && dispatch(getProduct(params.Id));
    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, params]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <NavigationBackTouchable onPress={() => navigation.pop()} />
        <Text style={styles.text}>
          {isCreate ? 'Create Product' : 'Update Product'}
        </Text>
      </View>
      {loading && !isCreate && !product ? <FullPageLoading /> : <ProductForm />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleContainer: {
    width: screenWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    padding: 10,
    position: 'absolute',
    left: 18,
    top: platformTop,
    zIndex: 1,
  },
  text: {color: '#000', fontSize: 25, fontWeight: '700'},
});

export default CreateProduct;

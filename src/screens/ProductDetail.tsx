import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList} from '../helpers/RootStackPrams';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {getProduct} from '../store/product/actions';
import {AppState} from '../store';
import {
  platformTop,
  screenHeightWithoutStatusBar,
  screenWidth,
} from '../helpers/globalSizes';
import Layout from '../components/Layout';
import FullPageLoading from '../components/FullPageLoading';
import NavigationBackTouchable from '../components/TouchableIcon/NavigationBackTouchable';

type ProfileScreenScreenProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetail'
>;
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
const ProductDetail = () => {
  const navigation = useNavigation<ProfileScreenScreenProp>();
  const {params} = useRoute<ProfileScreenRouteProp>();
  const dispatch = useDispatch();
  const {product, loading} = useSelector((state: AppState) => state.product);

  useEffect(() => {
    dispatch(getProduct(params.Id));
  }, [dispatch, params.Id]);

  return (
    <Layout containerStyle={styles.container}>
      {loading ? (
        <FullPageLoading />
      ) : (
        <>
          <NavigationBackTouchable onPress={() => navigation.pop()} />
          <Image
            source={{
              uri: product?.avatar,
            }}
            style={styles.image}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.scroolViewContainer}>
            <View style={styles.descriptionContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{product?.name}</Text>
                <Text style={styles.price}>${product?.price}</Text>
              </View>
              <Text style={styles.description}>{product?.description}</Text>
            </View>
          </ScrollView>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scroolViewContainer: {
    zIndex: 2,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  image: {
    position: 'absolute',
    top: platformTop,
    width: '80%',
    height: screenHeightWithoutStatusBar / 2,
    resizeMode: 'contain',
  },
  descriptionContainer: {
    minHeight: screenHeightWithoutStatusBar / 2,
    marginTop: screenHeightWithoutStatusBar / 2 - 60,
    backgroundColor: '#000',
    padding: 16,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: screenWidth,
  },
  titleContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  title: {color: '#fff', fontSize: 22, fontWeight: '700', margin: 8, flex: 1},
  price: {color: '#FFA500', fontSize: 22, fontWeight: '700', margin: 8},
  description: {color: '#fff', fontSize: 15, margin: 8},
});

export default ProductDetail;

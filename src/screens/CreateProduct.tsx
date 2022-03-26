import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../helpers/RootStackPrams';
import {platformTop, screenWidth} from '../helpers/globalSizes';
import NavigationBackTouchable from '../components/TouchableIcon/NavigationBackTouchable';
import ProductForm from '../components/ProductForm';

type CreateProductScreenProp = StackNavigationProp<
  RootStackParamList,
  'CreateProduct'
>;
// type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'CreateProduct'>;
const CreateProduct = () => {
  //   const {params} = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation<CreateProductScreenProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <NavigationBackTouchable onPress={() => navigation.pop()} />
        <Text style={styles.text}>Create Product</Text>
      </View>
      <ProductForm />
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

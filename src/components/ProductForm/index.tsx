import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormikTextInput from '../FormInputs/FormikTextInput';
import FormikTextArea from '../FormInputs/FormikTextArea';
import CategorySelector from '../CategoriesSelector';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../store';
import {Category} from '../../store/categories/models';
import {Product} from '../../store/product/models';
import {addProduct, deleteProduct} from '../../store/product/actions';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../helpers/RootStackPrams';
import {useNavigation} from '@react-navigation/native';

type CreateProductScreenProp = StackNavigationProp<
  RootStackParamList,
  'CreateProduct'
>;

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<CreateProductScreenProp>();
  const {categories} = useSelector((state: AppState) => state.category);
  const {loading, product} = useSelector((state: AppState) => state.product);
  return (
    <Formik
      initialValues={{
        name: product?.name || '',
        avatar: product?.avatar || '',
        price: product?.price.toString() || '',
        description: product?.description || '',
        category: product?.category || '',
        selectedCategory:
          categories.find(cat => cat?.name === product?.category) ||
          categories?.[0],
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('This field cannot be empty'),
        avatar: Yup.string().required('This field cannot be empty'),
        price: Yup.number()
          .required('This field cannot be empty')
          .typeError('This field must be number'),
        description: Yup.string().required('This field cannot be empty'),
      })}
      onSubmit={values => {
        const newProduct: Product = {
          developerEmail: 'eekremtas@gmail.com',
          name: values.name,
          avatar: values.avatar,
          price: parseFloat(values.price),
          description: values.description,
          category: values.selectedCategory.name,
        };
        dispatch(
          product?.id
            ? deleteProduct(product.id, () => {
                navigation.pop();
              })
            : addProduct(newProduct, () => {
                navigation.pop();
              }),
        );
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <ScrollView>
            <FormikTextInput
              placeholder="Name"
              handleChange={handleChange('name')}
              handleBlur={handleBlur('name')}
              value={values.name}
              touched={touched.name}
              error={errors.name}
            />
            <FormikTextInput
              placeholder="Price"
              handleChange={handleChange('price')}
              handleBlur={handleBlur('price')}
              value={values.price}
              touched={touched.price}
              error={errors.price}
            />
            <FormikTextArea
              placeholder="Description"
              handleChange={handleChange('description')}
              handleBlur={handleBlur('description')}
              value={values.description}
              touched={touched.description}
              error={errors.description}
            />
            <FormikTextInput
              placeholder="Image Link"
              handleChange={handleChange('avatar')}
              handleBlur={handleBlur('avatar')}
              value={values.avatar}
              touched={touched.avatar}
              error={errors.avatar}
            />
            <View>
              <Text style={styles.text} numberOfLines={1}>
                {`SelectedCategory: ${values.selectedCategory.name.toUpperCase()}`}
              </Text>
              <CategorySelector
                items={categories}
                selectedCategory={values.selectedCategory}
                onPress={(item: Category) =>
                  setFieldValue('selectedCategory', item)
                }
              />
            </View>
          </ScrollView>
          <View style={styles.submitButtonContainer}>
            <TouchableOpacity
              disabled={loading}
              style={styles.submitButton}
              onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>
                {loading
                  ? 'Sending'
                  : product
                  ? 'Delete Product'
                  : 'Add Product'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 120,
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    fontWeight: '700',
  },
  submitButtonContainer: {height: 80, backgroundColor: '#fff'},
  submitButton: {
    position: 'absolute',
    borderRadius: 10,
    padding: 8,
    backgroundColor: '#000',
    bottom: 40,
    alignSelf: 'center',
    zIndex: 3,
  },
  submitButtonText: {color: '#fff'},
});
export default ProductForm;

import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { Ionicons } from '@expo/vector-icons';

const ProductsScreen = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.productCard}>

      {item.image ? (
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image" size={40} color="#ccc" />
        </View>
      )}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price} $</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => dispatch(addToCart(item))}
        >
          <Text style={styles.addButtonText}>Додати до кошика</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 8,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginBottom: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#2a9d8f',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default ProductsScreen;

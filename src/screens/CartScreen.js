import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert ,Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleCheckout = () => {
    if (cart.items.length === 0) {
      Alert.alert('Кошик порожній', 'Додайте товари перед оформленням');
      return;
    }
    navigation.navigate('Order');
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={item.image}
        style={styles.cartImage}
        resizeMode="contain"
      />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDetails}>Кількість: {item.quantity}</Text>
        <Text style={styles.itemDetails}>Ціна: {item.price} $</Text>
        <Text style={styles.itemTotal}>Сума: {(item.price * item.quantity).toFixed(2)} $</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch(removeFromCart(item))}
      >
        <Ionicons name="trash" size={20} color="#e63946" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Кошик</Text>

      {cart.items.length > 0 ? (
        <>
          <FlatList
            data={cart.items}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
          />
          <View style={styles.summaryContainer}>
            <Text style={styles.totalText}>Загальна сума: {cart.total.toFixed(2)} $</Text>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Оформити замовлення</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="cart" size={50} color="#ccc" />
          <Text style={styles.emptyText}>Кошик порожній</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2b2d42',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2b2d42',
    marginBottom: 4,
  },
  itemDetails: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 2,
  },
  itemTotal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2a9d8f',
    marginTop: 4,
  },
  deleteButton: {
    padding: 8,
  },
  summaryContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2b2d42',
    textAlign: 'center',
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
    marginTop: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  cartImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 5,
  }
});

export default CartScreen;

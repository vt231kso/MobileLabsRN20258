import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/slices/cartSlice';
import { addOrder } from '../store/slices/ordersSlice';
import { setUser } from '../store/slices/userSlice';
import { Ionicons } from '@expo/vector-icons';

const OrderScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!name || !email.includes('@')) {
      Alert.alert('Помилка', 'Будь ласка, введіть коректні дані');
      return;
    }

    dispatch(setUser({ name, email }));
    dispatch(addOrder({
      items: cart.items,
      total: cart.total,
      date: new Date().toISOString(),
    }));
    dispatch(clearCart());

    Alert.alert('Успіх!', 'Замовлення оформлено', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Оформлення замовлення</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#6c757d" style={styles.icon} />
        <TextInput
          placeholder="Ваше ім'я"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="#6c757d" style={styles.icon} />
        <TextInput
          placeholder="Ваш email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Підтвердити замовлення</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2b2d42',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#2a9d8f',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderScreen;

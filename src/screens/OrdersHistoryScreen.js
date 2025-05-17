import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const OrdersHistoryScreen = () => {
  const orders = useSelector((state) => state.orders.orders);

  const renderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <View style={styles.orderHeader}>
        <Ionicons name="receipt" size={20} color="#2a9d8f" />
        <Text style={styles.orderDate}>{new Date(item.date).toLocaleString()}</Text>
      </View>
      <Text style={styles.orderDetails}>Товарів: {item.items.length}</Text>
      <Text style={styles.orderTotal}>Сума: {item.total.toFixed(2)} $</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Історія замовлень</Text>

      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.date}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Ionicons name="time" size={50} color="#ccc" />
          <Text style={styles.emptyText}>Немає історії замовлень</Text>
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
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2b2d42',
    marginLeft: 8,
  },
  orderDetails: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 4,
  },
  orderTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2a9d8f',
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
});

export default OrdersHistoryScreen;

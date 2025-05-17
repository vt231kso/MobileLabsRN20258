import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from './src/screens/ProductsScreen';
import CartScreen from './src/screens/CartScreen';
import OrderScreen from './src/screens/OrderScreen';
import OrdersHistoryScreen from './src/screens/OrdersHistoryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Компонент для таб-навігації
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="History" component={OrdersHistoryScreen} />
    </Tab.Navigator>
  );
}

// Головний компонент додатка
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Основні екрани у вигляді табів */}
            <Stack.Screen
              name="Main"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            {/* Екран замовлення як модальне вікно */}
            <Stack.Screen
              name="Order"
              component={OrderScreen}
              options={{ presentation: 'modal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

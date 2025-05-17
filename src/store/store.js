import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cartReducer from './slices/cartSlice';
import ordersReducer from './slices/ordersSlice';
import productsReducer from './slices/productsSlice';
import userReducer from './slices/userSlice';

// Конфіг для збереження стану
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'orders'], // Зберігаємо тільки кошик та історію
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const persistedOrdersReducer = persistReducer(persistConfig, ordersReducer);

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedCartReducer,
    user: userReducer,
    orders: persistedOrdersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Вимкнути для redux-persist
    }),
});

export const persistor = persistStore(store);

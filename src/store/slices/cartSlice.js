import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price, image } = action.payload; // Додаємо image до деструктуризації
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload, // Тут мають бути всі необхідні властивості
          quantity: 1
        });
      }
      state.total += price;
    },
    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.total -= price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
    // ... інші reducers
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

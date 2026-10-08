// src/store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// A cart line item is uniquely identified by product id + size + color.
// Same product with different size/color = separate line item.
const lineKey = (item) => `${item.id}-${item.size || 'any'}-${item.color || 'any'}`;

const loadCart = () => {
  try {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const persist = (items) => {
  localStorage.setItem('cart', JSON.stringify(items));
};

const initialState = {
  items: loadCart(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // payload: { id, title, price, image, size, color, quantity? }
    addToCart: (state, action) => {
      const incoming = { ...action.payload, quantity: action.payload.quantity || 1 };
      const existing = state.items.find(
        (i) => lineKey(i) === lineKey(incoming)
      );

      if (existing) {
        existing.quantity += incoming.quantity;
      } else {
        state.items.push(incoming);
      }
      persist(state.items);
    },

    // payload: { id, size, color }
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (i) => lineKey(i) !== lineKey(action.payload)
      );
      persist(state.items);
    },

    // payload: { id, size, color, quantity }  (absolute set, not delta)
    updateQuantity: (state, action) => {
      const { quantity } = action.payload;
      const item = state.items.find(
        (i) => lineKey(i) === lineKey(action.payload)
      );

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (i) => lineKey(i) !== lineKey(action.payload)
        );
      } else {
        item.quantity = quantity;
      }
      persist(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

export default cartSlice.reducer;

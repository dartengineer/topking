import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(
        i => i.id === action.payload.id && i.selectedSize === action.payload.selectedSize
      );
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.payload.id && i.selectedSize === action.payload.selectedSize
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          i => !(i.id === action.payload.id && i.selectedSize === action.payload.selectedSize)
        )
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id && i.selectedSize === action.payload.selectedSize
            ? { ...i, quantity: action.payload.quantity }
            : i
        ).filter(i => i.quantity > 0)
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_CART':
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

const initialState = {
  items: JSON.parse(localStorage.getItem('topking_cart') || '[]'),
  isOpen: false
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('topking_cart', JSON.stringify(state.items));
  }, [state.items]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const addItem = (product, selectedSize) =>
    dispatch({ type: 'ADD_ITEM', payload: { ...product, selectedSize } });

  const removeItem = (id, selectedSize) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { id, selectedSize } });

  const updateQuantity = (id, selectedSize, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, selectedSize, quantity } });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  const toggleCart = () => dispatch({ type: 'TOGGLE_CART' });
  const closeCart = () => dispatch({ type: 'CLOSE_CART' });

  return (
    <CartContext.Provider value={{
      items: state.items,
      isOpen: state.isOpen,
      totalItems,
      totalPrice,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      closeCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
};

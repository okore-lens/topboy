import { useReducer } from "react";
import CartContext from "./cartContext";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Check for the item in the cart
    const itemInCartIndex = state.cartItems.findIndex(
      (item) => item.id === action.item.id
    );
    const itemInCart = state.cartItems[itemInCartIndex];

    //
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    let updatedItems;

    if (itemInCart) {
      const updatedItem = {
        ...itemInCart,
        amount: itemInCart.amount + action.item.amount,
      };
      updatedItems = [...state.cartItems];
      updatedItems[itemInCartIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const itemInCartIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );
    const itemInCart = state.cartItems[itemInCartIndex];
    const updatedTotalAmount = state.totalAmount - itemInCart.price;
    let updatedItems;
    if (itemInCart.amount === 1) {
      updatedItems = state.cartItems.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...itemInCart, amount: itemInCart.amount - 1 };
      updatedItems = [...state.cartItems];
      updatedItems[itemInCartIndex] = updatedItem;
    }
    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

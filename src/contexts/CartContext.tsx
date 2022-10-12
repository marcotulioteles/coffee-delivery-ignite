import { createContext, ReactNode, useReducer } from "react";
import { addCoffeeToCartAction, updateQuantityAction } from "../reducers/actions";
import { Coffee ,CartReducer } from "../reducers/reducer";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[];
  totalItems: number;
  addNewCoffeeToCart: (newCoffee: Coffee) => void;
  updateQuantity: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cart: [],
      totalItems: 0
    }
  )

  const { cart, totalItems } = cartState;

  function addNewCoffeeToCart(newCoffee: Coffee) {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  function updateQuantity() {
    updateQuantityAction();
  }

  return (
    <CartContext.Provider value={{ cart, totalItems, addNewCoffeeToCart, updateQuantity }}>
      { children }
    </CartContext.Provider>
  )
}
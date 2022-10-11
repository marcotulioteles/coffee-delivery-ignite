import { createContext, ReactNode, useReducer } from "react";
import { addCoffeeToCartAction } from "../reducers/actions";
import { Coffee ,CartReducer } from "../reducers/reducer";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[];
  addNewCoffeeToCart: (newCoffee: Coffee) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cart: []
    }
  )

  const { cart } = cartState;

  function addNewCoffeeToCart(newCoffee: Coffee) {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  return (
    <CartContext.Provider value={{ cart, addNewCoffeeToCart }}>
      { children }
    </CartContext.Provider>
  )
}
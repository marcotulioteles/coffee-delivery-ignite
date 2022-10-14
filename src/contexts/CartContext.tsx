import { createContext, ReactNode, useReducer } from "react";
import { addCoffeeToCartAction, removeCoffeeAction, updateCoffeeQuantityAction } from "../reducers/actions";
import { Coffee ,CartReducer } from "../reducers/reducer";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[];
  totalItems: number;
  addNewCoffeeToCart: (newCoffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  updateCoffeeQuantity: (coffeeId: string, quantity: number) => void;
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

  function removeCoffeeFromCart(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId));
  }

  function updateCoffeeQuantity(coffeeId: string, quantity: number) {
    dispatch(updateCoffeeQuantityAction(coffeeId, quantity));
  }

  return (
    <CartContext.Provider value={{ 
      cart,
      totalItems,
      addNewCoffeeToCart,
      removeCoffeeFromCart,
      updateCoffeeQuantity
     }}>
      { children }
    </CartContext.Provider>
  )
}
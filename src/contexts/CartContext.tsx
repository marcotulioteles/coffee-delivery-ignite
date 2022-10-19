import { createContext, ReactNode, useReducer } from "react";
import { addCoffeeToCartAction, emptyCartAction, removeCoffeeAction, setAddressAction, setPaymentTypeAction, updateCoffeeQuantityAction } from "../reducers/actions";
import { Coffee, CartReducer, PaymentType } from "../reducers/reducer";
import { AddressFormInputs } from "../shared/models/address-form-inputs";

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: Coffee[];
  totalItems: number;
  address: AddressFormInputs;
  paymentType: PaymentType;
  setAddress: (address: AddressFormInputs) => void;
  addNewCoffeeToCart: (newCoffee: Coffee) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  updateCoffeeQuantity: (coffeeId: string, quantity: number) => void;
  setPaymentType: (type: PaymentType) => void;
  emptyCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cart: [],
      totalItems: 0,
      address: {
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        localidade: '',
        uf: ''
      },
      paymentType: 'none'
    }
  )

  const { cart, totalItems, address, paymentType } = cartState;

  function addNewCoffeeToCart(newCoffee: Coffee) {
    dispatch(addCoffeeToCartAction(newCoffee))
  }

  function removeCoffeeFromCart(coffeeId: string) {
    dispatch(removeCoffeeAction(coffeeId));
  }

  function updateCoffeeQuantity(coffeeId: string, quantity: number) {
    dispatch(updateCoffeeQuantityAction(coffeeId, quantity));
  }

  function setAddress(address: AddressFormInputs) {
    dispatch(setAddressAction(address));
  }

  function setPaymentType(type: PaymentType) {
    dispatch(setPaymentTypeAction(type))
  }

  function emptyCart() {
    dispatch(emptyCartAction());
  }

  return (
    <CartContext.Provider value={{
      cart,
      totalItems,
      address,
      paymentType,
      addNewCoffeeToCart,
      removeCoffeeFromCart,
      updateCoffeeQuantity,
      setAddress,
      setPaymentType,
      emptyCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
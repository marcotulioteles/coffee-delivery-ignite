import { current, produce } from 'immer';
import { ActionsType } from './actions';

export interface Coffee {
  id: string,
  imageUrl: string,
  title: string,
  description: string,
  price: number,
  badges: string[],
  quantity?: number
}

interface CartState {
  cart: Coffee[]
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionsType.ADD_COFFEE_T0_CART:
      return produce(state, (draft) => {
        const coffeeAlreadyInCartIndex = state.cart.findIndex(coffee => coffee.id === action.payload.newCoffee.id);
        if (coffeeAlreadyInCartIndex > -1) {
          draft.cart[coffeeAlreadyInCartIndex] = {
            ...draft.cart[coffeeAlreadyInCartIndex],
            quantity: draft.cart[coffeeAlreadyInCartIndex].quantity + action.payload.newCoffee.quantity
          }
        } else {
          draft.cart.push(action.payload.newCoffee)
        }
      })
    default: 
      return state
  }
}
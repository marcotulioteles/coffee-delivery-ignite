import { current, produce } from 'immer';
import { AddressFormInputs } from '../shared/models/address-form-inputs';
import { ActionsType } from './actions';

export type PaymentType = 'credit_card' | 'debit_card' | 'cash' | 'none';
export interface Coffee {
  id: string,
  imageUrl: string,
  title: string,
  description: string,
  price: number,
  badges: string[],
  quantity: number
}

interface CartState {
  cart: Coffee[],
  totalItems: number,
  address: AddressFormInputs,
  paymentType: PaymentType
}

const calculateTotalItems = (cart: Coffee[]): number => {
  return cart.reduce((total, currentValue) => {
    return total + (currentValue.quantity * currentValue.price)
  }, 0);
}

export function CartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionsType.ADD_COFFEE_T0_CART:
      return produce(state, draft => {
        const coffeeAlreadyInCartIndex = state.cart.findIndex(coffee => coffee.id === action.payload.newCoffee.id);
        if (coffeeAlreadyInCartIndex > -1) {
          draft.cart[coffeeAlreadyInCartIndex] = {
            ...draft.cart[coffeeAlreadyInCartIndex],
            quantity: draft.cart[coffeeAlreadyInCartIndex].quantity + action.payload.newCoffee.quantity
          }
        } else {
          draft.cart.push(action.payload.newCoffee)
        }

        draft.totalItems = calculateTotalItems(draft.cart);
      })
    case ActionsType.REMOVE_COFFEE_FROM_CART:
      return produce(state, draft => {
        const coffeeToRemoveIndex = state.cart.findIndex(coffee => coffee.id === action.payload.coffeeId);
        if (coffeeToRemoveIndex > -1) draft.cart.splice(coffeeToRemoveIndex, 1);
        draft.totalItems = calculateTotalItems(draft.cart);
      })
    case ActionsType.UPDATE_COFFEE_QUANTITY:
      return produce(state, draft => {
        const coffeeIndex = state.cart.findIndex(coffee => coffee.id === action.payload.coffeeId);
        const coffeeToUpdate = state.cart.find(coffee => coffee.id === action.payload.coffeeId);

        if (coffeeToUpdate) {
          draft.cart.splice(coffeeIndex, 1, { ...coffeeToUpdate, quantity: action.payload.quantity });
        }

        draft.totalItems = calculateTotalItems(draft.cart);
      })
    case ActionsType.SET_ADDRESS:
      return produce(state, draft => {
        draft.address = action.payload
      })
    case ActionsType.SET_PAYMENT_TYPE:
      return produce(state, draft => {
        draft.paymentType = action.payload
      })
    case ActionsType.EMPTY_CART:
      return produce(state, draft => {
        draft.cart = [];
      })
    default: 
      return state
  }
}
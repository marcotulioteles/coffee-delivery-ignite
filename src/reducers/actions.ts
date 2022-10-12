import { Coffee } from "./reducer";

export enum ActionsType {
  ADD_COFFEE_T0_CART = 'ADD_COFFEE_T0_CART',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY'
}

export function addCoffeeToCartAction(newCoffee: Coffee) {
  return {
    type: ActionsType.ADD_COFFEE_T0_CART,
    payload: {
      newCoffee
    }
  }
}

export function updateQuantityAction() {
  return {
    type: ActionsType.UPDATE_QUANTITY,
  }
}
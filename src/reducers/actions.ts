import { Coffee } from "./reducer";

export enum ActionsType {
  ADD_COFFEE_T0_CART = 'ADD_COFFEE_T0_CART',
}

export function addCoffeeToCartAction(newCoffee: Coffee) {
  return {
    type: ActionsType.ADD_COFFEE_T0_CART,
    payload: {
      newCoffee
    }
  }
}
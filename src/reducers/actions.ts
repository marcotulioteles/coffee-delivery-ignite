import { Coffee } from "./reducer";

export enum ActionsType {
  ADD_COFFEE_T0_CART = 'ADD_COFFEE_T0_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY'
}

export function addCoffeeToCartAction(newCoffee: Coffee) {
  return {
    type: ActionsType.ADD_COFFEE_T0_CART,
    payload: {
      newCoffee
    }
  }
}

export function removeCoffeeAction(coffeeId: string) {
  return {
    type: ActionsType.REMOVE_COFFEE_FROM_CART,
    payload: {
      coffeeId
    }
  }
}

export function updateCoffeeQuantityAction(coffeeId: string, quantity: number) {
  return {
    type: ActionsType.UPDATE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
      quantity
    }
  }
}
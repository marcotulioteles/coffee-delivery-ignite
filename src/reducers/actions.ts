import { AddressFormInputs } from "../shared/models/address-form-inputs";
import { Coffee, PaymentType } from "./reducer";

export enum ActionsType {
  ADD_COFFEE_T0_CART = 'ADD_COFFEE_T0_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE',
  EMPTY_CART = 'EMPTY_CART'
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

export function setAddressAction(payload: AddressFormInputs) {
  return {
    type: ActionsType.SET_ADDRESS,
    payload
  }
}

export function setPaymentTypeAction(payload: PaymentType) {
  return {
    type: ActionsType.SET_PAYMENT_TYPE,
    payload
  }
}

export function emptyCartAction() {
  return {
    type: ActionsType.EMPTY_CART
  }
}
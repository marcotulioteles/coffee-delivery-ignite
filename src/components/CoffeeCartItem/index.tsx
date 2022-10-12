import { Minus, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { defaultTheme } from "../../styles/themes/default";
import { AddRemoveButton, AmountGroup, Button, ButtonGroup, CoffeeDetailsActionsGroup, CoffeeImage, Price, SelectedCoffeeContainer, SelectedCoffeeDetailsContainer } from "./styles";

interface CoffeeCartItemProps {
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
}

export function CoffeeCartItem({ imageUrl, name, price, quantity }: CoffeeCartItemProps) {
  const [localQuantity, setLocalQuantity] = useState<number>(quantity ?? 0);

  const addCoffeeQuantity = (quantity: number) => {
    setLocalQuantity(state => state + quantity + 1);
  }
  
  const removeCoffeeQuantity = (quantity: number) => {
    setLocalQuantity(state => quantity - state - 1);
  }

  return (
    <SelectedCoffeeContainer>
      <SelectedCoffeeDetailsContainer>
        <CoffeeImage src={imageUrl}/>
        <CoffeeDetailsActionsGroup>
          <span>{ name }</span>
          <ButtonGroup>
            <AmountGroup>
              <AddRemoveButton><Minus color={ defaultTheme.purple }/></AddRemoveButton>
              <span>{ localQuantity }</span>
              <AddRemoveButton><Plus color={ defaultTheme.purple }/></AddRemoveButton>
            </AmountGroup>
            <Button>
              <Trash size={ 16 } color={ defaultTheme.purple }/>
              remover
            </Button>
          </ButtonGroup>
        </CoffeeDetailsActionsGroup>
      </SelectedCoffeeDetailsContainer>
      <Price>R$ { price }</Price>
    </SelectedCoffeeContainer>
  )
}
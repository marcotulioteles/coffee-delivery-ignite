import { Minus, Plus, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { Coffee } from "../../reducers/reducer";
import { defaultTheme } from "../../styles/themes/default";
import { addZeroAtTheEnd } from "../../utils";
import { AddRemoveButton, AmountGroup, Button, ButtonGroup, CoffeeDetailsActionsGroup, CoffeeImage, Price, SelectedCoffeeContainer, SelectedCoffeeDetailsContainer } from "./styles";

interface CoffeeCartItemProps {
  coffee: Coffee
}

export function CoffeeCartItem({ coffee }: CoffeeCartItemProps) {
  const [localQuantity, setLocalQuantity] = useState<number>(coffee.quantity ?? 0);

  const addCoffeeQuantity = () => setLocalQuantity(state => state + 1);
  
  const removeCoffeeQuantity = () => {
    if (localQuantity === 0) return;
    setLocalQuantity(state => state - 1);
  };

  return (
    <SelectedCoffeeContainer>
      <SelectedCoffeeDetailsContainer>
        <CoffeeImage src={ coffee.imageUrl }/>
        <CoffeeDetailsActionsGroup>
          <span>{ coffee.title }</span>
          <ButtonGroup>
            <AmountGroup>
              <AddRemoveButton onClick={ removeCoffeeQuantity }><Minus color={ defaultTheme.purple }/></AddRemoveButton>
              <span>{ localQuantity }</span>
              <AddRemoveButton onClick={ addCoffeeQuantity }><Plus color={ defaultTheme.purple }/></AddRemoveButton>
            </AmountGroup>
            <Button>
              <Trash size={ 16 } color={ defaultTheme.purple }/>
              remover
            </Button>
          </ButtonGroup>
        </CoffeeDetailsActionsGroup>
      </SelectedCoffeeDetailsContainer>
      <Price>R$ { addZeroAtTheEnd(coffee.price) }</Price>
    </SelectedCoffeeContainer>
  )
}
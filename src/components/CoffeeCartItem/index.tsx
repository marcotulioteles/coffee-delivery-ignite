import { Minus, Plus, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { AddRemoveButton, AmountGroup, Button, ButtonGroup, CoffeeDetailsActionsGroup, CoffeeImage, Price, SelectedCoffeeContainer, SelectedCoffeeDetailsContainer } from "./styles";

interface CoffeeCartItemProps {
  imageUrl: string;
  name: string;
  price: number;
  quantity?: number;
}

export function CoffeeCartItem({ imageUrl, name, price, quantity }: CoffeeCartItemProps) {
  return (
    <SelectedCoffeeContainer>
      <SelectedCoffeeDetailsContainer>
        <CoffeeImage src={imageUrl}/>
        <CoffeeDetailsActionsGroup>
          <span>{ name }</span>
          <ButtonGroup>
            <AmountGroup>
              <AddRemoveButton><Minus color={ defaultTheme.purple }/></AddRemoveButton>
              <span>{ quantity }</span>
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
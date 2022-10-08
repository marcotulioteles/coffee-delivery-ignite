import { Minus, Plus, Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { AddRemoveButton, AmountGroup, Button, ButtonGroup, CoffeeDetailsActionsGroup, CoffeeImage, Price, SelectedCoffeeContainer, SelectedCoffeeDetailsContainer } from "./styles";

export function CoffeeCardItem() {
  return (
    <SelectedCoffeeContainer>
      <SelectedCoffeeDetailsContainer>
        <CoffeeImage src="src/assets/expresso-tradicional.png"/>
        <CoffeeDetailsActionsGroup>
          <span>Expresso Tradicional</span>
          <ButtonGroup>
            <AmountGroup>
              <AddRemoveButton><Minus color={ defaultTheme.purple }/></AddRemoveButton>
              <span>1</span>
              <AddRemoveButton><Plus color={ defaultTheme.purple }/></AddRemoveButton>
            </AmountGroup>
            <Button>
              <Trash size={ 16 } color={ defaultTheme.purple }/>
              remover
            </Button>
          </ButtonGroup>
        </CoffeeDetailsActionsGroup>
      </SelectedCoffeeDetailsContainer>
      <Price>R$ 9,90</Price>
    </SelectedCoffeeContainer>
  )
}
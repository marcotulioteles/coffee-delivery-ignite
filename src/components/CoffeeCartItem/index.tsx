import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Coffee } from "../../reducers/reducer";
import { defaultTheme } from "../../styles/themes/default";
import { addZeroAtTheEnd } from "../../utils";
import { Modal } from "../Modal";
import { RemoveCoffeeConfirmation } from "../ModalContents/RemoveCoffeeConfirmation";
import { AddRemoveButton, AmountGroup, Button, ButtonGroup, CoffeeDetailsActionsGroup, CoffeeImage, Price, SelectedCoffeeContainer, SelectedCoffeeDetailsContainer } from "./styles";

interface CoffeeCartItemProps {
  coffee: Coffee
}

export function CoffeeCartItem({ coffee }: CoffeeCartItemProps) {
  const [localQuantity, setLocalQuantity] = useState<number>(coffee.quantity ?? 1);
  const { removeCoffeeFromCart, updateCoffeeQuantity, cart } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addCoffeeQuantity = () => {
    setLocalQuantity(state => state + 1)
  };

  const removeCoffeeQuantity = () => {
    if (localQuantity === 1) return;
    setLocalQuantity(state => state - 1);
  };

  const modalProceedFn = () => {
    removeCoffeeFromCart(coffee.id)
  }

  useEffect(() => {
    updateCoffeeQuantity(coffee.id, localQuantity);
  }, [localQuantity])

  return (
    <>
      <SelectedCoffeeContainer>
        <SelectedCoffeeDetailsContainer>
          <CoffeeImage src={coffee.imageUrl} />
          <CoffeeDetailsActionsGroup>
            <span>{coffee.title}</span>
            <ButtonGroup>
              <AmountGroup>
                <AddRemoveButton onClick={removeCoffeeQuantity}><Minus color={defaultTheme.purple} /></AddRemoveButton>
                <span>{localQuantity}</span>
                <AddRemoveButton onClick={addCoffeeQuantity}><Plus color={defaultTheme.purple} /></AddRemoveButton>
              </AmountGroup>
              <Button onClick={() => setModalIsOpen(true)}>
                <Trash size={16} color={defaultTheme.purple} />
                remover
              </Button>
            </ButtonGroup>
          </CoffeeDetailsActionsGroup>
        </SelectedCoffeeDetailsContainer>
        <Price>R$ {addZeroAtTheEnd(coffee.price * coffee.quantity)}</Price>
      </SelectedCoffeeContainer>
      <Modal
        isOpened={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        showProceedButton
        proceedButtonText='Remover Item'
        onProceed={() => modalProceedFn()}
        closeButtonText="Cancelar"
      >
        <RemoveCoffeeConfirmation coffeeName={coffee.title} />
      </Modal>
    </>
  )
}
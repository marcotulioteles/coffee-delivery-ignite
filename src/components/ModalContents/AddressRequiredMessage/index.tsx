import { MapPinLine } from "phosphor-react";
import { Content, AddressRequiredMessageContainer } from "./styles";
import { defaultTheme } from "../../../styles/themes/default";

interface AddressRequiredMessageProps {
  coffeeName?: string;
}

export function AddressRequiredMessage({ coffeeName }: AddressRequiredMessageProps) {
  return (
    <AddressRequiredMessageContainer>
      <Content>
        <MapPinLine size={48} weight='regular' color={defaultTheme["yellow-dark"]} />
        <p>Precisamos saber onde você está para entregar seu pedido. Por favor, preencha os campos de endereço.</p>
      </Content>
    </AddressRequiredMessageContainer>
  )
}
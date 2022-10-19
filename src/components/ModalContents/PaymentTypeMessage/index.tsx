import { CurrencyCircleDollar, MapPinLine } from "phosphor-react";
import { Content, PaymentTypeMessageContainer } from "./styles";
import { defaultTheme } from "../../../styles/themes/default";

export function PaymentTypeMessage() {
  return (
    <PaymentTypeMessageContainer>
      <Content>
        <CurrencyCircleDollar size={48} weight='regular' color={defaultTheme["yellow-dark"]} />
        <p>Por favor, escolha a forma de pagamento para prosseguir.</p>
      </Content>
    </PaymentTypeMessageContainer>
  )
}
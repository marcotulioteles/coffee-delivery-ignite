import deliveryGuy from '../../assets/delivery-guy.svg';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { ConfirmationContainer, ConfirmationContent, DetailsCircleIcon, PurchaseDetailsContainer, PurchaseDetailsText, PurchaseDetailsTextGroup, TitleWrapper } from "./styles";

export function Confirmation() {
  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        <TitleWrapper>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleWrapper>
        <PurchaseDetailsContainer>
          <PurchaseDetailsTextGroup>
            <DetailsCircleIcon backgroundColor={ defaultTheme.purple }>
              <MapPin size={ 16 } color="#FFFFFF" weight="fill"/>
            </DetailsCircleIcon>
            <PurchaseDetailsText>
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span></p>
              <p>Farrapos - Porto Alegre, RS</p>
            </PurchaseDetailsText>
          </PurchaseDetailsTextGroup>
          <PurchaseDetailsTextGroup>
            <DetailsCircleIcon backgroundColor={ defaultTheme.yellow }>
              <Timer size={ 16 } color="#FFFFFF" weight="fill"/>
            </DetailsCircleIcon>
            <PurchaseDetailsText>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </PurchaseDetailsText>
          </PurchaseDetailsTextGroup>
          <PurchaseDetailsTextGroup>
            <DetailsCircleIcon backgroundColor={ defaultTheme["yellow-dark"] }>
              <CurrencyDollar size={ 16 } color="#FFFFFF" weight="fill"/>
            </DetailsCircleIcon>
            <PurchaseDetailsText>
              <p>Pagamento na entrega</p>
              <span>Cartão de Crédito</span>
            </PurchaseDetailsText>
          </PurchaseDetailsTextGroup>
        </PurchaseDetailsContainer>
      </ConfirmationContent>
      <img src={ deliveryGuy }/>
    </ConfirmationContainer>
  )
}
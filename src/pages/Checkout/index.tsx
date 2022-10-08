import { ButtonGroup, CoffeeCartItemsContainer, ConfirmButton, FormTextTitleContainer, Input, InputGroup, PaymentTypeButton, PaymentTypeContainer, CheckoutContainer, AddressForm, AddressFormContainer, SelectedCoffeeContainer, SelectedCoffeeWrapper, SubtotalText, TitleWrapper, TotalContainer, TotalText, TotalTextGroup } from "./styles";
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/default";
import { CoffeeCardItem } from "../../components/CoffeeCartItem";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressFormContainer>
        <h1>Complete seu pedido</h1>
        <AddressForm>
          <FormTextTitleContainer>
            <MapPinLine size={ 22 } color={ defaultTheme["yellow-dark"] } weight='regular'/>
            <TitleWrapper>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleWrapper>
          </FormTextTitleContainer>
          <Input customWidth="200px" placeholder="CEP"/>
          <Input placeholder="Rua"/>
          <InputGroup>
            <Input customWidth="200px" placeholder="Número"/>
            <Input placeholder="Complemento"/>
          </InputGroup>
          <InputGroup>
            <Input customWidth="200px" placeholder="Bairro"/>
            <Input placeholder="Cidade"/>
            <Input customWidth="60px" placeholder="UF"/>
          </InputGroup>
        </AddressForm>

        <PaymentTypeContainer>
          <FormTextTitleContainer>
            <CurrencyDollar size={ 22 } color={ defaultTheme["purple"] } weight='regular'/>
            <TitleWrapper>
              <h2>Pagamento</h2>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </TitleWrapper>
          </FormTextTitleContainer>
          <ButtonGroup>
            <PaymentTypeButton>
              <CreditCard size={ 16 } color={ defaultTheme.purple }/>
              Cartão de Crédito
            </PaymentTypeButton>
            <PaymentTypeButton>
              <Bank size={ 16 } color={ defaultTheme.purple }/>
              Cartão de Débito
            </PaymentTypeButton>
            <PaymentTypeButton>
              <Money size={ 16 } color={ defaultTheme.purple }/>
              Dinheiro
            </PaymentTypeButton>
          </ButtonGroup>
        </PaymentTypeContainer>
      </AddressFormContainer>

      <SelectedCoffeeWrapper>
        <h1>Cafés selecionados</h1>
        <SelectedCoffeeContainer>
          <CoffeeCartItemsContainer>
            <CoffeeCardItem />
            <CoffeeCardItem />
          </CoffeeCartItemsContainer>
          <TotalContainer>
            <TotalTextGroup>
              <SubtotalText>Total de itens</SubtotalText><SubtotalText>R$ 29,70</SubtotalText>
            </TotalTextGroup>
            <TotalTextGroup>
              <SubtotalText>Entrega</SubtotalText><SubtotalText>R$ 3,50</SubtotalText>
            </TotalTextGroup>
            <TotalTextGroup>
              <TotalText>Total</TotalText><TotalText>R$ 33,20</TotalText>
            </TotalTextGroup>
          </TotalContainer>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </SelectedCoffeeContainer>
      </SelectedCoffeeWrapper>
    </CheckoutContainer>
  )
}
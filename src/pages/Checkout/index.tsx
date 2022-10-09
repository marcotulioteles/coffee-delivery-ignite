import { 
  ButtonGroup,
  CoffeeCartItemsContainer,
  ConfirmButton,
  FormTextTitleContainer,
  Input,
  InputGroup,
  PaymentTypeButton,
  PaymentTypeContainer,
  CheckoutContainer,
  AddressForm,
  AddressFormContainer,
  SelectedCoffeeContainer,
  SelectedCoffeeWrapper,
  SubtotalText,
  TitleWrapper,
  TotalContainer, 
  TotalText, 
  TotalTextGroup 
} from "./styles";
import { useForm, SubmitHandler } from 'react-hook-form';
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/default";
import { CoffeeCardItem } from "../../components/CoffeeCartItem";
import { ChangeEvent, useState } from "react";
import { CEPMask, removeNonDigitsChar } from "../../utils/cep-mask";
import { viaCepAPI } from "../../lib";

interface AddressFormInputs {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Checkout() {
  const [apiAddress, setApiAddress] = useState();
  const { register, handleSubmit, formState: { errors, isValid }, setValue } = useForm<AddressFormInputs>();

  const onSubmitAddress: SubmitHandler<AddressFormInputs> = data => console.log(data);

  async function getAddressData(cepValue: string) {
    if (!cepValue) return;

    const inputKeys = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf'];
    const cepValueOnlyDigits = removeNonDigitsChar(cepValue);
    const response = await viaCepAPI.get(`/${ cepValueOnlyDigits }/json`)

    const { data } = response;

    if (data.erro) {
      return;
    }
    
    if (data) {
      inputKeys.forEach((key) => {
        setValue(key as keyof AddressFormInputs, response.data[key])
      })
    }
  }

  const onChangePostalCode = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.target.value = CEPMask(value);
  }

  return (
    <CheckoutContainer>
      <AddressFormContainer>
        <h1>Complete seu pedido</h1>
        <AddressForm id="address-form" onSubmit={ handleSubmit(onSubmitAddress) }>
          <FormTextTitleContainer>
            <MapPinLine size={ 22 } color={ defaultTheme["yellow-dark"] } weight='regular'/>
            <TitleWrapper>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitleWrapper>
          </FormTextTitleContainer>
          <Input 
            customWidth="200px" 
            placeholder="CEP" 
            { ...register('cep') } 
            onChange={ e => { onChangePostalCode(e) } }
            onBlur={ e => { getAddressData(e.target.value) } }
          />
          <Input placeholder="Rua" { ...register('logradouro') }/>
          <InputGroup>
            <Input customWidth="200px" placeholder="Número" { ...register('numero') }/>
            <Input placeholder="Complemento" { ...register('complemento') }/>
          </InputGroup>
          <InputGroup>
            <Input customWidth="200px" placeholder="Bairro" { ...register('bairro') }/>
            <Input placeholder="Cidade" { ...register('localidade') }/>
            <Input customWidth="60px" placeholder="UF" { ...register('uf') }/>
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
          <ConfirmButton type="submit" form="address-form">CONFIRMAR PEDIDO</ConfirmButton>
        </SelectedCoffeeContainer>
      </SelectedCoffeeWrapper>
    </CheckoutContainer>
  )
}
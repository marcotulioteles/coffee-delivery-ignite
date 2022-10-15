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
import { CoffeeCartItem } from "../../components/CoffeeCartItem";
import { ChangeEvent, ReactNode, useContext, useEffect, useState } from "react";
import { addZeroAtTheEnd, CEPMask, removeNonDigitsChar } from "../../utils";
import { viaCepAPI } from "../../lib";
import { CartContext } from "../../contexts/CartContext";
import { Modal } from "../../components/Modal";
import { ErrorMessage } from '@hookform/error-message';
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
  const { register, handleSubmit, formState: { isValid, errors, isSubmitted }, setValue } = useForm<AddressFormInputs>({ mode: "all" });
  const { cart, totalItems } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);

  const onSubmitAddress: SubmitHandler<AddressFormInputs> = data => {
    console.log(data)
  };

  useEffect(() => {
    console.log(modalIsOpen);
    console.log(isValid);
  }, [modalIsOpen])

  const onClickSubmitButton = () => {
    setModalChildren(<h1>Testando modal com novo conteúdo!</h1>);
    setModalIsOpen(true);
  }

  async function getAddressData(cepValue: string) {
    if (!cepValue) return;

    const inputKeys = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf'];
    const cepValueOnlyDigits = removeNonDigitsChar(cepValue);
    const response = await viaCepAPI.get(`/${cepValueOnlyDigits}/json`)

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
    <>
      <CheckoutContainer>
        <AddressFormContainer>
          <h1>Complete seu pedido</h1>
          <AddressForm id="address-form" onSubmit={handleSubmit(onSubmitAddress)}>
            <FormTextTitleContainer>
              <MapPinLine size={22} color={defaultTheme["yellow-dark"]} weight='regular' />
              <TitleWrapper>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </TitleWrapper>
            </FormTextTitleContainer>
            <Input
              customWidth="200px"
              placeholder="CEP"
              {...register('cep')}
              onChange={e => { onChangePostalCode(e) }}
              onBlur={e => { getAddressData(e.target.value) }}
            />
            <Input placeholder="Rua" {...register('logradouro', { required: 'O nome da rua é obrigatório' })} />
            {/* <ErrorMessage errors={errors} name="logradouro" as="p" /> */}
            <InputGroup>
              <Input customWidth="200px" placeholder="Número" {...register('numero', { required: 'O número é obrigatório' })} />
              {/* <ErrorMessage errors={errors} name="numero" as="p" /> */}
              <Input placeholder="Complemento" {...register('complemento')} />
            </InputGroup>
            <InputGroup>
              <Input customWidth="200px" placeholder="Bairro" {...register('bairro', { required: true })} />
              <Input placeholder="Cidade" {...register('localidade', { required: true })} />
              <Input customWidth="60px" placeholder="UF" {...register('uf', { required: true })} />
            </InputGroup>
          </AddressForm>

          <PaymentTypeContainer>
            <FormTextTitleContainer>
              <CurrencyDollar size={22} color={defaultTheme["purple"]} weight='regular' />
              <TitleWrapper>
                <h2>Pagamento</h2>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </TitleWrapper>
            </FormTextTitleContainer>
            <ButtonGroup>
              <PaymentTypeButton>
                <CreditCard size={16} color={defaultTheme.purple} />
                Cartão de Crédito
              </PaymentTypeButton>
              <PaymentTypeButton>
                <Bank size={16} color={defaultTheme.purple} />
                Cartão de Débito
              </PaymentTypeButton>
              <PaymentTypeButton>
                <Money size={16} color={defaultTheme.purple} />
                Dinheiro
              </PaymentTypeButton>
            </ButtonGroup>
          </PaymentTypeContainer>
        </AddressFormContainer>

        <SelectedCoffeeWrapper>
          <h1>Cafés selecionados</h1>
          <SelectedCoffeeContainer>
            <CoffeeCartItemsContainer>
              {cart?.map((coffee) => (
                <CoffeeCartItem
                  key={`${coffee.id}`}
                  coffee={coffee}
                />
              ))}
            </CoffeeCartItemsContainer>
            <TotalContainer>
              <TotalTextGroup>
                <SubtotalText>Total de itens</SubtotalText><SubtotalText>R$ {addZeroAtTheEnd(totalItems)}</SubtotalText>
              </TotalTextGroup>
              <TotalTextGroup>
                <SubtotalText>Entrega</SubtotalText><SubtotalText>R$ 3,50</SubtotalText>
              </TotalTextGroup>
              <TotalTextGroup>
                <TotalText>Total</TotalText><TotalText>R$ {addZeroAtTheEnd(totalItems + 3.5)}</TotalText>
              </TotalTextGroup>
            </TotalContainer>
            <ConfirmButton type="submit" form="address-form" onClick={onClickSubmitButton}>CONFIRMAR PEDIDO</ConfirmButton>
          </SelectedCoffeeContainer>
        </SelectedCoffeeWrapper>
      </CheckoutContainer>
      <Modal isOpened={modalIsOpen} onClose={() => setModalIsOpen(false)} >
        {modalChildren}
      </Modal>
    </>
  )
}
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
import { useNavigate } from 'react-router-dom';
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { defaultTheme } from "../../styles/themes/default";
import { CoffeeCartItem } from "../../components/CoffeeCartItem";
import { ChangeEvent, ReactNode, useContext, useEffect, useState } from "react";
import { addZeroAtTheEnd, CEPMask, removeNonDigitsChar } from "../../utils";
import { viaCepAPI } from "../../lib";
import { CartContext } from "../../contexts/CartContext";
import { Modal } from "../../components/Modal";
import { AddressRequiredMessage } from "../../components/ModalContents/AddressRequiredMessage";
import { AddressFormInputs } from "../../shared/models/address-form-inputs";
import { PaymentTypeEnum } from "../../shared/enums/payment-type.enum";
import { PaymentTypeMessage } from "../../components/ModalContents/PaymentTypeMessage";

export function Checkout() {
  const { cart, totalItems, setAddress, setPaymentType, paymentType, emptyCart } = useContext(CartContext);
  const { register, handleSubmit, formState: { isValid, errors, isSubmitted }, setValue } = useForm<AddressFormInputs>({ mode: "all" });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode>(null);
  const { cash, credit, debit, none } = PaymentTypeEnum;
  const navigate = useNavigate();

  const onSubmitAddress: SubmitHandler<AddressFormInputs> = data => {
    setAddress(data);
    if (isValid && !paymentType.includes(none)) {
      navigate('/confirmation');
      emptyCart();
    }
  };

  const onClickSubmitButton = () => {
    if (!isValid) {
      setModalChildren(<AddressRequiredMessage />);
      setModalIsOpen(true);
      return
    }

    if (paymentType.includes('none')) {
      setModalChildren(<PaymentTypeMessage />)
      setModalIsOpen(true);
    }
  }

  async function getAddressData(cepValue: string) {
    if (!cepValue) return;

    const inputKeys = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf'];
    const cepValueOnlyDigits = removeNonDigitsChar(cepValue);
    const response = await viaCepAPI.get(`/${cepValueOnlyDigits}/json`)

    const { data } = response;
    console.log(data)

    if (data.erro) {
      return;
    }

    if (data) {
      const {
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf
      } = data;
      inputKeys.forEach((key) => {
        setValue(key as keyof AddressFormInputs, response.data[key])
      })
      setAddress({
        cep,
        logradouro,
        complemento,
        bairro,
        localidade,
        uf,
        numero: ''
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
              <PaymentTypeButton onClick={() => setPaymentType('credit_card')} highlight={paymentType.includes(credit)}>
                <CreditCard size={16} color={defaultTheme.purple} />
                Cartão de Crédito
              </PaymentTypeButton>
              <PaymentTypeButton onClick={() => setPaymentType('debit_card')} highlight={paymentType.includes(debit)}>
                <Bank size={16} color={defaultTheme.purple} />
                Cartão de Débito
              </PaymentTypeButton>
              <PaymentTypeButton onClick={() => setPaymentType('cash')} highlight={paymentType.includes(cash)}>
                <Money size={16} color={defaultTheme.purple} />
                Dinheiro
              </PaymentTypeButton>
            </ButtonGroup>
          </PaymentTypeContainer>
        </AddressFormContainer>

        <SelectedCoffeeWrapper>
          <h1>Cafés selecionados</h1>
          {cart.length > 0 &&
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
          }
        </SelectedCoffeeWrapper>
      </CheckoutContainer>
      <Modal isOpened={modalIsOpen} onClose={() => setModalIsOpen(false)} closeButtonText="OK">
        {modalChildren}
      </Modal>
    </>
  )
}
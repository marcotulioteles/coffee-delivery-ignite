import styled, { css } from 'styled-components';

interface InputProps {
  customWidth?: string;
}

interface PaymentButtonProps {
  highlight?: boolean;
}

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: flex-start;
  gap: 32px;
  margin: 144px auto 54px;

  @media (max-width: 1220px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 57.5%;

  @media (max-width: 1220px) {
    width: 65%;
  }

  &>h1 {
    font-size: 18px;
    color: ${ props => props.theme['base-subtitle'] };
  }
  `;

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px;
  margin-top: 16px;
  background-color: ${ props => props.theme['base-card'] };
  border-radius: 6px;
`;

export const FormTextTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
  `;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${ props => props.theme['base-subtitle'] };

  h2 {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    margin-bottom: 2px;
  }

  p {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Input = styled.input<InputProps>`
  background-color: ${ props => props.theme['base-input'] };
  border: 1px solid ${ props => props.theme['base-button'] };
  padding: 12px;
  border-radius: 4px;

  ${ props => css`
    width: ${ props.customWidth ?? null };
    flex: ${ !props.customWidth ? 1 : null };
  ` }

  &::placeholder {
    font-size: 14px;
    color: ${ props => props.theme['base-label'] };
    font-family: 'Roboto', sans-serif;
  }

  &:focus {
    outline: 1px solid ${ props => props.theme.yellow };
  }
`;

export const PaymentTypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background-color: ${ props => props.theme['base-card'] };
  margin-top: 12px;
  border-radius: 6px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PaymentTypeButton = styled.button<PaymentButtonProps>`
  min-width: 174px;
  border: ${ props => props.highlight ? '1px solid' + props.theme['purple'] : 'none' };
  outline: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  min-height: 51px;
  background-color: ${ props => props.highlight ? props.theme['purple-light'] : props.theme['base-button'] };
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 12px;
  color: ${ props => props.theme['base-text'] };
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${ props => props.theme['base-button-hover'] };
  }
`;

export const SelectedCoffeeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 1220px) {
    width: 65%;
  }

  &>h1 {
    font-size: 18px;
    color: ${ props => props.theme['base-subtitle'] };
  }
`;

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px;
  background-color: ${ props => props.theme['base-card'] };
  border-radius: 6px 44px 6px 44px;
  margin-top: 16px;
`;

export const CoffeeCartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const ConfirmButton = styled.button`
  border: none;
  outline: none;
  flex: 1;
  height: 46px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.theme.yellow };
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.3;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  padding: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${ props => props.theme['yellow-dark'] };
  }
`;

export const TotalTextGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const SubtotalText = styled.span`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${ props => props.theme['base-text'] };
  line-height: 1.3;
`;

export const TotalText = styled.span`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: ${ props => props.theme['base-subtitle'] };
  line-height: 1.3;
`;
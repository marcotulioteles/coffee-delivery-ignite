import styled from 'styled-components';

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  padding: 24px 0 32px;
  border-bottom: 1px solid ${ props => props.theme['base-button'] };

  @media (max-width: 1220px) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SelectedCoffeeDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CoffeeImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
`;

export const CoffeeDetailsActionsGroup = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 16px;
    color: ${ props => props.theme['base-subtitle'] };
    text-transform: capitalize;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;

    @media (max-width: 425px) {
      text-align: center;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

export const AmountGroup = styled.div`
  height: 32px;
  background-color: ${ props => props.theme['base-button'] };
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  border-radius: 6px;

  span {
    margin: 0 8px;
  }
`;

export const AddRemoveButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${ props => props.theme['base-button'] };
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3;
  font-family: 'Roboto', sans-serif;
  color: ${ props => props.theme['base-text'] };
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${ props => props.theme['base-button-hover'] };
  }
`;

export const Price = styled.span`
  font-size: 16px;
  line-height: 1.3;
  font-weight: 700;
  color: ${ props => props.theme['base-text'] };
`;
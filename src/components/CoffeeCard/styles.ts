import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ props => props.theme["base-card"] };
  padding: 0 24px 20px;
  border-radius: 6px 36px 6px 36px;
`;

export const CoffeeImage = styled.img`
  width: 120px;
  height: 120px;
  margin-top: -20px;
`;

export const BadgeGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 12px 0 16px;
`;

export const Badge = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  padding: 4px 8px;
  border-radius: 100px;
  color: ${ props => props.theme['yellow-dark'] };
  background-color: ${ props => props.theme['yellow-light'] };
  text-transform: uppercase;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.3;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  line-height: 1.3;
  color: ${ props => props.theme['base-title'] };
  text-align: center;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  color: ${ props => props.theme['base-label'] };
  text-align: center;
`;

export const PurchaseGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;
`;

export const PriceGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CurrencySymbol = styled.span`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: ${ props => props.theme['base-text'] };
  line-height: 1.3;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: 800;
  font-family: 'Baloo 2', sans-serif;
  color: ${ props => props.theme['base-text'] };
  line-height: 1.3;
`;

export const AmountAndCartGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const AmountGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  background-color: ${ props => props.theme['base-button'] };
  border-radius: 6px;
`;

export const AddAndRemoveButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
`;

export const AmountValue = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.3;
  color: ${ props => props.theme['base-title'] };
  margin: 0 4px;
`;

export const AddToCartButton = styled.button`
  border: none;
  outline: none;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  background-color: ${ props => props.theme['purple-dark'] };
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
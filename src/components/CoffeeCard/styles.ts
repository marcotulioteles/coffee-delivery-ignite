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
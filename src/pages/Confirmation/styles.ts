import styled from 'styled-components';

interface DetailsCircleIconProps {
  backgroundColor: string;
}

export const ConfirmationContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 1180px;
  margin: 80px auto 0;
`;

export const ConfirmationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: ${ props => props.theme['yellow-dark'] };
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.3;
    color: ${ props => props.theme['base-subtitle'] };
  }
`;

export const PurchaseDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 40px;
  background: linear-gradient(${ props => props.theme['base-background'] }, ${ props => props.theme['base-background'] }) padding-box,
  linear-gradient(to right, ${ props => props.theme.yellow }, ${ props => props.theme.purple }) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
`;

export const PurchaseDetailsTextGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DetailsCircleIcon = styled.div<DetailsCircleIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${ props => props.backgroundColor };
`;

export const PurchaseDetailsText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 1.3;
  color: ${ props => props.theme['base-text'] };

  p {
    font-weight: 400;
  }

  span {
    font-weight: 700;
  }
`;
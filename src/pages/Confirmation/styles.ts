import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1180px;
  margin: 0 auto;
`;

export const ConfirmationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 40px;
  background: linear-gradient(${ props => props.theme['base-background'] }, ${ props => props.theme['base-background'] }) padding-box,
  linear-gradient(to right, ${ props => props.theme.yellow }, ${ props => props.theme.purple }) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;
`;
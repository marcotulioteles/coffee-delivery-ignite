import styled from 'styled-components';

// export const ModalBackground = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.8);
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export const ModalContainer = styled.dialog`
  margin: auto auto;
  min-width: 100px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.theme['base-background'] };
  padding: 40px;
  border-radius: 10px;
  border: none;
  text-align: center;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
`;

export const CancelButton = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${ props => props.theme['base-button'] };
  color: ${ props => props.theme['base-text'] };
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${ props => props.theme['base-button-hover'] }
  }
`;

export const ProceedButton = styled.button`
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${ props => props.theme['purple-light'] };
  color: ${ props => props.theme['purple-dark'] };
  padding: 12px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${ props => props.theme['purple'] };
    color: ${ props => props.theme['base-background'] }
  }
`;
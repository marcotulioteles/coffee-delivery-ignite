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
  min-width: 100px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ props => props.theme['base-background'] };
  padding: 40px;
  border-radius: 10px;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;
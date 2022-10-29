import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background-color: ${ props => props.theme["base-background"] };
`;

export const HeaderContent = styled.nav`
  width: 100%;
  max-width: 1180px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1220px) {
    margin: 0 1.5rem;
  }
`;

export const RightNavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const City = styled.div`
  border: none;
  outline: none;
  width: fit-content;
  height: 38px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 14px;
  border-radius: 8px;
  color: ${ props => props.theme["purple-dark"] };
  background-color: ${ props => props.theme["purple-light"] };
  cursor: pointer;

  @media (max-width: 375px) {
    span {
      display: none;
    }
  }
`;

export const Cart = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ props => props.theme["yellow-light"] };
  position: relative;
  cursor: pointer;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #FFFFFF;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${ props => props.theme["yellow-dark"] };
  position: absolute;
  right: -7.5px;
  top: -7.5px;
`;
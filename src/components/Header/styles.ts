import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.nav`
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightNavButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const City = styled.div`
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
`;

export const Cart = styled.a`
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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${ props => props.theme["yellow-dark"] };
  position: absolute;
  right: -7.5px;
  top: -7.5px;
`;
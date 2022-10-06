import styled, { css } from "styled-components";

interface BoxCircleProps {
  backgroundColor: string;
}

export const ContentPage = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  `;

export const PresentationWrapper = styled.div`
  width: 100%;
  display: flex;
  background-image: url('src/assets/blur-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 32px;
`;

export const PresentationContainer = styled.div`
  margin: 0 auto;
  width: 1180px;
  height: 544px;
  display: flex;
`;

export const PresentationText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  `;

export const PresentationTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PresentationTextTitle = styled.h1`
  font-size: 48px;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  color: ${ props => props.theme["base-title"] };
  text-align: left;
  line-height: 1.3;
`;

export const PresentationSubtitle = styled.p`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: ${ props => props.theme["base-text"] };
  text-align: left;
  line-height: 1.3;
`;

export const PresentationTextDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
`;

export const PresentationDetailItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PresentationDetailBoxCircle = styled.div<BoxCircleProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ props => props.backgroundColor };
`;

export const PresentationDetailBoxText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${ props => props.theme["base-text"] };
`;

export const CoffeeCupImageContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OurCoffeesContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 32px;
    margin-bottom: 54px;
    line-height: 1.3;
  }
`;

export const OurCoffeesGrid = styled.div`
  max-width: 1180px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 32px;
`;
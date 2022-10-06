import { ShoppingCart } from "phosphor-react";
import { CoffeeCupImageContainer, ContentPage, PresentationContainer, PresentationDetailBoxCircle, PresentationDetailBoxText, PresentationDetailItemContainer, PresentationSubtitle, PresentationText, PresentationTextDetailsContainer, PresentationTextTitle, PresentationTitleWrapper } from "./styles";
import { textDetails } from "./text-details";

export function Home() {
  return (
    <ContentPage>
      <PresentationContainer>
        <PresentationText>
          <PresentationTitleWrapper>
            <PresentationTextTitle>
              Encontre o café perfeito para qualquer hora do dia
            </PresentationTextTitle>
            <PresentationSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </PresentationSubtitle>
          </PresentationTitleWrapper>
          <PresentationTextDetailsContainer>

            { textDetails.map(detail => (
              <PresentationDetailItemContainer>
              <PresentationDetailBoxCircle>
                { detail.icon }
              </PresentationDetailBoxCircle>
                <PresentationDetailBoxText>
                  { detail.text }
                </PresentationDetailBoxText>
            </PresentationDetailItemContainer>
            )) }

          </PresentationTextDetailsContainer>
        </PresentationText>

        <CoffeeCupImageContainer>
          <img src="src/assets/coffee-cup.png" height={360}/>
        </CoffeeCupImageContainer>
      </PresentationContainer>
    </ContentPage>
  )
}
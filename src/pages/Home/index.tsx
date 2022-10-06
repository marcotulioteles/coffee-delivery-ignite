import { CoffeeCard } from "../../components/CoffeeCard";
import { CoffeeCupImageContainer, ContentPage, OurCoffeesContainer, OurCoffeesGrid, PresentationContainer, PresentationDetailBoxCircle, PresentationDetailBoxText, PresentationDetailItemContainer, PresentationSubtitle, PresentationText, PresentationTextDetailsContainer, PresentationTextTitle, PresentationTitleWrapper, PresentationWrapper } from "./styles";
import { textDetails } from "./text-details";

export function Home() {
  return (
    <ContentPage>
      <PresentationWrapper>
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
                <PresentationDetailItemContainer key={detail.text.trim()}>
                  <PresentationDetailBoxCircle backgroundColor={detail.color}>
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
      </PresentationWrapper>

      <OurCoffeesContainer>
        <h2>Nossos cafés</h2>
        <OurCoffeesGrid>
          <CoffeeCard imageUrl="src/assets/coffee-traditional-1.png" />
          <CoffeeCard imageUrl="src/assets/coffee-traditional-1.png" />
          <CoffeeCard imageUrl="src/assets/coffee-traditional-1.png" />
          <CoffeeCard imageUrl="src/assets/coffee-traditional-1.png" />
          <CoffeeCard imageUrl="src/assets/coffee-traditional-1.png" />
        </OurCoffeesGrid>
      </OurCoffeesContainer>
    </ContentPage>
  )
}
import { ShoppingCart } from "phosphor-react";
import { CoffeeCupImageContainer, ContentPage, PresentationContainer, PresentationDetailBoxCircle, PresentationDetailBoxText, PresentationDetailItemContainer, PresentationSubtitle, PresentationText, PresentationTextDetailsContainer, PresentationTextTitle, PresentationTitleWrapper } from "./styles";

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

            <PresentationDetailItemContainer>
              <PresentationDetailBoxCircle>
                <ShoppingCart size={16} color='#FFFFFF' weight="fill"/>
              </PresentationDetailBoxCircle>
                <PresentationDetailBoxText>
                  Compra simples e segura
                </PresentationDetailBoxText>
            </PresentationDetailItemContainer>

            <PresentationDetailItemContainer>
              <PresentationDetailBoxCircle>
                <ShoppingCart size={16} color='#FFFFFF' weight="fill"/>
              </PresentationDetailBoxCircle>
                <PresentationDetailBoxText>
                Embalagem mantém o café intacto
                </PresentationDetailBoxText>
            </PresentationDetailItemContainer>
            
            <PresentationDetailItemContainer>
              <PresentationDetailBoxCircle>
                <ShoppingCart size={16} color='#FFFFFF' weight="fill"/>
              </PresentationDetailBoxCircle>
                <PresentationDetailBoxText>
                  Compra simples e segura
                </PresentationDetailBoxText>
            </PresentationDetailItemContainer>

            <PresentationDetailItemContainer>
              <PresentationDetailBoxCircle>
                <ShoppingCart size={16} color='#FFFFFF' weight="fill"/>
              </PresentationDetailBoxCircle>
                <PresentationDetailBoxText>
                  Compra simples e segura
                </PresentationDetailBoxText>
            </PresentationDetailItemContainer>

          </PresentationTextDetailsContainer>
        </PresentationText>

        <CoffeeCupImageContainer>
          <img src="src/assets/coffee-cup.png" height={360}/>
        </CoffeeCupImageContainer>
      </PresentationContainer>
    </ContentPage>
  )
}
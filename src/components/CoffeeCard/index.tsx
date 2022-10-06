import { Badge, BadgeGroup, CoffeeCardContainer, CoffeeImage, Description, Title } from "./styles";

interface CoffeeCardProps {
  imageUrl: string;
}

export function CoffeeCard({ imageUrl }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeImage src={imageUrl}></CoffeeImage>
      <BadgeGroup>
        <Badge><span>Tradicional</span></Badge>
        <Badge><span>Tradicional</span></Badge>
      </BadgeGroup>
      <Title>Expresso Tradicional</Title>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
    </CoffeeCardContainer>
  )
}
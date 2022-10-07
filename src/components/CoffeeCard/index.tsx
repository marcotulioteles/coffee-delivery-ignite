import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { 
  AddAndRemoveButton,
  AddToCartButton,
  AmountAndCartGroup,
  AmountGroup,
  AmountValue,
  Badge,
  BadgeGroup,
  CoffeeCardContainer,
  CoffeeImage,
  CurrencySymbol,
  Description,
  Price,
  PriceGroup, 
  PurchaseGroup, 
  Title 
} from "./styles";

interface CoffeeCardProps {
  imageUrl: string;
  badges: string[];
  title: string;
  description: string;
  price: string;
}

export function CoffeeCard({ imageUrl, badges, title, description, price }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CoffeeImage src={imageUrl}></CoffeeImage>
      <BadgeGroup>
        { badges.map(badge => (
          <Badge><span>{ badge }</span></Badge>
        )) }
      </BadgeGroup>
      <Title>{ title }</Title>
      <Description>{ description }</Description>
      <PurchaseGroup>
        <PriceGroup>
          <CurrencySymbol>R$</CurrencySymbol>
          <Price>{ price }</Price>
        </PriceGroup>
        <AmountAndCartGroup>
          <AmountGroup>
            <AddAndRemoveButton><Minus color={ defaultTheme["purple"] } weight="bold" /></AddAndRemoveButton>
            <AmountValue>1</AmountValue>
            <AddAndRemoveButton><Plus color={ defaultTheme["purple"] } weight="bold"/></AddAndRemoveButton>
          </AmountGroup>
          <AddToCartButton><ShoppingCart weight="fill" color="#FFFFFF" size={ 22 }/></AddToCartButton>
        </AmountAndCartGroup>
      </PurchaseGroup>
    </CoffeeCardContainer>
  )
}
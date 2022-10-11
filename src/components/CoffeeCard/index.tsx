import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Coffee } from "../../reducers/reducer";
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
  newCoffee: Coffee;
  imageUrl: string;
  badges: string[];
  title: string;
  description: string;
  price: number;
}

export function CoffeeCard({ newCoffee ,imageUrl, badges, title, description, price }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1);
  const { addNewCoffeeToCart } = useContext(CartContext);

  const addQuantity = () => {
    setQuantity(state => state + 1);
  }

  const removeQuantity = () => {
    if (quantity === 1) return;
    setQuantity(state => state - 1);
  }

  const addZeroAtTheEnd = (value: number): string => {
    const numberStr = value.toString();
    const stringSplitted = numberStr.split('.');
    
    if (stringSplitted[stringSplitted.length - 1].length === 1) {
      return stringSplitted[0] + ',' + stringSplitted[1].padEnd(2, '0')
    }
    return numberStr.replace('.', ',');
  }

  return (
    <CoffeeCardContainer>
      <CoffeeImage src={ imageUrl }></CoffeeImage>
      <BadgeGroup>
        { badges.map((badge, index) => (
          <Badge key={`${ badge + index }`}><span>{ badge }</span></Badge>
        )) }
      </BadgeGroup>
      <Title>{ title }</Title>
      <Description>{ description }</Description>
      <PurchaseGroup>
        <PriceGroup>
          <CurrencySymbol>R$</CurrencySymbol>
          <Price>{ addZeroAtTheEnd(price) }</Price>
        </PriceGroup>
        <AmountAndCartGroup>
          <AmountGroup>
            <AddAndRemoveButton onClick={ removeQuantity }><Minus color={ defaultTheme["purple"] } weight="bold" /></AddAndRemoveButton>
            <AmountValue>{ quantity }</AmountValue>
            <AddAndRemoveButton onClick={ addQuantity }><Plus color={ defaultTheme["purple"] } weight="bold"/></AddAndRemoveButton>
          </AmountGroup>
          <AddToCartButton onClick={ () => addNewCoffeeToCart({ ...newCoffee, quantity }) }><ShoppingCart weight="fill" color="#FFFFFF" size={ 22 }/></AddToCartButton>
        </AmountAndCartGroup>
      </PurchaseGroup>
    </CoffeeCardContainer>
  )
}
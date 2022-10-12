import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Coffee } from "../../reducers/reducer";
import { defaultTheme } from "../../styles/themes/default";
import { addZeroAtTheEnd } from "../../utils";
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
  const { addNewCoffeeToCart, updateQuantity } = useContext(CartContext);

  const addQuantity = () => {
    setQuantity(state => state + 1);
  }

  const removeQuantity = () => {
    if (quantity === 1) return;
    setQuantity(state => state - 1);
  }

  const handleAddCoffeeToCart = () => {
    console.log('called handle add coffee function!')
    addNewCoffeeToCart({ ...newCoffee, quantity });
    updateQuantity();
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
          <AddToCartButton onClick={ handleAddCoffeeToCart }><ShoppingCart weight="fill" color="#FFFFFF" size={ 22 }/></AddToCartButton>
        </AmountAndCartGroup>
      </PurchaseGroup>
    </CoffeeCardContainer>
  )
}
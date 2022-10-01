import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import { Counter, Cart, HeaderContainer, HeaderContent, City, RightNavButtons } from './styles';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={coffeeDeliveryLogo} alt='Coffee Delivery Logo '/>
        <RightNavButtons>
          <City>
            <MapPin color={defaultTheme['purple']} weight='fill' size={22}/>
            Porto Alegre, RS
          </City>
          <Cart>
            <ShoppingCart color={defaultTheme['yellow-dark']} weight='fill' size={22}/>
            <Counter />
          </Cart>
        </RightNavButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import { Link } from 'react-router-dom';
import { 
  Counter,
  Cart,
  HeaderContainer,
  HeaderContent,
  City,
  RightNavButtons 
} from './styles';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img src={ coffeeDeliveryLogo } alt='Coffee Delivery Logo '/>
        </Link>
        <RightNavButtons>
          <City>
            <MapPin color={ defaultTheme['purple'] } weight='fill' size={ 22 }/>
            Porto Alegre, RS
          </City>
          <Link to={'/checkout'}>
            <Cart>
              <ShoppingCart color={ defaultTheme['yellow-dark'] } weight='fill' size={ 22 }/>
              <Counter />
            </Cart>
          </Link>
        </RightNavButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}
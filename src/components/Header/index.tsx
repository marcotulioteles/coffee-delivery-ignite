
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
import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cart } = useContext(CartContext);

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
              { cart?.length > 0 && <Counter>{ cart?.length }</Counter> }
            </Cart>
          </Link>
        </RightNavButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}
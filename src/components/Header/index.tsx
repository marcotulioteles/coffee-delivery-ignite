import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import * as PopoverPrimitive from '@radix-ui/react-popover';
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
import { PopoverContent } from '../PopoverContent';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useGeolocation } from '../../hooks/useGeolocation';

export function Header() {
  const { cart } = useContext(CartContext);
  const { width: windowWidth } = useWindowSize();
  const location = useGeolocation();

  useEffect(() => {
    console.log('window width: ', windowWidth)
  }, [windowWidth]);

  useEffect(() => {
    console.log('Location: ', location)
  }, [location]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img src={coffeeDeliveryLogo} alt='Coffee Delivery Logo ' />
        </Link>
        <RightNavButtons>
          {windowWidth && windowWidth > 375 ? (
            <City>
              <MapPin color={defaultTheme['purple']} weight='fill' size={22} />
              <span>Porto Alegre, RS</span>
            </City>
          ) : (
            <PopoverPrimitive.Root>
              <PopoverPrimitive.Trigger style={{ border: 'none', background: 'transparent' }}>
                <City>
                  <MapPin color={defaultTheme['purple']} weight='fill' size={22} />
                  <span>Porto Alegre, RS</span>
                </City>
              </PopoverPrimitive.Trigger>
              <PopoverContent sideOffset={5}>
                <span>Porto Alegre, RS</span>
              </PopoverContent>
            </PopoverPrimitive.Root>
          )}
          <Link to={'/checkout'}>
            <Cart>
              <ShoppingCart color={defaultTheme['yellow-dark']} weight='fill' size={22} />
              {cart?.length > 0 && <Counter>{cart?.length}</Counter>}
            </Cart>
          </Link>
        </RightNavButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}
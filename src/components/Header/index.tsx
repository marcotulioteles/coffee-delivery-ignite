import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';
import { Counter, Cart, HeaderContainer, HeaderContent, City, RightNavButtons } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={coffeeDeliveryLogo} alt='Coffee Delivery Logo '/>
        <RightNavButtons>
          <City>
            Porto Alegre, RS
          </City>
          <Cart>
            A
            <Counter />
          </Cart>
        </RightNavButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}
import * as PopoverPrimitive from '@radix-ui/react-popover'

import styled from 'styled-components'

export const StyledContent = styled(PopoverPrimitive.Content)`
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 16px;
  line-height: 1.3;
  color: ${ props => props.theme.purple };
  background-color: ${ props => props.theme['base-background'] };
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`

export const StyledArrow = styled(PopoverPrimitive.Arrow)`
  fill: ${ props => props.theme['base-background'] }
`;
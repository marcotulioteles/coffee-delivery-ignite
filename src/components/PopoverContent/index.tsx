import * as PopoverPrimitive from '@radix-ui/react-popover'
import { ReactNode } from 'react'
import { StyledArrow, StyledContent } from './styles'

interface PopoverContentProps extends PopoverPrimitive.PopoverContentProps {
  children: ReactNode
}

export function PopoverContent({ children, ...rest }: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...rest}>
        {children}
        <StyledArrow />
      </StyledContent>
    </PopoverPrimitive.Portal>
  )
}
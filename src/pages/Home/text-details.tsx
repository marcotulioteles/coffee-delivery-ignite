import { ShoppingCart, Package, Coffee, Timer } from 'phosphor-react';
import { defaultTheme } from '../../styles/themes/default';

export const textDetails = [
  {
    text: 'Compra simples e segura',
    icon: <ShoppingCart size={16} color='#FFFFFF' weight="fill" />,
    color: defaultTheme['yellow-dark']
  },
  {
    text: 'Embalagem mantém o café intacto',
    icon: <Package size={16} color='#FFFFFF' weight="fill" />,
    color: defaultTheme['base-text']
  },
  {
    text: 'Entrega rápida e rastreada',
    icon: <Timer size={16} color='#FFFFFF' weight="fill" />,
    color: defaultTheme['yellow']
  },
  {
    text: 'O café chega fresquinho até você',
    icon: <Coffee size={16} color='#FFFFFF' weight="fill" />,
    color: defaultTheme['purple']
  },
]
import traditionalCoffeeImg from '../../assets/expresso-tradicional.png'
import americanoCoffeeImg from '../../assets/expresso-americano.png'
import cremosoCoffeeImg from '../../assets/expresso-cremoso.png'
import geladoCoffeeImg from '../../assets/expresso-gelado.png'
import comLeiteCoffeeImg from '../../assets/cafe-com-leite.png'
import latteCoffeeImg from '../../assets/latte.png'
import capuccinoCoffeeImg from '../../assets/capuccino.png'
import macchiatoCoffeeImg from '../../assets/macchiato.png'
import mocaccinoCoffeeImg from '../../assets/mocaccino.png'
import chocolateQuenteCoffeeImg from '../../assets/chocolate-quente.png'
import cubanoCoffeeImg from '../../assets/cubano.png'
import havaianoCoffeeImg from '../../assets/havaiano.png'
import arabeCoffeeImg from '../../assets/arabe.png'
import irlandesCoffeeImg from '../../assets/irlandes.png'

export const coffeeOptions = [
  {
    id: 'coffee01',
    imageUrl: traditionalCoffeeImg,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    badges: ['tradicional'],
    quantity: 0
  },
  {
    id: 'coffee02',
    imageUrl: americanoCoffeeImg,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    badges: ['tradicional'],
    quantity: 0
  },
  {
    id: 'coffee03',
    imageUrl: cremosoCoffeeImg,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    badges: ['tradicional'],
    quantity: 0
  },
  {
    id: 'coffee04',
    imageUrl: geladoCoffeeImg,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    badges: ['tradicional', 'gelado'],
    quantity: 0
  },
  {
    id: 'coffee05',
    imageUrl: comLeiteCoffeeImg,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    badges: ['tradicional', 'com leite'],
    quantity: 0
  },
  {
    id: 'coffee06',
    imageUrl: latteCoffeeImg,
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    badges: ['tradicional', 'com leite'],
    quantity: 0
  },
  {
    id: 'coffee07',
    imageUrl: capuccinoCoffeeImg,
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    badges: ['tradicional', 'com leite'],
    quantity: 0
  },
  {
    id: 'coffee08',
    imageUrl: macchiatoCoffeeImg,
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    badges: ['tradicional', 'com leite'],
    quantity: 0
  },
  {
    id: 'coffee09',
    imageUrl: mocaccinoCoffeeImg,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    badges: ['tradicional', 'com leite'],
    quantity: 0
  },
  {
    id: 'coffee10',
    imageUrl: chocolateQuenteCoffeeImg,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    badges: ['tradicional', 'com leite'],
    quantity: 0
  },
  {
    id: 'coffee11',
    imageUrl: cubanoCoffeeImg,
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    badges: ['especial', 'alcoólico', 'gelado'],
    quantity: 0
  },
  {
    id: 'coffee12',
    imageUrl: havaianoCoffeeImg,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    badges: ['especial'],
    quantity: 0
  },
  {
    id: 'coffee13',
    imageUrl: arabeCoffeeImg,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    badges: ['especial'],
    quantity: 0
  },
  {
    id: 'coffee14',
    imageUrl: irlandesCoffeeImg,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    badges: ['especial', 'alcoólico'],
    quantity: 0
  },
]
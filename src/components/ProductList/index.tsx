import Product from '../Product'
import { List, SectionContainer, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ title, background }: Props) => {
  return (
    <SectionContainer background={background}>
      <div className="container">
        <Title>{title}</Title>

        <List>
          <li>
            <Product
              image="//placehold.it/222x250"
              title="Nome do game"
              category="Ação"
              system="PS4 & PS5"
              description="Descriçao"
              infos={['R$ 100,50', '-10%']}
            />
          </li>
          <li>
            <Product
              image="//placehold.it/222x250"
              title="Nome do game"
              category="Aventura"
              system="Windows"
              description="Descriçao"
              infos={['R$ 99,90', '-10%']}
            />
          </li>
          <li>
            <Product
              image="//placehold.it/222x250"
              title="Nome do game"
              category="RPG"
              system="Linux"
              description="Descriçao"
              infos={['R$ 190,50', '-10%']}
            />
          </li>
          <li>
            <Product
              image="//placehold.it/222x250"
              title="Nome do game"
              category="Ação"
              system="Xbox X"
              description="Descriçao"
              infos={['R$ 155,40', '-10%']}
            />
          </li>
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductList

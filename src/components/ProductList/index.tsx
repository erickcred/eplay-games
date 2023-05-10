import Game from '../../models/Game'
import Product from '../Product'
import { List, SectionContainer, Title } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => {
  return (
    <SectionContainer background={background}>
      <div className="container">
        <Title>{title}</Title>

        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                image={game.image}
                title={game.title}
                category={game.category}
                system={game.system}
                description={game.description}
                infos={game.infos}
              />
            </li>
          ))}
        </List>
      </div>
    </SectionContainer>
  )
}

export default ProductList

import { List } from './styles'
import Game from '../../models/Game'
import Product from '../Product'
import Section from '../Section'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductList = ({ title, background, games }: Props) => {
  return (
    <Section title={title} background={background}>
      <div className="container">
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
    </Section>
  )
}

export default ProductList

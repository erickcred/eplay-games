import { BannerContainer, Infos } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductList'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.old !== null && (
              <>
                <span>De {formataPreco(game.prices.old)}</span>
              </>
            )}
            {game.prices.current && (
              <>
                Por <>{formataPreco(game.prices.current)}</>
              </>
            )}
          </p>

          {game.prices.current && (
            <Button
              type="button"
              variant="primary"
              title="Clique aqui para adicionar ao carrinho"
              onClick={() => console.log('add cart')}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </BannerContainer>
  )
}

export default Hero

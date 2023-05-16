import { ImageBanner, Precos, Titulo } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { formataPreco } from '../ProductList'

import { useGetFeaturedGameQuery } from '../../services/api'

export const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <ImageBanner style={{ backgroundImage: `url(${game?.media.cover}` }}>
        <div className="container">
          <Tag size="big">Destaque do dia</Tag>
          <div>
            <Titulo>{game.name}</Titulo>

            <Precos>
              De <span>{formataPreco(game.prices.old)}</span>
              <br /> por apenas {formataPreco(game.prices.current)}
            </Precos>
          </div>

          <Button
            type="link"
            title="Clique aqui para aproveitar a oferta"
            to={`/product/${game.id}`}
          >
            Aproveitar
          </Button>
        </div>
      </ImageBanner>
    </>
  )
}

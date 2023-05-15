import { useState, useEffect } from 'react'

import { ImageBanner, Precos, Titulo } from './styles'

import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductList'

export const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
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

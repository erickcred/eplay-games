import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Hero game={game} />

      <Section background="black" title="Sobre o jogo">
        <p>{game?.description}</p>
      </Section>

      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma: </b>
          {game?.details.system}
          <br />
          <b>Desenvolvedor: </b>
          {game?.details.developer}
          <br />
          <b>Editora: </b>
          {game?.details.publisher}
          <br />
          <b>Idiomas: </b>O jogo oferece suporte a deiversos idiomas, incluindo{' '}
          {game?.details.languages.join(', ')}
          jogo.
          <br />
        </p>
      </Section>

      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </>
  )
}

export default Product

import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />

      <Section background="black" title="Sobre o jogo">
        <p>
          Hogwarts Legacy é um RPG de ação e mundo aberto ambientado no mundo
          apresentado nos livros de Harry Potter. Agora você pode assumir o
          controle da ação e criar sua própria aventura. Descubra a sensação de
          viver em Hogwarts enquanto faz aliados, luta contra bruxos das trevas
          e, por fim, decide o destino do mundo bruxo. Seu legado é o que você
          faz dele.
        </p>
      </Section>

      <Section background="gray" title="Mais detalhes">
        <p>
          <b>Plataforma: </b>PlayStation 5 <br />
          <b>Desenvolvedor: </b>Avalanche Software <br />
          <b>Editora: </b>Portkey GAmes, subsidiária da Waner Bors, Interactive
          Entretarinment <br />
          <b>Idiomas: </b>O jogo oferece suporte a deiversos idiomas, incluindo
          inglês, francês, alemao, italiano, português, entre outros. As opções
          de áudio e legendas pode ser ajustadas nas configurações do jogo.
          <br />
        </p>
      </Section>

      <Gallery name="Jogo teste" defaultCover={residentEvil} />
    </>
  )
}

export default Product

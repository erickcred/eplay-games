import { ImageBanner, Precos, Titulo } from './styles'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'
import Button from '../Button'

export const Banner = () => {
  return (
    <>
      <ImageBanner style={{ backgroundImage: `url(${bannerImg}` }}>
        <div className="container">
          <Tag size="big">Destaque do dia</Tag>
          <div>
            <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>

            <Precos>
              De <span>R$ 250,00</span>
              <br /> por apenas R$ 99,90
            </Precos>
          </div>
          <Button
            type="link"
            title="Clique aqui para aproveitar a oferta"
            to="/produto"
          >
            Aproveitar
          </Button>
        </div>
      </ImageBanner>
    </>
  )
}

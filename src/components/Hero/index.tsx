import { BannerContainer, Infos } from './styles'

import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <div>
          <Tag>RPG</Tag>
          <Tag>PS5</Tag>
        </div>

        <Infos>
          <h2>Hogwarts Legacy</h2>
          <p>
            <span>De R$ 250,00</span>
            por R$ 190,00
          </p>
          <Button
            type="button"
            variant="primary"
            title="Clique aqui para adicionar ao carrinho"
            onClick={() => console.log('add cart')}
          >
            Adicionar ao carrinho
          </Button>
        </Infos>
      </div>
    </BannerContainer>
  )
}

export default Hero

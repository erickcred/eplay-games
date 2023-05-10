import { Banner } from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/Game'

import diablo from '../../assets/images/diablo.png'
import resident from '../../assets/images/resident.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    image: diablo,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Wndows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    image: resident,
    title: 'REsident Eveil 4',
    category: 'Ação',
    system: 'Xbox X',
    description:
      'Resident Eveil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['5%', 'R$ 250,00']
  },
  {
    id: 3,
    image: star_wars,
    title: 'Star Wars Jedi Suvivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn',
    infos: ['15%', 'R$ 250,00']
  },
  {
    id: 4,
    image: zelda,
    title: 'The Legend of Zelda',
    category: 'RPG',
    system: 'Nintendo Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda...',
    infos: ['10%', 'R$ 250,00']
  }
]

const lancamentos: Game[] = [
  {
    id: 1,
    image: resident,
    title: 'REsident Eveil 4',
    category: 'Ação',
    system: '',
    description:
      'Resident Eveil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    infos: ['em breve']
  },
  {
    id: 2,
    image: diablo,
    title: 'Diablo 4',
    category: 'RPG',
    system: 'Wndows',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entretainment',
    infos: ['em breve']
  },
  {
    id: 3,
    image: zelda,
    title: 'The Legend of Zelda',
    category: 'RPG',
    system: 'Nitendo Switch',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda...',
    infos: ['em breve']
  },
  {
    id: 4,
    image: star_wars,
    title: 'Star Wars Jedi Suvivor',
    category: 'Aventura',
    system: 'Windows',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn',
    infos: ['em breve']
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <ProductList title="Promoções" background="gray" games={promocoes} />
      <ProductList title="Em breve" background="black" games={lancamentos} />
    </>
  )
}

export default Home

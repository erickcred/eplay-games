import { useState, useEffect } from 'react'

import ProductList from '../../components/ProductList'

import { Game } from '../Home'

const Categories = () => {
  const [gameAcao, setGameAcao] = useState<Game[]>([])
  const [gameEsporte, setGameEsportes] = useState<Game[]>([])
  const [gameSimulacao, setGameSimulacao] = useState<Game[]>([])
  const [gameLuta, setGameLuta] = useState<Game[]>([])
  const [gameRpg, setGameRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGameAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGameEsportes(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGameSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGameLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGameRpg(res))
  }, [])

  return (
    <>
      <ProductList title="Açao" background="black" games={gameAcao} />
      <ProductList title="Esportes" background="gray" games={gameEsporte} />
      <ProductList title="Simulação" background="black" games={gameSimulacao} />
      <ProductList title="Luta" background="gray" games={gameLuta} />
      <ProductList title="RPG" background="black" games={gameRpg} />
    </>
  )
}

export default Categories

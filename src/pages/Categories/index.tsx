import ProductList from '../../components/ProductList'

import {
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductList
          id="action"
          title="Açao"
          background="black"
          games={actionGames}
        />
        <ProductList
          id="sport"
          title="Esportes"
          background="gray"
          games={sportGames}
        />
        <ProductList
          id="simulation"
          title="Simulação"
          background="black"
          games={simulationGames}
        />
        <ProductList
          id="fight"
          title="Luta"
          background="gray"
          games={fightGames}
        />
        <ProductList id="rpg" title="RPG" background="black" games={rpgGames} />
      </>
    )
  }

  return <h4>Carretando!...</h4>
}

export default Categories

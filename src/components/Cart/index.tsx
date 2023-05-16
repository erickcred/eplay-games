import { useSelector, useDispatch } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'
import {
  CartContainer,
  CartItem,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductList'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeGameCart = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}></Overlay>

      <Sidebar>
        <ul>
          {items.map((game) => (
            <CartItem key={game.id}>
              <img src={game.media.thumbnail} alt={game.name} />

              <div>
                <h3>{game.name}</h3>
                <Tag>{game.details.category}</Tag>
                <Tag>{game.details.system}</Tag>
                <span>{formataPreco(game.prices.current)}</span>
              </div>
              <button
                type="button"
                onClick={() => removeGameCart(game.id)}
              ></button>
            </CartItem>
          ))}
        </ul>

        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}
          <span>em até 6x sem juros</span>
        </Prices>

        <Button type="button" title="Clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart

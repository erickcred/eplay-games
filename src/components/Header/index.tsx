import { Link, Routes } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => {
  return (
    <>
      <S.HeaderBar>
        <div>
          <Link
            to="/"
            style={{ padding: '0px', margin: '0px', display: 'inline-block' }}
          >
            <img src={logo} alt="EPLAY - games Logo" />
          </Link>

          <nav>
            <S.Links>
              <S.LinkItem>
                <Link to="/categorias">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link to="#">Novidades</Link>
              </S.LinkItem>
              <S.LinkItem>
                <Link to="#">Promoções</Link>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>

        <S.LinkCart href="#">
          0 - produto(s)
          <img src={carrinho} alt="Carrinho de Compra" />
        </S.LinkCart>
      </S.HeaderBar>
    </>
  )
}

export default Header

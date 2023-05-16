import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/stylres'

import fechar from '../../assets/images/fechar.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Sidebar = styled.aside`
  background-color: ${cores.cinza};
  padding: 40px 16px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  border-bottom: 1px solid ${cores.cinzaClaro};
  display: flex;
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${cores.branco};
    font-size: 16px;
    font-weight: bold;
    width: 210px;
  }

  span {
    color: ${cores.branco};
    font-size: 14px;
    font-weight: bold;
    display: block;
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-color: transparent;
    background-image: url(${fechar});
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;

    width: 16px;
    height: 16px;

    position: absolute;
    top: 8px;
    right: 0;
  }
`

export const Quantity = styled.p`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 16px;
`

export const Prices = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 24px;

  span {
    font-size: 12px;
    color: ${cores.cinzaClaro};
    display: block;
  }
`

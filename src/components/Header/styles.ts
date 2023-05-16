import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  a {
    color: ${cores.branco};
    font-weight: bold;
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  list-style: none;
  margin-right: 10px;
  padding: 6px;
`

export const CartButton = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`

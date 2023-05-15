import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${cores.cinza};
  border-radius: 8px;
  color: ${cores.branco};
  display: block;
  padding: 8px;
  position: relative;
  height: 100%;
  text-decoration: none;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Title = styled.h3`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  display: block;
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

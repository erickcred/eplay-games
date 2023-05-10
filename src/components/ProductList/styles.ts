import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from './'
import { Card } from '../Product/styles'

export const SectionContainer = styled.section<Omit<Props, 'title'>>`
  background-color: ${(props) =>
    props.background === 'black' ? cores.preto : cores.cinza};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? cores.cinza : cores.preto};
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  margin-top: 40px;
  list-style: none;
`

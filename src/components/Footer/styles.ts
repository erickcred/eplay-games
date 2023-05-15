import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  font-size: 14px;
  padding: 32px 0;
`

export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
`

export const Links = styled.ul`
  font-weight: 600;
  display: flex;
  margin-top: 16px;

  @media (max-width: 560px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 16px;
  }
`

export const LinkItem = styled(Link)`
  color: ${cores.cinzaClaro};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

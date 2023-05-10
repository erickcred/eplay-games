import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid ${cores.branco};
  border-radius: 8px;
  color: ${cores.branco};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`

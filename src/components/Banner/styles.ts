import styled from 'styled-components'
import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'

export const ImageBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  font-weight: bold;
  width: 100%;
  height: 560px;

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

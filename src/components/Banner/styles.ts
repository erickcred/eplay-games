import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const ImageBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  font-weight: bold;
  width: 100%;
  height: 560px;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }

  .container {
    padding-top: 340px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
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

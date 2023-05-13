import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const BannerContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: block;
  width: 100%;
  height: 480px;
  position: relative;
  padding-top: 16px;

  ::after {
    background-color: #000;
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.56;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    z-index: 1;
    position: relative;
  }
`

export const Infos = styled.div`
  background-color: ${cores.preto};
  font-weight: bold;
  max-width: 290px;
  padding: 16px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`

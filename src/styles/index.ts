import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eeeeee',
  preto: '#111111',
  cinza: '#333333',
  verde: '#10ac94'
}

export const GlobalCss = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${cores.preto};
    color: ${cores.branco};
    margin-top: 40px;
  }

`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`

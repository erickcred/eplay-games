import styled from 'styled-components'

export const ImageBanner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  font-weight: bold;
  width: 100%;
  height: 560px;
  position: relative;
  padding-top: 340px;
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

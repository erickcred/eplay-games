import styled from 'styled-components'
import { cores } from '../../styles'

export const Items = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  list-style: none;
  position: relative;
  cursor: pointer;

  > img {
    border: 2px solid ${cores.branco};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    object-fit: cover;
    -o-object-fit: cover;
    object-position: center;
    -o-object-position: center;

    @media (max-width: 768px) {
    }
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  width: 95%;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    span {
      cursor: pointer;
    }
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`

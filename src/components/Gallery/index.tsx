import { useState } from 'react'

import Section from '../Section'
import { GalleryItem } from '../../pages/Home'

import { Action, Items, Item, Modal, ModalContent } from './styles'

import playerIcon from '../../assets/images/play.png'
import zoomIcon from '../../assets/images/zoom.png'
import closeIcon from '../../assets/images/fechar.png'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  items.map((item) => console.log(item))

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoomIcon

    return playerIcon
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section background="black" title="Galeria">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({ isVisible: true, type: media.type, url: media.url })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />

              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximiar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>

      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>

            <span onClick={closeModal}>
              <img src={closeIcon} alt="Icone de fechar" />
            </span>
          </header>

          {modal.type === 'image' ? (
            <img src={modal.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modal.url}></iframe>
          )}
        </ModalContent>

        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery

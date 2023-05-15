import Tag from '../Tag'
import { Card, Description, Infos, Title } from './styles'

type Props = {
  id: number
  image: string
  title: string
  category: string
  system: string
  description: string
  infos: string[]
}

const Product = ({
  id,
  image,
  title,
  category,
  system,
  description,
  infos
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 95) {
      return description.slice(0, 92).concat('...')
    }

    return description
  }

  return (
    <Card to={`/product/${id}`}>
      <img src={image} alt={title} />

      <Infos>
        {infos.map((info) => (
          <Tag key={info + title}>{info}</Tag>
        ))}
      </Infos>

      <Title>{title}</Title>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>

      <Description>{getDescription(description)}</Description>
    </Card>
  )
}

export default Product

import { SectionContainer, Title } from './styles'

export type Props = {
  id?: string
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children, id }: Props) => {
  return (
    <SectionContainer id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </SectionContainer>
  )
}

export default Section

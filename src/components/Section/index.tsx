import { SectionContainer, Title } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <SectionContainer background={background}>
      <div className="container">
        <Title>{title}</Title>
        {children}
      </div>
    </SectionContainer>
  )
}

export default Section

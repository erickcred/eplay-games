import {
  Container,
  SectionTitle,
  Links,
  LinkItem,
  FooterSection
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <LinkItem to="/">RPG</LinkItem>
            <LinkItem to="/">Ação</LinkItem>
            <LinkItem to="/">Aventura</LinkItem>
            <LinkItem to="/">Esportes</LinkItem>
            <LinkItem to="/">Simulação</LinkItem>
            <LinkItem to="/">Estratégia</LinkItem>
            <LinkItem to="/">FPS</LinkItem>
          </Links>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <LinkItem to="/">Novidades</LinkItem>
            <LinkItem to="/">Promoções</LinkItem>
            <LinkItem to="/">Em breve</LinkItem>
          </Links>
        </FooterSection>

        <p>2020 à {currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer

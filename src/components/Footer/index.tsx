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
            <LinkItem to="/categories#rpg">RPG</LinkItem>
            <LinkItem to="/categories#action">Ação</LinkItem>
            <LinkItem to="/categories#sport">Esportes</LinkItem>
            <LinkItem to="/categories#simulation">Simulação</LinkItem>
            <LinkItem to="/categories#fight">Luta</LinkItem>
          </Links>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Acesso rápido</SectionTitle>
          <Links>
            <LinkItem to="/#on-sale">Promoções</LinkItem>
            <LinkItem to="/#coming-soon">Em breve</LinkItem>
          </Links>
        </FooterSection>

        <p>2020 à {currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}

export default Footer

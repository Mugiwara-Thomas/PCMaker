import { Container, Title, Content, Subtitle, Subcontent } from "./style";

const SiteInfo = () => {
    return (
      <Container>
        <Content>
            <Subtitle>Bem-vindo ao</Subtitle>
            <Title>
                <span className="span">PCM</span>
                <span className="span2">aker</span></Title>
        </Content>
        <Subcontent>
            Aqui no PCMaker, nós entendemos que cada jogador tem suas próprias necessidades e preferências. 
            É por isso que criamos uma plataforma única onde você pode escolher os jogos que deseja jogar, 
            e nós cuidaremos do resto!
        </Subcontent>        
      </Container>
    );
  };
  
export default SiteInfo;
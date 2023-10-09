import { Footer, ContactInfo, SocialMedia } from './style';

function FooterBar () {
    return (
        <>
            <Footer>
                <ContactInfo>
                    <span className="topic"><b>Institucional</b></span>
                    <span className="box">Quem somo nós?</span>
                    <span className="box">Fale conosco</span>
                    <span className="box">Políticas de privacidade</span>
                </ContactInfo>
                <ContactInfo>
                    <span className="topic"><b>Dúvidas</b></span>
                    <span className="box">Como usar</span>
                    <span className="box">Esqueci minha senha</span>
                </ContactInfo>
                <SocialMedia>
                    <p className="box">Siga-nos nas redes sociais: </p>
                    <a className="box" href="">
                        <img src="src\assets\icon _facebook.svg" alt="Logo do facebook" />
                    </a>
                    <a className="box" href="">
                        <img src="src\assets\icon _instagram.svg" alt="Logo do instagram" />
                    </a>
                    <a className="box" href="">
                        <img src="src\assets\icon _twitch.svg" alt="Logo da twitch" />
                    </a>
                    <a className="box" href="">
                        <img src="src\assets\icon _youtube.svg" alt="Logo do youtube" />
                    </a>
                </SocialMedia>
            </Footer>
        </>
    );
}

export default FooterBar;
import React from 'react';
import { Footer, ContactInfo, SocialMedia } from './style';

function FooterBar () {
    return (
        <>
            <Footer>
                <ContactInfo>
                    <span class="topic"><b>Institucional</b></span>
                    <span class="box">Quem somo nós?</span>
                    <span class="box">Fale conosco</span>
                    <span class="box">Políticas de privacidade</span>
                </ContactInfo>
                <ContactInfo>
                    <span class="topic"><b>Dúvidas</b></span>
                    <span class="box">Como usar</span>
                    <span class="box">Esqueci minha senha</span>
                </ContactInfo>
                <SocialMedia>
                    <p class="box">Siga-nos nas redes sociais: </p>
                    <a class="box" href="">
                        <img src="src\assets\icon _facebook.svg" alt="Logo do facebook" />
                    </a>
                    <a class="box" href="">
                        <img src="src\assets\icon _instagram.svg" alt="Logo do instagram" />
                    </a>
                    <a class="box" href="">
                        <img src="src\assets\icon _twitch.svg" alt="Logo da twitch" />
                    </a>
                    <a class="box" href="">
                        <img src="src\assets\icon _youtube.svg" alt="Logo do youtube" />
                    </a>
                </SocialMedia>
            </Footer>
        </>
    );
}

export default FooterBar;
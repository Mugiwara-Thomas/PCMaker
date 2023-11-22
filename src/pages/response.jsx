import React from "react";
import Nav from "../components/Navbar";
import GlobalStyle from "../styles/GlobalStyle";
import FooterBar from "../components/Footer";
import Painel from "../components/PainelGames";
import Card from "../components/Card";
import {BoxViewOver, BoxViewUnder} from "../components/BoxView";
import { ButtonRequest } from "../components/Button";
// import Accordion from '../components/Accordion';

// import { useEffect, useState } from "react";
import requestJogos from "../functions/requestGames";

function Response() {



  return (
    <>
      <GlobalStyle />
      <Nav  />
      <BoxViewOver>
        {/* <Accordion></Accordion> */}
        <ButtonRequest texto="teste" funcao={requestJogos}></ButtonRequest>
      </BoxViewOver>
      <BoxViewUnder>
        <Painel >
          <Card endereco={"https://img.ibxk.com.br/2018/05/03/red-dead-03201115279005.jpg?ims=328x"}/>
          <Card endereco={"https://m.media-amazon.com/images/I/91Aa9ZIAaoL._AC_UF1000,1000_QL80_.jpg"}/>
          <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
          <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
          <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
          <Card endereco={"https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg"}/>
        </Painel>
      </BoxViewUnder>
      <FooterBar />
    </>
  );
}

export default Response;

import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Iframe from "react-iframe";

// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";

import {
  Container,
  Header,
  Destaque,
  Sobre,
  LocalEvent,
  Palestrantes,
  SymplaContainer,
  Contato,
  Footer
} from "./styles";

import { Link } from "react-router-dom";

import MapContainer from "../../components/Map";

import logo from "../../assets/img/Logo4.png";

import sobre from "../../assets/img/sobre.png";
import onde from "../../assets/img/onde.png";
import publico from "../../assets/img/publico.png";

import palestrante1 from "../../assets/img/palestrante1.jpg";
import palestrante2 from "../../assets/img/palestrante2.jpg";
import palestrante3 from "../../assets/img/palestrante3.jpg";

import seguranca from "../../assets/img/seguranca.png";
import parcelamento from "../../assets/img/parcelamento.png";
import formasPagamento from "../../assets/img/formas-pagamento.png";

import facebookLogo from "../../assets/img/face-logo.png";
import instagramLogo from "../../assets/img/instagram.png";
import linkedinLogo from "../../assets/img/linkedin.png";

class Main extends Component {
  componentDidMount() {}
  render() {
    return (
      <Container>
        <Header className="navbar navbar-expand-md navbar-light box-shadow container">
          <Link to="/" className="navbar-brand">
            <img className="img-fluid" src={logo} alt="" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Abrir Navegação"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <AnchorLink className="nav-link text-white" href="#sobre">
                  O Evento <span className="sr-only">(current)</span>
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-white" href="#palestrante">
                  Palestrante
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-white" href="#local">
                  Localização
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-white" href="#sympla">
                  Ingressos
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link text-white" href="#contato">
                  Contato
                </AnchorLink>
              </li>
            </ul>
          </div>
        </Header>
        <Destaque>
          <h1>Tornando as vendas mais eficientes</h1>
        </Destaque>
        <Sobre id="sobre" className="container">
          <div className="action-area-container">
            <div className="action-area">
              <a
                className="btn-sobre btn-sobre--blue"
                href="https://www.sympla.com.br/sales-talk-tornando-as-vendas-mais-eficientes__564847"
              >
                Eu quero ir
              </a>
              {/* <button className="btn-sobre btn-sobre--gray">
                Quero ser parceiro{" "}
              </button> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div className="sobre-content">
                <img src={sobre} alt="sobre" />
                <strong> sobre o evento</strong>
                <p>
                  Você quer tornar seus negócios ainda melhores? Precisa
                  melhorar suas skills em vendas? Fazer networking e expandir
                  sua rede? O Sales Talk traz para você um painel incrível com
                  muita gente boa para tornar suas vendas mais eficientes. Vem
                  com a gente e seja o próximo case de sucesso!
                </p>
              </div>
            </div>
            <div className="col-md-4  col-sm-12">
              <div className="sobre-content">
                <img src={onde} alt="sobre" />
                <strong> quando e onde </strong>
                <div className="sobre-infobox">
                  <strong>27/06</strong>
                  <p>às</p>
                </div>
                <div className="sobre-infobox">
                  <strong>19:30</strong>
                  <p>na</p>
                </div>
                <div className="sobre-infobox">
                  <strong>Decorati</strong>
                  <p>R. Francisco Leitão, 116 - Pinheiros</p>
                </div>
              </div>
            </div>
            <div className="col-md-4  col-sm-12">
              <div className="sobre-content">
                <img src={publico} alt="sobre" />
                <strong> público-alvo</strong>
                <p>
                  Profissionais jovens da área de vendas e marketing e demais
                  interessados sobre o assunto. Pessoas com desejo de
                  crescimento acelerado para si e para sua empresa.
                </p>
              </div>
            </div>
          </div>
        </Sobre>
        <Palestrantes id="palestrante">
          <div className="action-area-container">
            <div className="action-area">
              <a
                className="btn-sobre btn-sobre--blue"
                href="https://www.sympla.com.br/sales-talk-tornando-as-vendas-mais-eficientes__564847"
              >
                Eu quero ir
              </a>
              {/* <button className="btn-sobre btn-sobre--gray">
                Quero ser parceiro{" "}
              </button> */}
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <strong className="palestrante-titulo">Quem vai lá</strong>
                <p className="palestrante-subtitulo">
                  Viabilizamos os melhores profissionais do mercado que unificam
                  propósito, marketing e performance.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    />
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    />
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active  ">
                      <div className="carousel-item-box">
                        <div className="carousel-container-image">
                          <img
                            src={palestrante1}
                            className="rounded-circle"
                            alt="imagem-palestrante"
                          />
                        </div>
                        <div className="carousel-container-description">
                          <strong>Phelipe Xavier</strong>
                          <p>
                            Phelipe Xavier Responsável por cunha o termo
                            Marketing Científico e Cientista do Marketing no BR.
                            Mentor ACE+GOOGLE LAUNCHPAD para startups aceleradas
                            pela Braskem, Google e BTG Pactual. Professor do MBA
                            de Marketing Digital da Innovation &
                            Entrepreneurship Business School na Professor
                            convidado da Escola de Negócios Online - Sebrae SP.
                            Founder da Growth Labs, Laboratório que tem como
                            missão gerar um crescimento sustentável para o seu
                            negócio. Acredita que marketing e ciência andam
                            juntos.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="carousel-item-box">
                        <div className="carousel-container-image">
                          <img
                            src={palestrante2}
                            className="rounded-circle"
                            alt="imagem-palestrante"
                          />
                        </div>
                        <div className="carousel-container-description">
                          <strong>Isabela Borrelli</strong>
                          <p>
                            Isabela Borrelli é repórter com experiência no ramo
                            de startups e empreendedorismo. Trabalhou dois anos
                            na StartSe, período em que teve a oportunidade de ir
                            para o Vale do Silício e entrevistar grandes players
                            do ecossistema. Hoje é responsável pelos conteúdos
                            audiovisuais da Azulis, startup que traz ferramentas
                            e conteúdos focados para empreendedores.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="carousel-item-box">
                        <div className="carousel-container-image">
                          <img src={palestrante3} alt="imagem-palestrante" />
                        </div>
                        <div className="carousel-container-description">
                          <strong>Sandra Crespim</strong>
                          <p>
                            Sandra Crespim - gerente de Operações de Customer
                            Success na NOALVO tem por formação fotógrafia,
                            jornalismo, inbound, outbound marketing e MBA em
                            Marketing e Vendas. Começou como startupeira em 2016
                            passando por todos os setores da NOALVO acelerando
                            seu conhecimento e crescendo junto a empresa.
                            Especialista em técnicas de venda, como o Spin
                            Selling, e apaixonada pelo tema.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Palestrantes>
        <LocalEvent id="local" className="">
          <div className="local-header">
            <h3 className="text-center bold">LEGAL, ONDE?</h3>
            <p className="text-center">
              Decorati - R. Francisco Leitão, 116 - Pinheiros, São Paulo
            </p>
          </div>
          <MapContainer />
        </LocalEvent>
        <SymplaContainer id="sympla">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="iframe-sympla">
                  <Iframe
                    src="https://www.sympla.com.br/tickets-grid-widget?eid=564847&lang=pt"
                    width="630px"
                    height="430px"
                    frameBorder="0"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="description-sympla">
                  <img class="rounded" src={seguranca} alt="" />
                  <strong>Compra Segura</strong>
                  <img class="rounded" src={parcelamento} alt="" />
                  <strong>Parcelamento em x vezes</strong>
                  <img class="rounded" src={formasPagamento} alt="" />
                  <strong>Formas de Pagamento</strong>
                </div>
              </div>
            </div>
          </div>
        </SymplaContainer>
        <Contato id="contato">
          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <strong>Sobre a Empresa</strong>
              </div>
              <div className="col-md-4">
                <strong>Contato</strong>
              </div>
              <div className="col-md-4" />
            </div>
            <div className="row ">
              <div className="col-md-4">
                <p>
                  A Sales Talk é uma iniciativa de jovens empreendedores que
                  procuram apoiar o ecossistema de startups para que as áreas se
                  interelacionem e ajudem a passar proposta de valor,
                  catalizando vendas com integração de um CRM eficiente.
                </p>
              </div>
              <div className="col-md-4">
                <p>contato@salestalk.com.br 11 96198-7432</p>
              </div>
              <div className="col-md-4">
                <div className="social-media-area">
                  <a href="https://www.facebook.com/Sales-Talk-2213705662082166/">
                    <img src={facebookLogo} alt="facebook-logo" />
                  </a>
                  <a href="https://www.instagram.com/salestalk2.0/">
                    <img src={instagramLogo} alt="instagram-logo" />
                  </a>
                  <a href="https://www.linkedin.com/company/sales-talks/">
                    <img src={linkedinLogo} alt="linkedin-logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Contato>
        <Footer>Sales Talk - Todos os direitos reservados</Footer>
      </Container>
    );
  }
}

export default Main;

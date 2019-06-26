import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

import { Container, Header, Destaque } from "./styles";
import { Link } from "react-router-dom";

import MapContainer from "../../components/Map";

import logo from "../../assets/img/logo_sales_talk.png";

const Main = () => (
  <Container>
    <Header className="navbar navbar-expand-md navbar-light  fixed-top py-3 box-shadow">
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
            <Link className="nav-link" to="/">
              Quem somos <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Atendimento
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              O Evento
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Ingressos
            </Link>
          </li>
        </ul>
      </div>
    </Header>
    <Destaque />
    <section id="destaque" className="container-fluid">
      <div className="row">
        <div className="col-6">teste</div>
        <div className="col-6">teste</div>
      </div>
    </section>
    <section id="evento" className="container-fluid">
      o que é o evento
    </section>
  </Container>
);

export default Main;

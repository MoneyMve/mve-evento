import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "react";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h3 className="title">Sobre a empresa</h3>
            <p>
            Mais de 85 mil equipes no mundo todo.
             Inscreva-se no teste grátis de 14 dias. Preço simples.
              Integração e complementos. Imp/Exp dados simples. IU amigável. Tipos: Dicas de vendas gratuitas, Academia pipeline vendas, Modelo pipeline de vendas, Gerenc. pipeline vendas.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h3 className="title">Contato</h3>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Telefone</a>
                <p>(11)99999999</p>
              </li>
              <li className="list-unstyled">
                <a href="#!">Whatsapp</a>
                <p>(11)99999999</p>
              </li>
              <li className="list-unstyled">
                <a href="#!">Email</a>
                <p>MVN@outlook.com</p>
              </li>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/Sales-Talk-2213705662082166/">FaceBook</a>
                <a href="https://www.instagram.com/salestalk2.0/?hl=pt-br">instagram</a>
                <a href="https://www.linkedin.com/company/sales-talks/about/?viewAsMember=true">linkedin</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
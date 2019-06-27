import styled from "styled-components";
import bkgDestaqueImg from "../../assets/img/backgroundDetaque.png";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const Header = styled.header`
  border-width: 0px;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-top: -50px;
  h1 {
    line-height: 1;
  }
  img {
    width: 200px;
    height: auto;
  }
`;

export const Destaque = styled.section`
  height: 704px;
  margin-top: -210px;
  width: 100%;
  background: url(${bkgDestaqueImg}) center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    text-align: center;
    word-wrap: normal;
    width: 500px;
    font-size: 45px;
    font-weight: bolder;
  }
`;

export const Sobre = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .action-area-container {
    display: flex;
    width: 100%;
    justify-content: center;
    max-width: 960px;
    margin: -55px auto;
  }
  .action-area {
    display: flex;
    width: 100%;
    /* justify-content: space-between; */
    justify-content: center;
    .btn-sobre {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 369px;
      height: 84px;
      left: 183px;
      top: 659px;
      border-radius: 60px;
      border: none;
      color: #fff;
    }
    .btn-sobre--blue {
      background: #4d75b3;
    }
    .btn-sobre--gray {
      background: #696967;
    }
  }
  .sobre-content {
    margin: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sobre-infobox {
      margin: 3px 0;
      text-align: center;
    }
    img {
      height: 64px;
      width: auto;
    }

    strong {
      width: 171px;
      font-size: 36px;
      text-align: center;
      text-transform: capitalize;
      line-height: 1;
      margin: 10px 0;
    }
    p {
      text-align: center;
      font-size: 20px;
      margin-top: 10px;
    }
  }
`;

export const Palestrantes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #99ccff;
  height: 600px;
  .palestrante-titulo {
    font-weight: bold;
    font-size: 26px;
  }
  .palestrante-subtitulo {
    font-size: 18px;
    margin-bottom: 60px;
  }
  .action-area-container {
    display: flex;
    width: 100%;
    justify-content: center;
    max-width: 960px;
    margin: -120px auto;
  }
  .action-area {
    display: flex;
    width: 100%;
    justify-content: center;
    /* justify-content: space-between; */
    .btn-sobre {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 369px;
      height: 84px;
      left: 183px;
      top: 659px;
      border-radius: 60px;
      border: none;
      color: #fff;
    }
    .btn-sobre--blue {
      background: #4d75b3;
    }
    .btn-sobre--gray {
      background: #696967;
    }
  }

  .carousel-item-box {
    display: flex;
    justify-content: center;
    .carousel-container-image {
      width: 40%;
      display: flex;
      justify-content: center;

      img {
        height: 304px;
        width: 304px;
        border-radius: 50%;
      }
    }
    .carousel-container-description {
      width: 60%;
      max-width: 308px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        width: 388px;
      }
    }
  }
`;
export const LocalEvent = styled.section`
  min-height: 563px;
  width: 100%;
  .local-header {
    padding: 60px 0;
    h3 {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
    }
  }
`;
export const SymplaContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #99ccff;

  .iframe-sympla {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .description-sympla {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: auto;
      margin: 10px 0;
    }
  }
`;
export const Contato = styled.section`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 40px;
    font-weight: bold;
  }
  .social-media-area {
    display: flex;
    justify-content: space-around;

    img {
    }
  }
`;

export const Footer = styled.section`
  width: 100%;
  height: 45px;
  background: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

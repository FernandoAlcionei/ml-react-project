import React, { Component } from 'react';
import images from '../../../config/images';
import './styles.scss';

const { logo, login: { imgDeFundo } } = images;

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="login-view">
        <div className="img-de-fundo" style={{ background: `url(${imgDeFundo})` }}>
          <div className="wrap-logo">
            <img alt="Aji Sistemas" src={logo} className="img-logo" />
          </div>

          <div className="wrap-resume">
            <p>
              O que uma empresa com mais de 27 anos de experiência pode lhe oferecer? Conheça nossos sistemas e saiba como podemos mudar os resultados na sua empresa.
            </p>

            <p>
              Conte com especialistas no setor e com um sistema completo para o segmento que suporta toda sua operação.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;

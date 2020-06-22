import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Card from '../../../components/Card/index';
import { getParamUrl } from '../../../lib/utils';
import Loader from '../../../components/Loader/index';
import MsgSemResultado from '../../../components/MsgSemResultado/index';

class ProdutosView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getBusca() {
    const { location } = this.props;
    return getParamUrl('busca', location);
  }

  isBuscaChange(nextProps) {
    const { location } = nextProps;
    const newBusca = getParamUrl('busca', location);
    const oldBusca = this.getBusca();

    return oldBusca !== newBusca;
  }

  componentDidUpdate(nextProps) {
    if (this.isBuscaChange(nextProps)) {
      this.carregaLista();
    }
  }

  componentDidMount() {
    document.title = 'Mercado Livre';

    this.carregaLista();
  }

  carregaLista() {
    const { getListaProdutos } = this.props;
    const busca = this.getBusca();

    getListaProdutos(busca);
  }

  renderCard = (produto) => (
    <Card
      key={produto.id}
      id={produto.id}
      titulo={produto.title}
      descricao="Completo Unico!"
      imagem={produto.thumbnail}
      preco={produto.price}
      cidade={produto.address.state_name}
    />
  )

  render() {
    const { produtos, loadingView } = this.props;

    return (
      <div className="produtos-view">
        <div className="wrap-produtos">
          <Loader show={loadingView} />

          { !loadingView && !produtos.length ? <MsgSemResultado /> : null }

          { !loadingView ? produtos.map((produto) => this.renderCard(produto)) : null }
        </div>
      </div>
    );
  }
}

ProdutosView.propTypes = {
  getListaProdutos: PropTypes.func.isRequired,
  produtos: PropTypes.array.isRequired,
  loadingView: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

export default ProdutosView;

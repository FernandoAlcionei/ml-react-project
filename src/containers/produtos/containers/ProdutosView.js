import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Card from '../../../components/Card/index';

class ProdutosView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getListaProdutos } = this.props;
    getListaProdutos();
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
    const { produtos } = this.props;

    return (
      <div className="produtos-view">
        <div className="wrap-produtos">
          { produtos.map((produto) => this.renderCard(produto)) }
        </div>
      </div>
    );
  }
}

ProdutosView.propTypes = {
  getListaProdutos: PropTypes.func.isRequired,
  produtos: PropTypes.array.isRequired,
  loadingView: PropTypes.bool.isRequired,
  busca: PropTypes.string.isRequired,
};

export default ProdutosView;

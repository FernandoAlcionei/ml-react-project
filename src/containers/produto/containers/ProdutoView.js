import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';
import Button from '../../../components/Button/index';
import { getParamUrl } from '../../../lib/utils';
import Loader from '../../../components/Loader/index';

class ProdutoView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getProduto } = this.props;
    const { location, match: { params: { id } } } = this.props;

    document.title = getParamUrl('title', location);

    getProduto(id);
  }

  compra() {
    const { produto: { id }, compraProduto } = this.props;
    compraProduto(id);
  }

  renderInfoProduto = (produto, descriptions) => (
    <div>
      <div className="wrap-info-produto">
        <div className="wrap-img-produto">
          <img className="img-produto" src={produto.pictures[0].url} alt={produto.title} />
        </div>

        <div className="info-produto">
          <span className="quantity-sold">
            { produto.condition } - { produto.sold_quantity } vendidos
          </span>

          <h2 className="titulo">
            { produto.title }
          </h2>

          <span className="price">
            $ { produto.price }
          </span>

          <Button className="btn-comprar" onClick={() => this.compra()} label="Comprar" />
        </div>
      </div>

      <div className="wrap-descricao">
        <span className="label-descricao">
          Descrição do produto
        </span>

        {
              descriptions.map((description) => (
                <p key={description.id} className="descricao">
                  { description.plain_text }
                </p>
              ))
            }
      </div>
    </div>
  )

  render() {
    const { produto, descriptions, loadingView } = this.props;

    return (
      <div className="produto-view">
        <Loader show={loadingView} />

        { !loadingView && produto.id ? this.renderInfoProduto(produto, descriptions) : null }
      </div>
    );
  }
}

ProdutoView.propTypes = {
  getProduto: PropTypes.func.isRequired,
  compraProduto: PropTypes.func.isRequired,
  produto: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  descriptions: PropTypes.array.isRequired,
  loadingView: PropTypes.bool.isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }).isRequired }).isRequired,
};

export default ProdutoView;

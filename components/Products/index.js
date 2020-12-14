import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useState } from "react";
import formatCurrency from "components/Utils/utils";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

export default function index(props) {
  const [product, setProduct] = useState(null);

  const openModal = (product) => {
    setProduct(product);
  };

  const closeModal = () => {
    setProduct(null);
  };

  return (
    <>
      <Fade bottom cascade>
        {props.products.map((product) => (
          <article key={product.key}>
            <div className="card card_container">
              <a
                href={"#" + product.id}
                itemtype="https://schema.org/Product"
                onClick={() => openModal(product)}
              >
                <div className="card_nombre">
                  <span itemprop="name">{product.nombre}</span>
                </div>
                <img
                  itemprop="image"
                  src={`/productos/${product.imagen_thumb_url}`}
                  alt={product.nombre}
                  className="card_img"
                />
                <div className="card_body">
                  <div
                    itemprop="aggregateRating"
                    itemtype="https://schema.org/AggregateRating"
                    className="card_text_calification"
                  >
                    <span itemprop="ratingValue">{product.rated}</span>/5
                    <FaStar />
                  </div>
                  <div>{product.marca}</div>
                </div>
                <div className="card_categoria">
                  {product.categoria && product.categoria ? (
                    <div>
                      <strong>Categoria: </strong>
                      {product.categoria}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="card_info">
                  <div className="card_info_precio">
                    {formatCurrency(product.precio)}
                  </div>

                  <div>
                    <div>
                      {product.valor_onz.medida && product.valor_onz.medida ? (
                        <strong>
                          <br />
                          <strong>Onzas: </strong>
                          {product.valor_onz.medida} x {product.moneda}
                          {product.valor_onz.valor}
                        </strong>
                      ) : (
                        <></>
                      )}

                      {product.valor_litro && product.valor_litro ? (
                        <strong>
                          <br />
                          <strong>Litro: </strong>
                          {product.valor_litro}
                        </strong>
                      ) : (
                        <></>
                      )}

                      {product.valor_galon && product.valor_galon ? (
                        <strong>
                          <br />
                          <strong>Galón: </strong>
                          {product.valor_galon}
                        </strong>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </a>
              <div className="card_footer">
                <button
                  onClick={() => props.addToCart(product)}
                  className="button"
                >
                  Añadir <FaShoppingCart />
                </button>
              </div>
            </div>
          </article>
        ))}
      </Fade>

      {product && (
        <Modal isOpen={true} onRequestClose={closeModal}>
          <Zoom>
            <button className="close-modal" onClick={closeModal}>
              x
            </button>
            <div className="product-details">
              <img
                className="product-details-img"
                src={`/productos/${product.imagen_thumb_url}`}
                alt={product.nombre}
              />
              <div className="product-details-description">
                <p className="product-details-description-title">
                  <strong>{product.nombre}</strong>
                </p>
                <p className="product-details-description-p">
                  {product.descripcion}
                </p>

                <div className="product-details-price">
                  Precio
                  <strong>
                    {product.valor_onz.medida} Onzas x{" "}
                    {formatCurrency(product.precio)}
                  </strong>
                </div>
                <div className="product-details-sizes">
                  {product.valor_onz.medida && (
                    <>
                      <strong>Onzas: </strong>
                      {product.valor_onz.medida} x {product.moneda}
                      {product.valor_onz.valor}
                    </>
                  )}

                  {product.valor_litro && (
                    <>
                      <br />
                      <strong>Litro: </strong>
                      {product.valor_litro}
                    </>
                  )}

                  {product.valor_galon && (
                    <>
                      <br />
                      <strong>Galón: </strong>
                      {product.valor_galon}
                    </>
                  )}
                </div>
                <div className="card-text-aromas">
                  {product.aromas && (
                    <p>
                      <strong>Aromas: </strong>
                      <ul>
                        {product.aromas.map((item, index) => (
                          <li key={index} className="aromas-li">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </p>
                  )}
                </div>
                <button
                  className="button_modal"
                  onClick={() => {
                    props.addToCart(product);
                    closeModal();
                  }}
                >
                  Añadir <FaShoppingCart />
                </button>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
      <style jsx>{`
        .card {
          align-items: stretch;
          background: #fff;
          border-radius: 10px;
          color: #c4c4c4;
          overflow: hidden;
          box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.1);
        }
        .card_container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .card_nombre {
          background: #0d3362;
          color: white;
          text-align: center;
          padding: 1em;
          height: 70px;
          border-radius: 10px 10px 0px 0px;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card_img {
          width: 100%;
        }

        .card_text_calification {
          color: #f16722;
          text-align: right;
        }
        .card_body {
          padding: 0.5em;
          color: #0d3362;
          display: flex;
          flex-direction: row-reverse;
          justify-content: space-between;
        }
        .card_categoria {
          color: #0d3362;
          text-align: center;
          font-size: 1em;
        }
        .card_description {
          text-align: justify;
        }
        .card_info {
          padding: 1em;
          color: #474744;
          height: 100px;
        }
        .card_info_precio {
          background: #f16722;
          padding: 0.5em;
          font-weight: 700;
          color: white;
          text-align: center;
        }

        .card_footer {
          padding: 22px;
          position: relative;
          bottom: 0;
          width: 100%;
        }

        .button {
          padding: 10px;
          border: 1px solid #0d3362;

          position: relative;
          outline: none;
          border-radius: 5px;
          background: #f0f0f0;
          color: #292d48;
          font-size: 18px;
          width: 100%;
        }
        .button:hover {
          background: #0d3362;
          color: white;
        }

        .product-details {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          max-height: 90vh;
        }

        .product-details-img {
          max-width: 30rem;
          margin: 0 auto;
        }
        .product-details-description {
          padding: 1em;
          flex: 1 1;
        }
        .close-modal {
          position: absolute;
          right: 1rem;
          top: 1rem;
          padding: 1em;
          z-index: 1000;
          background: #0d3362;
          color: white;
        }
        .button_modal {
          padding: 1em;
          float: right;
          background: #f0f0f0;
          color: #292d48;
        }

        .product-details-description-title {
          width: 100%;
          font-size: 2em;
          color: #0d3362;
        }
        .product-details-description-p {
          text-align: justify;
        }
        .product-details-price {
          font-size: 2em;
          color: #f16722;
          text-align: center;
          width: 100%;
          padding: 1em;
        }
        .product-details-sizes {
          padding: 1em;
          list-style: none;
        }
        .card-text-aromas {
          padding: 1em;
        }
        .aromas-li {
          list-style-type: square;
          display: inline-block;
          padding: 1em;
          margin: 0.5em;
          background: #0d3362;
          color: white;
        }
        .aromas-li:hover {
          opacity: 80%;
        }
      `}</style>
    </>
  );
}

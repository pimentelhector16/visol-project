import { FaShoppingCart, FaStar } from "react-icons/fa";
import formatCurrency from "components/Utils/utils";

export default function index(props) {
  return (
    <>
      {props.products.map((product) => (
        <article key={product.key} className="card">
          <div itemtype="https://schema.org/Product" className="card_container">
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
                    <>
                      <br />
                      <strong>Onzas: </strong>
                      {product.valor_onz.medida} x {product.moneda}
                      {product.valor_onz.valor}
                    </>
                  ) : (
                    <></>
                  )}

                  {product.valor_litro && product.valor_litro ? (
                    <>
                      <br />
                      <strong>Litro: </strong>
                      {product.valor_litro}
                    </>
                  ) : (
                    <></>
                  )}

                  {product.valor_galon && product.valor_galon ? (
                    <>
                      <br />
                      <strong>Galón: </strong>
                      {product.valor_galon}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className="card_footer">
              <button
                onClick={() => props.addToCart(product)}
                className="button"
              >
                Añadir <FaShoppingCart />
              </button>
            </div>
          </div>

          <style jsx>{`
            .card {
              align-items: stretch;
              background: #fff;
              border-radius: 10px;
              box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
              color: #c4c4c4;
              overflow: hidden;
            }
            .card_container {
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
              background: #f0f0f0;
              position: relative;
              outline: none;
              border-radius: 5px;
              color: #292d48;
              font-size: 18px;
              width: 100%;
            }
            .button:hover {
              background: #0d3362;
              color: white;
            }
          `}</style>
        </article>
      ))}
    </>
  );
}

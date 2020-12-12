import { FaShoppingCart, FaStar } from "react-icons/fa";

export default function index(props) {
  return (
    <article key={props.key} className="card">
      <div
        itemscope
        itemtype="https://schema.org/Product"
        className="card_container"
      >
        <div className="card_nombre">
          <span itemprop="name">{props.nombre}</span>
        </div>
        <img
          itemprop="image"
          src={`/productos/${props.imagen_thumb_url}`}
          alt={props.nombre}
          className="card_img"
        />
        <div className="card_body">
          <div
            itemprop="aggregateRating"
            itemscope
            itemtype="https://schema.org/AggregateRating"
            className="card_text_calification"
          >
            <span itemprop="ratingValue">{props.rated}</span>/5
            <FaStar />
          </div>
          <div>{props.marca}</div>
        </div>
        <div className="card_categoria">
          {props.categoria && props.categoria ? (
            <div>
              <strong>Categoria: </strong>
              {props.categoria}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="card_info">
          <div className="card_info_precio">
            {props.moneda}
            {props.valor_onz.valor}
          </div>

          <div>
            <div>
              {props.valor_onz.medida && props.valor_onz.medida ? (
                <>
                  <br />
                  <strong>Onzas: </strong>
                  {props.valor_onz.medida} x {props.moneda}
                  {props.valor_onz.valor}
                </>
              ) : (
                <></>
              )}

              {props.valor_litro && props.valor_litro ? (
                <>
                  <br />
                  <strong>Litro: </strong>
                  {props.valor_litro}
                </>
              ) : (
                <></>
              )}

              {props.valor_galon && props.valor_galon ? (
                <>
                  <br />
                  <strong>Galón: </strong>
                  {props.valor_galon}
                </>
              ) : (
                <></>
              )}
            </div>
            <div>
              {props.aromas && props.aromas ? (
                <div>
                  <br />
                  <strong>Aromas: </strong>

                  {props.aromas.map((e) => {
                    return <span> {e}, </span>;
                  })}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className="card_footer">
          <button className="button" value={props.id} onClick={props.onClick}>
            Añadir <FaShoppingCart />
          </button>
        </div>
      </div>

      <style jsx>{`
        article {
        }

        .card {
          align-items: stretch;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
          color: #c4c4c4;
          height: 100%;
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
          height: 170px;
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
          padding: 20px;
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
  );
}

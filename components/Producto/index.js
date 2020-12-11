import { FaShoppingCart } from "react-icons/fa";
export default function index(props) {
  return (
    <>
      <article key={props.key} className="card product_card">
        <div className="image_container">
          <div className="text">{props.marca}</div>
        </div>

        <div className="product_text">
          <div className="product_text_category">{props.categoria}</div>
          <div className="product_text_title">{props.nombre}</div>
          <div className="product_text_description">{props.descripcion}</div>
        </div>
        <div>
          <button>
            Añadir <FaShoppingCart />
          </button>
        </div>
      </article>
      <style jsx>{`
        article {
          border-radius: 1em;
        }
        .card {
        }
        .image_container {
          background-image: url(${`/productos/${props.imagen_thumb_url}`}); /* The image used - important! */
          background-size: cover;
          position: relative;
          min-height: 300px;
        }
        .text {
          background-color: #ffffffaa;
          color: black;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
        }

        .product_card {
          box-shadow: 0 2px 7px #dfdfdf;
          background: #fafafa;
        }
        .product_text {
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 18px;
          color: #999;
          min-height: 340px;
          padding: 1em;
          text-align: justify;
        }
        .product_text_title {
          font-weight: 500;
          display: block;
          margin-bottom: 18px;
          text-transform: uppercase;
          color: #363636;
          text-decoration: none;
          transition: 0.3s;
          text-align: center;
        }
        .product_text_title :hover {
          color: #104c97;
        }

        .product_text_category {
          display: block;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: #f16722;
          margin-bottom: 18px;
        }

        .card button {
          border: none;
          outline: 0;
          padding: 12px;
          color: white;
          background-color: #104c97;
          text-align: center;
          cursor: pointer;
          width: 100%;
        }

        .card button:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
}

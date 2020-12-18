import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";

// Estilos para el modal Grande
const customStyles = {
  content: {
    width: "80%",
    maxHeight: "100%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Estilos para el modal pequeño y centrado
const customStylesSmall = {
  content: {
    maxHeight: "100%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function index(props) {
  const [cantidad, setCantidad] = useState(1);
  const [form, setForm] = useState({
    medida: "",
    precio: 0,
    cantidad: 0,
    costoTotal: 0,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // IMPL DEL MODAL DE AGREGAR PRODUCTOS
  const [productAgree, setProductAgree] = useState(null);
  const openModalAgregar = (product) => {
    setProductAgree(product);
    setCantidad(1);
  };
  const closeModalAgregar = () => {
    setProductAgree(null);
    setCantidad(1);
  };

  // IMPL DEL MODAL PARA MOSTRAR DETALLES
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
        <ul className="products">
          {props.products.map(function (product, index) {
            return (
              <li key={index}>
                <div className="product">
                  <a href={"#" + product.id} onClick={() => openModal(product)}>
                    <div className="card_nombre">
                      <span>{product.nombre}</span>
                    </div>
                    <img
                      src={`${product.imagen_thumb_url}`}
                      alt={product.nombre}
                      className="card_img"
                    />
                    <div className="card_body">
                      <div className="card_text_calification">
                        <span>{product.rated}</span>/5
                        <FaStar />
                      </div>
                      <div>{product.marca}</div>
                    </div>

                    <div className="card_info">
                      <div className="card_info_precio">
                        {product.categoria}
                      </div>
                    </div>
                  </a>
                  <div className="card_footer">
                    <button
                      className="button"
                      onClick={() => openModalAgregar(product)}
                    >
                      Añadir <FaShoppingCart />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Fade>
      {productAgree && (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          contentLabel="Agregar a Carrito"
          onRequestClose={closeModalAgregar}
          style={customStylesSmall}
        >
          {" "}
          <button onClick={closeModalAgregar} className="close-modal">
            x
          </button>
          <Zoom>
            <div className="modal_form">
              <div>
                <div>
                  <h2 className="modal_form_title">{productAgree.nombre}</h2>
                </div>
                <div className="modal_form_body">
                  <div className="modal_form_img">
                    <img
                      src={`${productAgree.imagen_thumb_url}`}
                      alt={productAgree.nombre}
                    />
                  </div>
                  <div className="modal_form_container">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        let costoTotal;
                        productAgree.onz &&
                          form.medida === "onzas" &&
                          (costoTotal = productAgree.onz.valor * cantidad);
                        productAgree.litro &&
                          form.medida === "litro" &&
                          (costoTotal = productAgree.litro.valor * cantidad);
                        productAgree.galon &&
                          form.medida === "galon" &&
                          (costoTotal = productAgree.galon.valor * cantidad);
                        productAgree.medida &&
                          form.medida === "unidad" &&
                          (costoTotal = productAgree.precio * cantidad);

                        props.addToCart(
                          form.medida,
                          cantidad,
                          productAgree,
                          costoTotal
                        );
                        closeModalAgregar();
                        setForm({ ...form, medida: "" });
                      }}
                    >
                      <div>
                        <select
                          name="medida"
                          required
                          value={form.medida}
                          onChange={handleChange}
                        >
                          <option value="">Seleccione</option>
                          {productAgree.onz && (
                            <option value="onzas">Onzas</option>
                          )}
                          {productAgree.litro && (
                            <option value="litro">Litro</option>
                          )}
                          {productAgree.galon && (
                            <option value="galon">Galón</option>
                          )}
                          {productAgree.medida && (
                            <option value="unidad">Unidad</option>
                          )}
                        </select>

                        <div>
                          <div className="number-input">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                cantidad <= 1
                                  ? setCantidad(1)
                                  : setCantidad(cantidad - 1);
                              }}
                              className="button-plus"
                            >
                              -
                            </button>

                            <input
                              min="0"
                              name="cantidad"
                              value={cantidad}
                              onChange={handleChange}
                              type="number"
                            />

                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setCantidad(cantidad + 1);
                              }}
                              className="button-plus"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-footer-total">
                            <div>
                              {productAgree.onz && form.medida === "onzas" && (
                                <>
                                  <small>
                                    Valor por {productAgree.onz.medida} Onzas:{" "}
                                  </small>
                                  {productAgree.moneda} {productAgree.onz.valor}
                                </>
                              )}
                              {productAgree.litro && form.medida === "litro" && (
                                <>
                                  <small>Valor por Litro: </small>
                                  {productAgree.moneda}{" "}
                                  {productAgree.litro.valor}
                                </>
                              )}
                              {productAgree.galon && form.medida === "galon" && (
                                <>
                                  <small>Valor por Galón: </small>
                                  {productAgree.moneda}{" "}
                                  {productAgree.galon.valor}
                                </>
                              )}
                              {productAgree.medida && form.medida === "unidad" && (
                                <>
                                  <small>Valor por Unidad: </small>
                                  {productAgree.moneda} {productAgree.precio}
                                </>
                              )}
                            </div>
                            <div>
                              <strong>
                                {productAgree.onz && form.medida === "onzas" && (
                                  <>
                                    <small>Valor Total: </small>
                                    {productAgree.moneda}
                                    {productAgree.onz.valor * cantidad}
                                  </>
                                )}
                                {productAgree.litro && form.medida === "litro" && (
                                  <>
                                    <small>Valor Total: </small>
                                    {productAgree.moneda}
                                    {productAgree.litro.valor * cantidad}
                                  </>
                                )}
                                {productAgree.galon && form.medida === "galon" && (
                                  <>
                                    <small>Valor Total: </small>
                                    {productAgree.moneda}
                                    {productAgree.galon.valor * cantidad}
                                  </>
                                )}
                                {productAgree.medida &&
                                  form.medida === "unidad" && (
                                    <>
                                      <small>Valor Total: </small>
                                      {productAgree.moneda}
                                      {productAgree.precio * cantidad}
                                    </>
                                  )}
                              </strong>
                            </div>
                          </div>
                          <div>
                            <button className="button" type="submit">
                              Añadir a <FaShoppingCart />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
      {product && (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          contentLabel="Ver Detalles"
          onRequestClose={closeModal}
          style={customStyles}
        >
          <button className="close-modal" onClick={closeModal}>
            x
          </button>
          <Zoom>
            <div className="product-container">
              <div className="product-details">
                <img
                  className="product-details-img"
                  src={`${product.imagen_url}`}
                  alt={product.nombre}
                />
                <div className="product-details-description">
                  <p className="product-details-description-title">
                    <strong>{product.nombre}</strong>
                  </p>
                  <div>
                    <div className="product-details-description-p">
                      <small>Descripción: </small>
                      {product.descripcion}
                    </div>
                    <br />
                    <div className="">
                      <strong>Categoria: </strong>
                      {product.categoria}
                    </div>
                    {product.aromas && (
                      <div className="product-details-aromas">
                        <strong>Aromas: </strong>
                        <ul>
                          {product.aromas &&
                            product.aromas.map((aroma) => {
                              return (
                                <li key={aroma} className="aromas-li">
                                  {aroma}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <button
                    className="button_modal"
                    onClick={() => {
                      closeModal();
                      openModalAgregar(product);
                    }}
                  >
                    Añadir <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}

      <style jsx>{`
        .products {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
          grid-gap: 1em;
          justify-content: space-around;
          align-items: flex-start;
          align-content: flex-start;
        }
        .products li {
          flex: 1 auto;
          padding: 1rem;
          list-style: none;
        }
        .product {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          background: white;
          border-radius: 10px;
          box-shadow: 1px 6px 15px 1px #d9e3ec;
        }

        .card_nombre {
          background: #0d3362;
          color: white;
          text-align: center;
          padding: 1em;
          height: 70px;
          border-radius: 10px 10px 0px 0px;
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
          color: #474744;
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

        /* FORMULARIO */
        .product-container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .product-details {
          display: flex;
          flex-direction: row;
          margin: 0 auto;
          padding: 2em;
          font-size: clamp(1em, 1vw, 1rem);
        }

        @media (max-width: 800px) {
          .product-details {
            flex-direction: column;
          }
        }

        .product-details-img {
          min-width: 15rem;
          max-width: 50%;
          max-height: 15rem;
          margin: 0 auto;
        }

        .product-details-description {
          padding: 1em;
        }

        .product-details-aromas {
          padding: 1em;
        }

        .close-modal {
          position: absolute;
          right: 1em;
          top: 1em;
          padding: 1em;
          z-index: 1000;
          background: #0d3362;
          color: white;
        }

        .button_modal {
          padding: 1em;
          float: right;
          background: #0d3362;
          color: white;
        }

        .product-details-description-title {
          font-size: 1.4em;
          color: #0d3362;
        }
        .product-details-description-p {
          text-align: justify;
        }
        .product-details-sizes {
          padding: 1em;
          list-style: none;
        }
        .aromas-li {
          list-style-type: square;
          display: inline-block;
          padding: 1em;
          margin: 0.5em;
          background: #f16722;
          color: white;
        }
        .aromas-li:hover {
          opacity: 80%;
        }

        /* FORMULARIO */
        .modal_form {
          display: grid;
          grid-template-columns: 1fr auto;
          grid-template-rows: auto;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0 auto;
          padding-top: 3em;
        }
        .modal_form_title {
          text-align: center;
        }

        .modal_form_body {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .modal_form_img img {
          width: 15em;
          position: relative;
        }

        .modal_form_container {
          padding: 1em;
        }

        .number-input {
          display: flex;
          justify-content: inherit;
        }
        .text-footer-total {
          margin: 0.5em;
          display: flex;
          flex-direction: column;
          font-size: clamp(1.1rem, 1vw, 1.1rem);
          color: #0d3362;
          padding: 1em;
          text-align: center;
        }
        .text-footer-total div {
          padding: 1em;
        }
        .button-plus {
          padding: 1em;
          color: white;
          background: #0d3362;
        }
      `}</style>
    </>
  );
}

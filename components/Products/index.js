import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import {
  modalStylesProductosDetails,
  modalStylesProductosAgreeToCart,
} from "styles/utils";
import styles from "./products.module.css";

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
        <ul className={styles.products}>
          {props.products.map(function (product, index) {
            return (
              <li key={index}>
                <div className={styles.product}>
                  <a href={"#" + product.id} onClick={() => openModal(product)}>
                    <div className={styles.cardNombre}>
                      <span>{product.nombre}</span>
                    </div>
                    <img
                      src={`${product.imagen_thumb_url}`}
                      alt={product.nombre}
                      className={styles.cardImg}
                    />
                    <div className={styles.cardBody}>
                      <div className={styles.cardTextCalification}>
                        <span>{product.rated}</span>/5
                        <FaStar />
                      </div>
                      <div>{product.marca}</div>
                    </div>

                    <div className={styles.cardInfo}>
                      <div className={styles.cardInfoPrecio}>
                        {product.categoria}
                      </div>
                    </div>
                  </a>
                  <div className={styles.cardFooter}>
                    <button
                      className={styles.button}
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
          style={modalStylesProductosAgreeToCart}
        >
          {" "}
          <button onClick={closeModalAgregar} className={styles.closeModal}>
            x
          </button>
          <Zoom>
            <div className={styles.modalForm}>
              <div>
                <div>
                  <h2 className={styles.modalFormTitle}>
                    {productAgree.nombre}
                  </h2>
                </div>
                <div className={styles.modalFormBody}>
                  <div className={styles.modalFormImg}>
                    <img
                      src={`${productAgree.imagen_thumb_url}`}
                      alt={productAgree.nombre}
                    />
                  </div>
                  <div className={styles.modalFormContainer}>
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
                          <div className={styles.numberInput}>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                cantidad <= 1
                                  ? setCantidad(1)
                                  : setCantidad(cantidad - 1);
                              }}
                              className={styles.buttonPlus}
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
                              className={styles.buttonPlus}
                            >
                              +
                            </button>
                          </div>
                          <div className={styles.textFooterTotal}>
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
                            <button className={styles.button} type="submit">
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
          style={modalStylesProductosDetails}
        >
          <button className={styles.closeModal} onClick={closeModal}>
            x
          </button>
          <Zoom>
            <div className={styles.productContainer}>
              <div className={styles.productDetails}>
                <img
                  className={styles.productDetailsImg}
                  src={`${product.imagen_url}`}
                  alt={product.nombre}
                />
                <div className={styles.productDetailsDescription}>
                  <p className={styles.productDetailsDescriptionTitle}>
                    <strong>{product.nombre}</strong>
                  </p>
                  <div>
                    <div className={styles.productDetailsDescriptionP}>
                      <small>Descripción: </small>
                      {product.descripcion}
                    </div>
                    <br />
                    <div className="">
                      <strong>Categoria: </strong>
                      {product.categoria}
                    </div>
                    {product.aromas && (
                      <div className={styles.productDetailsAromas}>
                        <strong>Aromas: </strong>
                        <ul>
                          {product.aromas &&
                            product.aromas.map((aroma) => {
                              return (
                                <li key={aroma} className={styles.aromasLi}>
                                  {aroma}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    )}
                  </div>
                  <button
                    className={styles.buttonModal}
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
    </>
  );
}

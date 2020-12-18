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
        <ul className="grid grid-cols-12 gap-2 items-start mx-auto">
          {props.products.map(function (product, index) {
            return (
              <li
                key={index}
                className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 shadow-lg"
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
                  <a href={"#" + product.id} onClick={() => openModal(product)}>
                    <div className="mx-auto h-20 flex-grow flex justify-center items-center ">
                      <div>
                        <h1 className="text-gray-600 font-bold text-md uppercase p-2">
                          {product.nombre}
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">
                          {product.marca}
                        </p>
                      </div>
                    </div>
                    <img
                      className="h-56 w-full object-cover mt-2"
                      src={product.imagen_thumb_url}
                      alt={product.nombre}
                    />
                  </a>
                  <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                    <h3 className="text-white text-sm">{product.categoria}</h3>
                    <button
                      className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded "
                      onClick={() => openModalAgregar(product)}
                    >
                      Añadir a Carrito
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
                  <h2 className="font-semibold mb-2 text-2xl leading-tight text-center sm:leading-normal">
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
                          className="border rounded-md px-4 py-2 mb-2"
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
                              className="bg-red-700 text-white p-4"
                            >
                              -
                            </button>

                            <input
                              min="1"
                              name="cantidad"
                              value={cantidad}
                              onChange={handleChange}
                              type="number"
                              class="md:p-2 p-1 text-xs md:text-base border-gray-400 focus:outline-none text-center"
                              readonly
                            />

                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setCantidad(cantidad + 1);
                              }}
                              className="bg-blue-700 text-white p-4"
                            >
                              +
                            </button>
                          </div>
                          {form.medida !== "" && (
                            <div className="alert flex flex-row items-center bg-blue-200 p-5 rounded border-b-2 border-blue-300">
                              <div className="alert-icon flex items-center bg-blue-100 border-2 border-blue-500 justify-center h-10 w-10 flex-shrink-0 rounded-full">
                                <span className="text-blue-500">
                                  <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="alert-content ml-4">
                                <div className="alert-title font-semibold text-lg text-blue-800">
                                  {productAgree.onz && form.medida === "onzas" && (
                                    <>
                                      <small>
                                        Valor por {productAgree.onz.medida}{" "}
                                        Onzas:{" "}
                                      </small>
                                      {productAgree.moneda}{" "}
                                      {productAgree.onz.valor}
                                    </>
                                  )}
                                  {productAgree.litro &&
                                    form.medida === "litro" && (
                                      <>
                                        <small>Valor por Litro: </small>
                                        {productAgree.moneda}{" "}
                                        {productAgree.litro.valor}
                                      </>
                                    )}
                                  {productAgree.galon &&
                                    form.medida === "galon" && (
                                      <>
                                        <small>Valor por Galón: </small>
                                        {productAgree.moneda}{" "}
                                        {productAgree.galon.valor}
                                      </>
                                    )}
                                  {productAgree.medida &&
                                    form.medida === "unidad" && (
                                      <>
                                        <small>Valor por Unidad: </small>
                                        {productAgree.moneda}{" "}
                                        {productAgree.precio}
                                      </>
                                    )}
                                </div>
                                <div className="alert-description text-md text-blue-600">
                                  {productAgree.onz && form.medida === "onzas" && (
                                    <>
                                      <small>Valor Total: </small>
                                      {productAgree.moneda}
                                      {productAgree.onz.valor * cantidad}
                                    </>
                                  )}
                                  {productAgree.litro &&
                                    form.medida === "litro" && (
                                      <>
                                        <small>Valor Total: </small>
                                        {productAgree.moneda}
                                        {productAgree.litro.valor * cantidad}
                                      </>
                                    )}
                                  {productAgree.galon &&
                                    form.medida === "galon" && (
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
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="mx-auto text-center m2 p2">
                            <button
                              type="submit"
                              class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
                            >
                              Añadir a Carrito
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
                    className="bg-blue-900 text-white text-md p-2 float-right border rounded"
                    onClick={() => {
                      closeModal();
                      openModalAgregar(product);
                    }}
                  >
                    Añadir a Carrito
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

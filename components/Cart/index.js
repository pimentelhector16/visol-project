import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import styles from "./cart.module.css";

export default function index(props) {
  const [state, setState] = useState({ showCheckout: false });

  const [inputState, setInputState] = useState({
    email: "",
    nombre: "",
    direccion: "",
  });

  const createOrder = (e) => {
    e.preventDefault();
    const order = {
      email: inputState.email,
      nombre: inputState.nombre,
      direccion: inputState.direccion,
      cartItems: props.cartItems,
    };
    props.createOrder(order);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.cartTitle}>
        <FaShoppingCart />
        Carrito de Compras
      </div>
      {props.cartItems && props.cartItems.length === 0 ? (
        <p className={styles.cartText}>Carrito Vacio</p>
      ) : (
        <>
          <p className={styles.cartText}>
            {props.cartItems.length} Productos en el Carrito
          </p>
          <div className={styles.cartBody}>
            <div className={styles.cartItems}>
              <Fade left cascade>
                <ul>
                  {props.cartItems.map((item, index) => {
                    return (
                      <li key={index} className={styles.cartItem}>
                        <div>
                          <img
                            className={styles.cartItemImg}
                            src={`${item.imagen_thumb_url}`}
                            alt={item.nombre}
                            loading="lazy"
                          />
                        </div>
                        <div className={styles.cartItemText}>
                          <div className={styles.text}>{item.nombre}</div>
                          <div className={styles.text}>
                            <div>
                              {item.onz && item.medida === "onzas" && (
                                <>
                                  <small>
                                    V/Onzas [{item.onz.medida}] x {item.count} :{" "}
                                  </small>
                                  {item.moneda}
                                  {item.onz.valor * item.count}
                                </>
                              )}
                              {item.litro && item.medida === "litro" && (
                                <>
                                  <small>V/Litro: </small>
                                  {item.moneda}
                                  {item.litro.valor * item.count}
                                </>
                              )}
                              {item.galon && item.medida === "galon" && (
                                <>
                                  <small>V/Galón: </small>
                                  {item.moneda}
                                  {item.galon.valor * item.count}
                                </>
                              )}
                              {item.medida && item.medida === "unidad" && (
                                <>
                                  <small>V/Unidad: </small>
                                  {item.moneda}
                                  {item.precio * item.count}
                                </>
                              )}
                            </div>
                            <div>
                              <button
                                className={`${styles.button} ${styles.right}`}
                                onClick={() => {
                                  item.onz &&
                                    item.medida === "onzas" &&
                                    props.removeFromCart(item, "onzas");
                                  item.litro &&
                                    item.medida === "litro" &&
                                    props.removeFromCart(item, "litro");
                                  item.galon &&
                                    item.medida === "galon" &&
                                    props.removeFromCart(item, "galon");
                                  item.medida &&
                                    item.medida === "unidad" &&
                                    props.removeFromCart(item, "unidad");
                                }}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Fade>
            </div>
            <div className={styles.procederCart}>
              <div>
                Total: Q{props.cartItems.reduce((a, c) => a + c.costoTotal, 0)}
              </div>
              {!state.showCheckout && (
                <button
                  className={`${styles.button} ${styles.proceder}`}
                  onClick={() => {
                    setState({ showCheckout: true });
                  }}
                >
                  Presupuestar
                </button>
              )}
            </div>
          </div>

          {state.showCheckout && (
            <Fade right cascade>
              <div className={styles.cartForm}>
                <form onSubmit={createOrder} className={styles.form}>
                  <ul className={styles.formContainer}>
                    <li>
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={handleInput}
                      />
                    </li>
                    <li>
                      <label>Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        onChange={handleInput}
                        className={styles.input}
                      />
                    </li>
                    <li>
                      <label>Dirección</label>
                      <input
                        type="text"
                        name="direccion"
                        required
                        onChange={handleInput}
                      />
                    </li>
                    <li>
                      <button
                        type="submit"
                        className={`${styles.button} ${styles.proceder}`}
                      >
                        Confirmar{" "}
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            </Fade>
          )}
        </>
      )}
    </section>
  );
}

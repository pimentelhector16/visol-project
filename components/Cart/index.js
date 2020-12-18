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
    <section className="p2">
      <div className="text-white text-sm px-4 py-2 border rounded-md bg-blue-900">
        Carrito de Compras
      </div>
      {props.cartItems && props.cartItems.length === 0 ? (
        <p className="text-center text-sm p2">Carrito Vacio</p>
      ) : (
        <>
          <p className="text-center text-sm p2">
            {props.cartItems.length} Productos en el Carrito
          </p>
          <div className="max-w-full p-4 mx-auto">
            <div className="max-w-full border rounded-md px-4 py-2 bg-white mx-auto">
              <Fade left cascade>
                <ul>
                  {props.cartItems.map((item, index) => {
                    return (
                      <li key={index} className="flex flex-column p-2">
                        <div>
                          <img
                            className="w-12 h-12"
                            src={`${item.imagen_thumb_url}`}
                            alt={item.nombre}
                            loading="lazy"
                          />
                        </div>
                        <div className="w-full text-left ">
                          <div className="pl-3">{item.nombre}</div>
                          <i
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
                            className="cursor-pointer text-red-700 float-right"
                          >
                            x
                          </i>
                          <div className="pl-3">
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
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Fade>
            </div>
            <div className="flex items-center justify-between px-4 py-2 ">
              <div className="text-md text-bold">
                Total: Q{props.cartItems.reduce((a, c) => a + c.costoTotal, 0)}
              </div>
              {!state.showCheckout && (
                <button
                  className="bg-orange-500 text-white border rounded-md p-2"
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
                        className="border text-md rounded"
                      />
                    </li>
                    <li>
                      <label>Nombre</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        onChange={handleInput}
                        className="border text-md rounded"
                      />
                    </li>
                    <li>
                      <label>Dirección</label>
                      <input
                        type="text"
                        name="direccion"
                        required
                        onChange={handleInput}
                        className="border  text-md rounded"
                      />
                    </li>
                    <li className="text-center">
                      <button
                        type="submit"
                        className="bg-orange-500 text-white border rounded-md p-2"
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

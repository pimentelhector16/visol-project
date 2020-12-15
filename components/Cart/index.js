import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function index(props) {
  const [state, setState] = useState({ showCheckout: false });
  const [total, setTotal] = useState(0);
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
    <>
      <section>
        <div className="cart_title">
          <FaShoppingCart />
          Carrito de Compras
        </div>
        {props.cartItems.length === 0 ? (
          <p className="cart_text">Carrito Vacio</p>
        ) : (
          <>
            <p className="cart_text">
              {props.cartItems.length} Productos en el Carrito
            </p>
            <div className="cart_body">
              <div className="cart_items">
                <Fade left cascade>
                  <ul>
                    {props.cartItems.map((item, index) => {
                      return (
                        <li key={index} className="cart_item">
                          <div>
                            <img
                              className="cart_item_img"
                              src={`/productos/${item.imagen_thumb_url}`}
                              alt={item.nombre}
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <div className="text">{item.nombre}</div>
                            <div className="right">
                              <div className="cart_item_text">
                                {item.onz && item.medida === "onzas" && (
                                  <>
                                    <small>
                                      V/Onzas [{item.onz.medida}] x {item.count}{" "}
                                      :{" "}
                                    </small>
                                    {
                                      item.onz.valor * item.count
                                    }
                                  </>
                                )}
                                {item.litro && item.medida === "litro" && (
                                  <>
                                    <small>V/Litro: </small>
                                    {
                                      item.litro.valor * item.count
                                    }
                                  </>
                                )}
                                {item.galon && item.medida === "galon" && (
                                  <>
                                    <small>V/Galón: </small>
                                    {
                                      item.galon.valor * item.count
                                    }
                                  </>
                                )}
                                {item.medida && item.medida === "unidad" && (
                                  <>
                                    <small>V/Unidad: </small>
                                    {item.precio * item.count}
                                  </>
                                )}
                              </div>

                              <button
                                className="button "
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
                                Remover
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </Fade>
              </div>
              <div className="proceder_cart">
                <div>
                  Total:
                  {props.cartItems.reduce(
                    (a, c) => a + c.costoTotal * c.count,
                    0
                  )}
                </div>
                {!state.showCheckout && (
                  <button
                    className="button proceder"
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
                <div className="cart_form">
                  <form onSubmit={createOrder}>
                    <ul className="form-container">
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
                        <button type="submit" className="button proceder">
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
      <style jsx>{`
        section {
          width: 100%;
          min-width: 30%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .cart_title {
          display: flex;
          justify-content: center;
          text-align: center;
          padding: 0.5em;
          background: #0d3362;
          color: white;
          border-radius: 0.5em;
        }
        .cart_text {
          text-align: center;
          font-size: 0.8em;
          padding: 0.5em;
        }
        .cart_items {
          padding: 1em;
          width: 100%;
        }

        .cart_item_img {
          padding: 0;
          width: 3rem;
        }
        .cart_item {
          list-style: none;
          display: flex;
          padding: 0.5em;
        }
        .cart_item div {
          padding: 0;
        }
        .cart_item div:last-child {
          flex: 1;
        }
        .text {
          padding: 1em;
          margin-left: 1em;
        }
        .right {
          text-align: right;
          padding: 1em;
        }
        .button {
          background-color: #0d3362;
          color: white;
          padding: 0.2em;
          border-radius: 1em;
        }

        .proceder_cart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          width: 100%;
        }
        .proceder {
          background-color: #0d3362;
          color: white;
          padding: 0.5em;
          border-radius: 12px;
        }
        .cart_item_text {
          padding-right: 1em;
        }
        /* FORM CHECKOUT */
        form {
          width: 100%;
        }
        .form-container {
          width: 100%;
          padding: 0;
          list-style: none;
        }
        .form-container li {
          display: flex;
          flex-direction: column;
          padding: 1em;
        }
      `}</style>
    </>
  );
}

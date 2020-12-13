import { FaShoppingCart } from "react-icons/fa";
import formatCurrency from "components/Utils/utils";

export default function index(props) {
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
              Tienes {props.cartItems.length} en el Carrito
            </p>
            <div className="cart_body">
              <div className="cart_items">
                <ul>
                  {props.cartItems.map((item) => {
                    return (
                      <li key={item.id} className="cart_item">
                        <div>
                          <img
                            className="cart_item_img"
                            src={`/productos/${item.imagen_thumb_url}`}
                            alt={item.nombre}
                          />
                        </div>
                        <div>
                          <div>{item.nombre}</div>
                          <div className="right">
                            {formatCurrency(item.precio)} x {item.count}
                            <button
                              className="button"
                              onClick={() => props.removeFromCart(item)}
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="proceder_cart">
              <div>
                Total:{" "}
                {formatCurrency(
                  props.cartItems.reduce((a, c) => a + c.precio * c.count, 0)
                )}
              </div>

              <button className="button proceder" onClick={() => {}}>
                Presupuestar
              </button>
            </div>
          </>
        )}
      </section>
      <style jsx>{`
        section {
          width: 100%;
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
          min-width: 390px;
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
        .right {
          text-align: right;
        }
        .button {
          background-color: #e7e7e7;
          color: black;
          padding: 0.3em;
          border-radius: 12px;
        }
        .proceder_cart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5em;
          width: 100%;
        }
        .proceder {
          background-color: #0d3362;
          color: white;
          padding: 0.5em;
          border-radius: 12px;
          margin-left: 1em;
        }
      `}</style>
    </>
  );
}

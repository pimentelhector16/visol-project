import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "hooks/useContext";

export default function index() {
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    console.log("evento Ocurriendo");
  }, []);

  return (
    <>
      <section>
        <article>
          <div className="cart_title">
            Carrito de Compras
            <FaShoppingCart />
          </div>
          <div className="cart_body">lista de productos</div>
          <div className="cart_footer">Footer</div>
        </article>
      </section>
      <style jsx>{`
        section {
          padding: 0.5em;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .cart_title {
          background: #0d3362;
          color: white;
          padding: 1em;
          height: 49px;
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .cart_body {
        }
        .cart_footer {
          display: flex;
          justify-content: center;
          text-align: center;
          background: #0d3362;
          color: white;
          padding: 1em;
          height: 49px;
        }
      `}</style>
    </>
  );
}

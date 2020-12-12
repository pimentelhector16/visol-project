import Head from "next/head";
import { productos } from "pages/api";
import Producto from "components/Producto";
import Cart from "components/Cart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "hooks/useContext";
import Filter from "components/Filter";

export default function index() {
  const [cart, setCart] = useContext(CartContext);
  const [state, setState] = useState({
    products: productos,
    sort: "",
    size: "",
  });

  const sortProducts = (e) => {
    const sort = e.target.value;
    setState((state) => ({
      sort,
      products: state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.precio > b.precio
              ? 1
              : -1
            : sort === "highest"
            ? a.precio < b.precio
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        ),
    }));
  };

  const filterProducts = (e) => {
    e.target.value === ""
      ? setState({ size: e.target.value, products: productos })
      : setState({
          size: e.target.value,
          products: productos.filter(
            (product) => product.availableSizes.indexOf(e.target.value) >= 0
          ),
        });
  };

  const addProduct = (e) => {
    e.preventDefault();
    setCart(e.target.value);
    console.log("añadiendo un item", e.target.value);
  };

  return (
    <div className="container">
      <Head>
        <title>Visol - Productos </title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta name="keywords" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,  user-scalable=no"
        />
      </Head>

      <main className="main">
        <section>
          {state.products &&
            state.products.map((producto, index) => {
              return (
                <Producto
                  key={index}
                  id={producto.id}
                  nombre={producto.nombre}
                  descripcion={producto.descripcion}
                  marca={producto.marca}
                  categoria={producto.categoria}
                  imagen_url={producto.imagen_url}
                  imagen_thumb_url={producto.imagen_thumb_url}
                  onClick={addProduct}
                  {...producto}
                />
              );
            })}
        </section>
        <aside>
          {state.products && (
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
          )}
          <Cart className="carrito" />
        </aside>
        <style jsx>{`
          .main {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto;
            grid-gap: 1rem;
            max-width: 1800px;
            margin: 0 auto;
          }
          @media (max-width: 800px) {
            .main {
              grid-template-columns: 1fr;
            }
          }

          section {
            padding: 2em;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 1em;
            justify-content: center;
            align-items: center;
            align-content: center;
            width: 100%;
          }
          aside {
            padding: 2em;
          }
        `}</style>
      </main>
    </div>
  );
}

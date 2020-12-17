import Head from "next/head";
import Cart from "components/Cart";
import { useEffect, useState } from "react";
import Filter from "components/Filter";
import Products from "components/Products";

function index({ products }) {
  const [state, setState] = useState({
    products: products,
    cartItems:
      typeof window !== "undefined"
        ? window.localStorage.getItem("cartItems")
          ? JSON.parse(window.localStorage.getItem("cartItems"))
          : []
        : [],
    sort: "",
    filter: "",
  });

  const createOrder = (order) => {
    alert("Necesito procesar orden del cliente: " + order.nombre);
  };
  const sortProducts = (e) => {
    const sort = e.target.value;
    setState((state) => ({
      ...state,
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
      ? setState({ ...state, filter: e.target.value, products: products })
      : setState({
          ...state,
          filter: e.target.value,
          products: products.filter(
            (producto) => producto.categoria.indexOf(e.target.value) >= 0
          ),
        });
  };

  const addToCart = (medida, cantidad, product, costoTotal) => {
    const cartItems = state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id && item.medida === medida) {
        item.count = item.count + cantidad;
        item.costoTotal = item.costoTotal + costoTotal;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      cartItems.push({
        ...product,
        count: cantidad,
        medida: medida,
        costoTotal: costoTotal,
      });
    }

    setState({ ...state, cartItems });
  };
  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  });
  const removeFromCart = (product, medida) => {
    const cartItems = state.cartItems.slice();

    setState({
      ...state,

      cartItems: cartItems.filter(
        (item) => item.id !== product.id || item.medida !== medida
      ),
    });
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

      <main>
        {state.products ? (
          <div className="main">
            <section>
              <div className="filter">
                {state.products && (
                  <Filter
                    count={state.products.length}
                    filter={state.filter}
                    sort={state.sort}
                    filterProducts={filterProducts}
                    sortProducts={sortProducts}
                  />
                )}
              </div>
              <Products products={state.products} addToCart={addToCart} />
            </section>
            <aside>
              <Cart
                cartItems={state.cartItems}
                removeFromCart={removeFromCart}
                createOrder={createOrder}
              />
            </aside>
          </div>
        ) : (
          <div className="preloader">
            <div className="loader"></div>
          </div>
        )}

        <style jsx>{`
          .main {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            align-content: flex-start;
            aling-items: flex-start;
            overflow-y: hidden;
          }

          section {
            padding: 1em;
            width: 70vw;
          }

          .filter {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
          }

          aside {
            padding: 2em;
            margin: 0 auto;
          }

          @media (max-width: 800px) {
            .main {
              grid-template-columns: 1fr;
            }
            .filter {
              justify-content: center;
              align-items: center;
            }
            section {
              padding: 1em;
              width: 100vw;
            }
            aside {
              padding: 1em;
              width: 100vw;
            }
          }
        `}</style>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://buscameenguate.com/webservice/crud/data.php");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default index;

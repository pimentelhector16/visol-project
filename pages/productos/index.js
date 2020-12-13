import Head from "next/head";
import { productos } from "pages/api";
import Products from "components/Products";
import Cart from "components/Cart";
import { useEffect, useState } from "react";
import Filter from "components/Filter";

export default function index() {
  const [state, setState] = useState({
    products: productos,
    cartItems:
      typeof window !== "undefined"
        ? window.localStorage.getItem("cartItems")
          ? JSON.parse(window.localStorage.getItem("cartItems"))
          : []
        : [],
    sort: "",
    size: "",
  });

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
      ? setState({ ...state, size: e.target.value, products: productos })
      : setState({
          ...state,
          size: e.target.value,
          products: productos.filter(
            (product) => product.availableSizes.indexOf(e.target.value) >= 0
          ),
        });
  };

  const addToCart = (product) => {
    const cartItems = state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }

    setState({ ...state, cartItems });
  };

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  });

  const removeFromCart = (product) => {
    const cartItems = state.cartItems.slice();

    setState({
      ...state,
      cartItems: cartItems.filter((x) => x.id !== product.id),
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
        <div className="filter">
          {state.products && (
            <Filter
              count={state.products.length}
              size={state.size}
              sort={state.sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
          )}
        </div>
        <div className="main">
          <section>
            <Products products={state.products} addToCart={addToCart} />
          </section>
          <aside>
            <Cart cartItems={state.cartItems} removeFromCart={removeFromCart} />
          </aside>
        </div>
        <style jsx>{`
          .main {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto;
            width: 100vw;
            max-width: 1800px;
            margin: 0 auto;
          }

          section {
            padding: 1em;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 1em;
            justify-content: space-around;
            align-items: flex-start;
            align-content: center;
            width: 100%;
          }
          .filter {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            padding: 0.5em;
            justify-content: flex-start;
            align-items: center;
          }
          aside {
            padding: 1em;
            width: 400px;
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

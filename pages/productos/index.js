import Head from "next/head";
import Cart from "components/Cart";
import { useEffect, useState } from "react";
import Filter from "components/Filter";
import Products from "components/Products";
import { loadFirebase } from "lib/db";
import toaster from "toasted-notes";
import "toasted-notes/src/styles.css";
import Router from "next/router";

function index({ products }) {
  const [loading, setLoading] = useState(false);

  const createOrder = (order) => {
    const addOrder = (order) => {
      let firebase = loadFirebase();

      firebase
        .firestore()
        .collection("orders")
        .add({
          email: order.email,
          nombre: order.nombre,
          direccion: order.direccion,
          cartItems: order.cartItems,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        });
      toaster.notify(() => (
        <div className="p-2 bg-orange-500 text-white border-orange-500 rounded-md flex flex-column items-center">
          <span>Se ha registrado el presupuesto correctamente</span>
        </div>
      ));

      localStorage.removeItem("cartItems");
      setState({ ...state, cartItems: [], sort: "", filter: "" });
      console.log("correct");
    };
    addOrder(order);
  };

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

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

    toaster.notify(() => (
      <div className="p-2 bg-orange-500 text-white border-orange-500 rounded-md flex flex-column items-center">
        <img
          src={product.imagen_thumb_url}
          alt={product.id}
          className="border rounded-md h-10 w-10 m-2"
        />
        <span>Has Añadido un Producto a Carrito</span>
      </div>
    ));
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
    toaster.notify(() => (
      <div className="p-2 bg-red-500 text-white border-red-500 rounded-md flex flex-column items-center">
        <img
          src={product.imagen_thumb_url}
          alt={product.id}
          className="border rounded-md h-10 w-10 m-2"
        />
        <span>Has Eliminado un Producto del Carrito</span>
      </div>
    ));
  };

  return (
    <>
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
      {loading ? (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="container mx-auto">
          {state.products ? (
            <>
              <main className="flex-grow flex justify-center items-center ">
                <div className="mx-auto p-2 text-center ">
                  <div className="grid grid-cols-12 items-start mx-auto p-2">
                    <div className="col-span-12 sm:col-span-12 md:col-span-8 lg:col-span-8 pb-2 min-w-full">
                      {state.products && (
                        <Filter
                          count={state.products.length}
                          filter={state.filter}
                          sort={state.sort}
                          filterProducts={filterProducts}
                          sortProducts={sortProducts}
                        />
                      )}

                      <Products
                        products={state.products}
                        addToCart={addToCart}
                      />
                    </div>

                    <div className="col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-4 pb-2">
                      <Cart
                        cartItems={state.cartItems}
                        removeFromCart={removeFromCart}
                        createOrder={createOrder}
                      />
                    </div>
                  </div>
                </div>
              </main>
            </>
          ) : (
            <div className="preloader">
              <div className="loader"></div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  let firebase = loadFirebase();

  let products = await new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("products")
      .limit(10)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((doc) => {
          data.push(
            Object.assign(
              {
                id: doc.id,
              },
              doc.data()
            )
          );
        });
        resolve(data);
      })
      .catch(() => {
        reject([]);
      });
  });

  return {
    props: {
      products,
    },
  };
}

export default index;

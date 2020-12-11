import Head from "next/head";
import { productos } from "pages/api";
import Producto from "components/Producto";
export default function index() {
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
          {productos &&
            productos.map((producto, index) => {
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
                  {...producto}
                />
              );
            })}
        </section>
        <style jsx>{`
          section {
            padding: 2em;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            grid-gap: 1em;
            justify-content: center;
            align-items: center;
            align-content: center;
          }
        `}</style>
      </main>
    </div>
  );
}

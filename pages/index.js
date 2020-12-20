import Head from "next/head";
import Reveal from "react-reveal/Reveal";
import Slide from "react-reveal/Slide";
import { MdMonetizationOn, MdSecurity, MdCheckCircle } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container min-w-full">
      <Head>
        <title>Visol</title>
        <link rel="icon" href="favicon.ico" />
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
      <header
        id="up"
        className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative bg-heropattern"
      >
        <div className="h-screen bg-opacity-20 bg-black flex items-center justify-center">
          <div className="mx-2 text-center">
            <div className="flex items-center justify-center ">
              <img src="./visol.png" alt="logo" className="w-90 h-75" />
            </div>
            <Reveal bottom>
              <h2 className="text-white font-extrabold text-3xl xs:text-3xl md:text-3xl leading-tight">
                Productos de Purificación de Agua y Productos de Limpieza
              </h2>
            </Reveal>
            <div className="inline-flex">
              <Link href="/productos">
                <a>
                  <button className="p-2 my-5 mx-2 bg-blue-900 hover:bg-orange-500 font-bold text-white rounded border-2 border-transparent hover:border-orange-500 shadow-md transition duration-500 md:text-xl">
                    Ver Productos!
                  </button>
                </a>
              </Link>
              <Link href="/contactenos">
                <a>
                  <button className="p-2 my-5 mx-2 bg-blue-900 hover:bg-orange-500 font-bold text-white rounded border-2 border-transparent hover:border-orange-500 shadow-md transition duration-500 md:text-xl">
                    Contactanos
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section className="text-white bg-blue-900 lg:p-20 h-full">
        <Reveal bottom>
          <div className="w-full py-10">
            <div className="text-center ">
              <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                ¿Quiénes somos?
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                En Visol estamos comprometidos con nuestros clientes, Por eso
                ofrecemos los productos de más alta calidad del mercado.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </Reveal>
        <div className="flex flex-wrap  w-full overflow-hidden items-stretch h-full ">
          <Reveal bottom>
            <div className="my-3 px-3 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 max-h-full">
              <div className="pattern-dots-md text-gray-600 gray-light ">
                <div className="rounded bg-white p-4 transform ">
                  <div className="flex-grow text-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                      <MdCheckCircle className="w-10 h-10" />
                    </div>
                    <h2 className=" text-xl text-center title-font font-medium mb-3">
                      Calidad
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nam obcaecati laudantium recusandae, debitis eum
                      voluptatem ad, illo voluptatibus temporibus odio
                      provident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal bottom>
            <div className="my-3 px-3 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 max-h-full">
              <div className="pattern-dots-md text-gray-600 gray-light">
                <div className="rounded bg-white p-4 transform ">
                  <div className="flex-grow text-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                      <MdMonetizationOn className="w-10 h-10" />
                    </div>
                    <h2 className=" text-xl title-font font-medium mb-3">
                      Excelentes Precios
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nam obcaecati laudantium recusandae, debitis eum
                      voluptatem ad, illo voluptatibus temporibus odio
                      provident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal bottom>
            <div className="my-3 px-3 w-full overflow-hidden sm:w-full md:w-1/3 lg:w-1/3 xl:w-1/3 max-h-full">
              <div className="pattern-dots-md text-gray-600 gray-light">
                <div className="rounded bg-white p-4 transform ">
                  <div className="flex-grow text-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                      <MdSecurity className="w-10 h-10" />
                    </div>
                    <h2 className=" text-xl title-font font-medium mb-3">
                      Garantía
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nam obcaecati laudantium recusandae, debitis eum
                      voluptatem ad, illo voluptatibus temporibus odio
                      provident.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="bg-center bg-fixed bg-no-repeat bg-cover relative bg-banner">
        <div className="min-h-full lg:p-10 bg-opacity-20 bg-black flex items-center justify-center ">
          <div className="container mx-auto px-6 sm:px-12 lg:py-6 xl:py-16 relative flex flex-col sm:flex-row">
            <Slide left cascade>
              <div className="sm:w-1/2 sm:pt-8 lg:pt-16 pb-8 sm:pb-16 lg:pb-32 relative z-30">
                <h2 className="uppercase text-orange-500 font-bold tracking-wider text-2xl">
                  Promoción Especial en
                </h2>
                <h1 className="uppercase font-black text-white leading-none tracking-wider mb-6 mt-4 text-5xl lg:text-6xl xl:text-7xl ">
                  Productos de Limpieza{" "}
                </h1>
                <p className="text-black  text-lg sm:w-2/3 lg:w-1/2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                  obcaecati laudantium recusandae, debitis eum voluptatem ad,
                  illo voluptatibus temporibus odio provident.
                </p>
              </div>
            </Slide>
            <Slide right cascade>
              <div className="sm:w-1/2 lg:w-2/3 relative sm:absolute bottom-0 right-0 ">
                <img
                  className="absolute left-0 right-0 w-full h-full object-contain bg-center z-10 bg-no-repeat"
                  src="/hero/banner.jpg"
                />
                <div className="bg-blue-900 absolute inset-0 mt-16 -ml-8"></div>
                <svg
                  className="relative z-20 pt-8 -ml-0"
                  xmlns="http://www.w3.org/2000/svg"
                  dataName="Capa 1"
                  viewBox="0 0 428.29 298.11"
                >
                  <defs />
                  <circle cx="1.75" cy="296.36" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="286.99" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="277.62" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="268.26" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="258.89" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="249.53" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="240.16" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="230.8" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="221.43" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="212.06" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="202.7" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="193.33" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="183.97" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="174.6" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="165.23" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="155.87" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="146.5" r="1.75" fill="#f16722" />
                  <circle cx="1.75" cy="137.14" r="1.75" fill="#f16722" />
                  <path
                    fill="#f16722"
                    d="M1.75 126A1.75 1.75 0 110 127.77 1.75 1.75 0 011.75 126zM1.75 116.65A1.76 1.76 0 110 118.41a1.75 1.75 0 011.75-1.76zM10.78 294.6A1.76 1.76 0 119 296.36a1.76 1.76 0 011.78-1.76zM10.78 285.24A1.75 1.75 0 119 287a1.75 1.75 0 011.78-1.76zM10.78 275.87A1.76 1.76 0 119 277.62a1.76 1.76 0 011.78-1.75zM10.78 266.51A1.75 1.75 0 119 268.26a1.75 1.75 0 011.78-1.75zM10.78 257.14A1.75 1.75 0 119 258.89a1.75 1.75 0 011.78-1.75zM10.78 247.77A1.76 1.76 0 119 249.53a1.76 1.76 0 011.78-1.76zM10.78 238.41A1.75 1.75 0 119 240.16a1.75 1.75 0 011.78-1.75zM10.78 229A1.76 1.76 0 119 230.8a1.76 1.76 0 011.78-1.8zM10.78 219.68A1.75 1.75 0 119 221.43a1.75 1.75 0 011.78-1.75zM10.78 210.31A1.76 1.76 0 119 212.06a1.76 1.76 0 011.78-1.75zM10.78 201A1.75 1.75 0 119 202.7a1.75 1.75 0 011.78-1.7zM10.78 191.58A1.75 1.75 0 119 193.33a1.75 1.75 0 011.78-1.75zM10.78 182.21A1.76 1.76 0 119 184a1.76 1.76 0 011.78-1.79zM10.78 172.85A1.75 1.75 0 119 174.6a1.75 1.75 0 011.78-1.75zM10.78 163.48A1.76 1.76 0 119 165.23a1.76 1.76 0 011.78-1.75zM10.78 154.12A1.75 1.75 0 119 155.87a1.75 1.75 0 011.78-1.75zM10.78 144.75A1.75 1.75 0 119 146.5a1.76 1.76 0 011.78-1.75zM10.78 135.39A1.75 1.75 0 119 137.14a1.75 1.75 0 011.78-1.75zM10.78 126A1.75 1.75 0 119 127.77a1.75 1.75 0 011.78-1.77zM10.78 116.65A1.76 1.76 0 119 118.41a1.76 1.76 0 011.78-1.76z"
                  />
                  <circle cx="19.82" cy="296.36" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="286.99" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="277.62" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="268.26" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="258.89" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="249.53" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="240.16" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="230.8" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="221.43" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="212.06" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="202.7" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="193.33" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="183.97" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="174.6" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="165.23" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="155.87" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="146.5" r="1.75" fill="#f16722" />
                  <circle cx="19.82" cy="137.14" r="1.75" fill="#f16722" />
                  <path
                    fill="#f16722"
                    d="M19.82 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM19.82 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76z"
                  />
                  <circle cx="28.85" cy="296.36" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="286.99" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="277.62" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="268.26" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="258.89" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="249.53" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="240.16" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="230.8" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="221.43" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="212.06" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="202.7" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="193.33" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="183.97" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="174.6" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="165.23" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="155.87" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="146.5" r="1.75" fill="#f16722" />
                  <circle cx="28.85" cy="137.14" r="1.75" fill="#f16722" />
                  <path
                    fill="#f16722"
                    d="M28.85 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM28.85 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 294.6a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 285.24a1.75 1.75 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 275.87a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 266.51a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 257.14a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 247.77a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 238.41a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 229a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 219.68a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 210.31a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 201a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 191.58a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 182.21a1.76 1.76 0 11-1.75 1.79 1.76 1.76 0 011.75-1.79zM37.88 172.85a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 163.48a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 154.12a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 144.75a1.75 1.75 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 135.39a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 116.65a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76z"
                  />
                  <path
                    fill="#fff"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.219"
                    d="M387.79 245.93l5.49 5.49-5.49 5.49v-10.98z"
                  />
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.219"
                    d="M62.79 256.91l-5.49-5.49 5.49-5.49v10.98z"
                  />
                </svg>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="w-full h-full lg:p-20 bg-blue-900 flex flex-wrap self-center items-center justify-center">
        <Reveal bottom>
          <div className="w-full py-10">
            <div className="text-center text-white">
              <h1 className=" title-font  mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
                ¿Que opinan nuestros Clientes?
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-orange-500 inline-flex"></div>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal bottom>
          <div className="p-5 lg:w-1/3 xl:w-1/3 w-80 m-10 rounded-lg bg-white shadow-lg text-gray-800">
            <div className="pt-1 pb-5 ">
              <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" mb-10">
              <div className="text-3xl text-orange-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm text-gray-600 text-center px-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
                voluptatibus temporibus odio provident.
              </p>
              <div className="text-3xl text-orange-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-orange-500 font-bold text-center">
                Scott Windon
              </p>
              <p className="text-xs text-gray-500 text-center">@scott.windon</p>
            </div>
          </div>
        </Reveal>{" "}
        <Reveal bottom>
          <div className="p-5 lg:w-1/3 xl:w-1/3 w-80 m-10 rounded-lg bg-white shadow-lg text-gray-800">
            <div className="pt-1 pb-5 ">
              <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" mb-10">
              <div className="text-3xl text-orange-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm text-gray-600 text-center px-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
                voluptatibus temporibus odio provident.
              </p>
              <div className="text-3xl text-orange-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-orange-500 font-bold text-center">
                Scott Windon
              </p>
              <p className="text-xs text-gray-500 text-center">@scott.windon</p>
            </div>
          </div>
        </Reveal>{" "}
        <Reveal bottom>
          <div className="p-5 lg:w-1/3 xl:w-1/3 w-80 m-10 rounded-lg bg-white shadow-lg text-gray-800">
            <div className="pt-1 pb-5 ">
              <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/15.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className=" mb-10">
              <div className="text-3xl text-orange-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-sm text-gray-600 text-center px-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad, illo
                voluptatibus temporibus odio provident.
              </p>
              <div className="text-3xl text-orange-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-orange-500 font-bold text-center">
                Scott Windon
              </p>
              <p className="text-xs text-gray-500 text-center">@scott.windon</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

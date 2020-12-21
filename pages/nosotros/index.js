export default function index() {
  return (
    <>
      <div id="ourprocess" className="relative">
        <div className="container mx-auto px-6 pt-6 pb-12 relative">
          <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">
            En Visol Ofrecemos Productos{" "}
            <span className="bg-primary h-1 w-20 block mt-4"></span>
          </h3>
          <div className="flex flex-col md:flex-row xl:px-32">
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">1</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Calidad
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">2</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Bajos Precios
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
            <div className="flex flex-col items-center md:px-6 lg:px-12">
              <span className="text-6xl text-primary">3</span>
              <h4 className="font-semibold text-2xl text-secondary mb-2">
                Garantia
              </h4>
              <p className="text-center text-secondary-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about-us" className="bg-blue-900 text-white mt-32 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 lg:pr-16">
              <img
                src="/assets/img1.png"
                className="-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="flex flex-col text-4xl text-secondary font-bold mb-6">
                Nosotros{" "}
                <span className="bg-primary h-1 w-20 block mt-4"></span>
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-lg text-secondary-700">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="services" className="relative">
        <div className="container mx-auto px-6 py-32 relative">
          <h3 className="flex flex-col items-center text-4xl text-secondary font-bold">
            Servicios Ofrecidos{" "}
            <span className="bg-primary h-1 w-20 block mt-4"></span>
          </h3>
          <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 md:mt-16 lg:mt-0">
            <img src="/assets/img2.png" className="md:w-1/3" />
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                Titulo 1
              </h4>
              <p className="text-secondary-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-secondary-700 text-lg">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non felis eu dui fermentum
                auctor. Aenean sed ante congue, facilisis ipsum eu, gravida
                lacus.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
            <div className="md:mr-16 xl:mr-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                Titulo 2
              </h4>
              <p className="text-secondary-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-secondary-700 text-lg">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non felis eu dui fermentum
                auctor. Aenean sed ante congue, facilisis ipsum eu, gravida
                lacus.
              </p>
            </div>
            <img src="/assets/img3.png" className="md:w-1/3 " />
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <img src="/assets/img4.png" className="md:w-1/3" />
            <div className="md:ml-16 xl:ml-32">
              <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
                Titulo 3
              </h4>
              <p className="text-secondary-700 text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                imperdiet est tellus, et consequat sem sodales id. Quisque
                molestie et mauris efficitur lacinia.
              </p>
              <p className="text-secondary-700 text-lg">
                Aliquam eget semper mi. Mauris magna risus, viverra in nulla id,
                placerat fermentum tellus. Aliquam non felis eu dui fermentum
                auctor. Aenean sed ante congue, facilisis ipsum eu, gravida
                lacus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

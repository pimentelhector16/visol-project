import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toaster from "toasted-notes";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();

  const { register, handleSubmit, errors } = useForm({
    criteriaMode: "all",
  });

  const onSubmit = (data) => {
    emailjs.init("user_kwCQU3k2jfNLYGqNONXRO");

    const serviceID = "service_mn48zz6";
    const templateID = "template_contact";

    var templateParams = {
      email: data.email,
      nombre: data.nombre,
      empresa: data.empresa,
      tel: data.tel,
      mensaje: data.mensaje,
    };

    emailjs.send(serviceID, templateID, templateParams).then(
      function () {
        toaster.notify(() => (
          <div className="p-2 bg-orange-500 text-white border-orange-500 rounded-md flex flex-column items-center">
            <span>Has enviado un mensaje a Visol.</span>
          </div>
        ));
        router.push("/");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="relative h-100 flex items-center justify-center bg-center bg-fixed bg-no-repeat bg-cover bg-heropattern ">
      <div className="w-full h-100  p-10 bg-opacity-30 bg-black flex items-center justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-xl sm:text-3xl text-gray-800 font-extrabold tracking-tight text-center">
                  ¿NECESITAS MÁS INFORMACIÓN?
                </h1>
                <p className="text-normal text-lg sm:text-1xl font-medium text-gray-600 mt-2 text-justify">
                  Agradecemos el interés que tienes por nosotros, te dejamos
                  varias formas para que te pongas en contacto:
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold ">
                    Guatemala, Guatemala.
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +502 5695 5110
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md sm:text-xs tracking-wide font-semibold w-full">
                    fabricaurbanavisol@gmail.com
                  </div>
                </div>
              </div>

              <form
                className="p-6 flex flex-col justify-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col">
                  <label for="nombre" className="hidden">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    ref={register({
                      required: true,
                      pattern: /^([a-zA-ZÁÉÍÓÚñáéíóú\s]*)+$/,
                    })}
                    placeholder="Nombre Completo"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />

                  {errors?.nombre?.types?.required && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo es obligatorio.
                    </p>
                  )}

                  {errors?.nombre?.types?.pattern && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo no es Válido
                    </p>
                  )}
                </div>

                <div className="flex flex-col mt-2">
                  <label for="empresa" className="hidden">
                    Nombre de la Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    id="empresa"
                    ref={register({
                      required: true,
                      pattern: /^([a-zA-ZÁÉÍÓÚñáéíóú\s]*)+$/,
                    })}
                    placeholder="Nombre de la Empresa"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                  {errors?.empresa?.types?.required && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo es obligatorio.
                    </p>
                  )}

                  {errors?.empresa?.types?.pattern && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo no es Válido
                    </p>
                  )}
                </div>

                <div className="flex flex-col mt-2">
                  <label for="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    ref={register({
                      required: true,
                      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                  {errors?.email?.types?.required && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo es obligatorio.
                    </p>
                  )}
                  {errors?.email?.types?.pattern && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo no es un Correo Válido
                    </p>
                  )}
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    ref={register({
                      required: true,
                      pattern: /^[0-9]/,
                      maxLength: 15,
                      minLength: 7,
                    })}
                    placeholder="Número de Teléfono"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                  {errors?.tel?.types?.required && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo es obligatorio
                    </p>
                  )}
                  {errors?.tel?.types?.minLength && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo debe tener más de 7 números
                    </p>
                  )}
                  {errors?.tel?.types?.maxLength && (
                    <p className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Este campo debe tener menos de 15 números
                    </p>
                  )}
                </div>
                <div className="flex flex-col mt-2">
                  <label for="mensaje" className="hidden">
                    Mensaje
                  </label>
                  <input
                    type="text"
                    name="mensaje"
                    id="mensaje"
                    ref={register({ required: true })}
                    placeholder="Mensaje"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  />
                  {errors.mensaje && (
                    <div className="w-full text-center font-bold text-white bg-red-500 rounded-md ">
                      Verifica. Este campo es Obligatorio.
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-blue-900 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-500 transition ease-in-out duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

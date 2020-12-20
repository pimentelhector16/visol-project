import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function index() {
  return (
    <div className="">
      <div className="">
        <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap items-center justify-center">
          <div className="p-10 w-50 ">
            <div className="text-xs uppercase text-gray-500 font-medium ">
              <img src="/visol.png" alt="Logo" className="w-60 h-36" />
            </div>
          </div>
          <div className="p-10 w-90 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              MAPA DEL SITIO
            </div>

            <Link href="/productos">
              <a className="my-3 block">
                Productos<span className="text-teal-600 text-xs p-1"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="my-3 block" href="/#">
                Nosotros <span className="text-teal-600 text-xs p-1"></span>
              </a>
            </Link>
            <Link href="/">
              <a className="my-3 block" href="/#">
                Contactenos
              </a>
            </Link>
          </div>
          <div className="p-10 w-90 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Contactanos
            </div>
            <a
              className="my-3 block flex items-center "
              href="tel:+50256955110"
            >
              <FaPhoneSquare className="text-lg text-blue-900" /> +502 5695 5110
            </a>
            <a className=" block flex items-center " href="/#">
              <MdEmail className="text-lg text-blue-900" />
              fabricaurbanavisol@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div
          className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm 
      md:flex-row max-w-6xl sm:flex-row sm:text-center"
        >
          <div className="mt-2">
            {new Date().getFullYear()}. Visol,Todos los Derechos Reservados.
            Diseño y desarrollo por NextHP
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex  text-4xl text-blue-900">
            <Link
              href="https://www.facebook.com/FabricaUrbanaVisol"
              className="hover:bg-orange-500"
            >
              <a>
                <FaFacebookSquare />
              </a>
            </Link>
            <Link
              href="https://www.instagram.com/visol.gt/"
              className="hover:bg-orange-500"
            >
              <a>
                <FaInstagramSquare />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

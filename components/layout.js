import { useState } from "react";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/solid";
import Link from "next/link";
import Sidebar from "./sidebar";

export default function Layout({ children, pageProps }) {
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      <nav className="sticky top-0 z-40 bg-white bg-opacity-90 ">
        <div className="mx-auto px-14 py-12">
          <div className="relative flex items-center justify-between h-full">
            <div className="absolute inset-y-0 right-0  flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => {
                  setMenuVisible(!menuVisible);
                }}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-12 w-auto"
                  src="/assets/images/logo.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-12 w-auto"
                  src="/assets/images/logo.svg"
                  alt="Workflow"
                />
              </div>
              <div className="flex-grow" />
              <div className="hidden sm:block sm:ml-6 flex-none">
                <div className="flex space-x-4">
                  <Link href="/business">
                    <a
                      className={
                        "hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium " +
                        (router.pathname === "/business"
                          ? "text-black"
                          : "text-gray-300")
                      }
                      aria-current="page"
                    >
                      Our Business
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      className={
                        "hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium " +
                        (router.pathname === "/about"
                          ? "text-black"
                          : "text-gray-300")
                      }
                    >
                      About Us
                    </a>
                  </Link>
                  <Link href="/news">
                    <a
                      className={
                        "hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium " +
                        (router.pathname === "/news"
                          ? "text-black"
                          : "text-gray-300")
                      }
                    >
                      News
                    </a>
                  </Link>
                  <Link href="/recruit">
                    <a
                      className={
                        "hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium " +
                        (router.pathname === "/recruit"
                          ? "text-black"
                          : "text-gray-300")
                      }
                    >
                      Recruit
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      className={
                        "hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium " +
                        (router.pathname === "/contact"
                          ? "text-black"
                          : "text-gray-300")
                      }
                    >
                      Contactus
                    </a>
                  </Link>
                </div>
              </div>
              <div className="flex pl-8">
                <MenuIcon className="text-gray-500 fill-current h-8 w-8"></MenuIcon>
              </div>
            </div>
          </div>
        </div>

        {menuVisible ? (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
              >
                Our Business
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                News
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Recruit
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact us
              </a>
            </div>

            <svg className="stroke-menu"></svg>
          </div>
        ) : (
          ""
        )}
      </nav>
      <Sidebar className="fixed"></Sidebar>
      <main>{children}</main>
      <footer className="footer-1 py-4 sm:py-4 border-t sticky bottom-0">
        <div className="container mx-auto px-4">
          <div className="sm:flex sm:flex-wrap sm:-mx-4">바닥글</div>
        </div>
      </footer>
    </div>
  );
}

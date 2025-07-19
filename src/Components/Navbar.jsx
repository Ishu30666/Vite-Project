import { FaHome, FaBars } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoIosHelpCircle, IoMdClose } from "react-icons/io";
import { useState } from "react";



export default function Navbar() {
  const MENUDATA = [
    { name: "Home", icon: <FaHome />, link: "/" },
    { name: "About", icon: <FaBuildingColumns />, link: "/about" },
    { name: "Services", icon: <MdMiscellaneousServices />, link: "/services" },
    { name: "Help", icon: <IoIosHelpCircle />, link: "/help" },
  ];

  const Auth = [
    { name: "Log In", link: "/login", css: "hover:bg-white hover:text-gray-800 border border-white text-white" },
    { name: "Sign Up", link: "/signup", css: "hover:bg-blue-600 bg-blue-500 text-white" },
  ]

  const [open, Setopen] = useState(true)

  return (
    <nav className="backdrop-blur-sm bg-gray-800/80 w-full shadow-md fixed top-0 left-0 z-50 px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <a
        href="/"
        className="text-white text-3xl font-bold tracking-wide hover:text-blue-500 transition-all duration-300"
      >
        Ishu
      </a>

      {/* Links */}
      <ul className="md:flex gap-8 items-center hidden ">
        {MENUDATA.map(({ name, icon, link }, index) => (
          <li key={index}>
            <a
              href={link}
              className="text-white hover:text-blue-300 text-base font-medium flex items-center gap-2 transition-all duration-200"
            >
              {icon}
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="md:flex items-center gap-3 hidden">
        {
          Auth.map(({ name, link, css }, index) => (
            <a href={link} key={index}>
              <button className={`px-4 py-2 rounded-full transition duration-300 ${css}`}>{name}</button>
            </a>
          ))
        }
      </div>

      {/* mobile view */}

      <div onClick={() => Setopen(!open)}
        className="md:hidden flex items-center gap-3 cursor-pointer">
        {
          open ? <FaBars /> : <IoMdClose />
        }

        {
          !open &&
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 absolute top-17 left-0 w-full px-4 py-2 flex flex-col items-center">
            <ul className="md:flex gap-10 items-center flex-col mb-3 ">
              {MENUDATA.map(({ name, icon, link }, index) => (
                <li key={index}>
                  <a
                    href={link}
                    className="text-white hover:text-blue-300 text-base font-medium flex items-center gap-2 transition-all duration-200"
                  >
                    {icon}
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* mobile button  */}

            <div className="flex items-center flex-col w-full gap-2 pb-2">
              {
                Auth.map(({ name, link, css }, index) => (
                  <a href={link} key={index}
                    className=" w-full">
                    <button className={`px-2 w-full py-2 rounded-full transition duration-300 hover:translate-y-[-3px] active:scale-95 ${css}`}>{name}</button>
                  </a>
                ))
              }
            </div>

          </div>
        }
      </div>

    </nav>
  );
}

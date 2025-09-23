// // import React from "react";
// // import { Button, Navbar, TextInput } from "flowbite-react";
// // import { Link, NavLink } from "react-router-dom";

// // import { AiOutlineSearch } from "react-icons/ai";
// // import { FaMoon } from "react-icons/fa";
// // export default function Header() {
// //   return (
// //     <Navbar className="border-b-2">
// //       <Link
// //         to="/"
// //         className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
// //       >
// //         <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
// //           Bilal's
// //         </span>
// //         Blog
// //       </Link>
// //       <form>
// //         <TextInput
// //           type="text"
// //           placeholder="Search..."
// //           rightIcon={AiOutlineSearch}
// //           className="hidden lg:inline"
// //         />
// //       </form>
// //       <Button className="w-12 h-10 lg:hidden" color="gray" pill>
// //         <AiOutlineSearch />
// //       </Button>
// //       <div className="flex gap-2 md:order-2">
// //         <Button
// //           className="w-12 h-10 hidden sm:inline"
// //           color="gray"
// //           pill
// //           // onClick={() => dispatch(toggleTheme())}
// //         >
// //           <FaMoon />
// //         </Button>
// //         <Link to="/sign-in">
// //           <Button
// //             className="text-amber-50 bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500"
// //             outline
// //           >
// //             Sign In
// //           </Button>
// //         </Link>
// //       </div>

// //       <NavLink
// //         to="/"
// //         className={({ isActive }) =>
// //           isActive
// //             ? "text-blue-600 font-bold underline"
// //             : "text-gray-700 hover:text-blue-600"
// //         }
// //       >
// //         Home
// //       </NavLink>
// //       <NavLink
// //         to="/about"
// //         className={({ isActive }) =>
// //           isActive
// //             ? "text-blue-600 font-bold underline"
// //             : "text-gray-700 hover:text-blue-600"
// //         }
// //       >
// //         About
// //       </NavLink>
// //       <NavLink
// //         to="/projects"
// //         className={({ isActive }) =>
// //           isActive
// //             ? "text-blue-600 font-bold underline"
// //             : "text-gray-700 hover:text-blue-600"
// //         }
// //       >
// //         Projects
// //       </NavLink>

// //       {/* <Navbar.Collapse>
// //         <Navbar.Link>
// //           <Link to="/">Home</Link>
// //         </Navbar.Link>
// //         <Navbar.Link>
// //           <Link to="/about">About</Link>
// //         </Navbar.Link>
// //         <Navbar.Link>
// //           <Link to="/projects">Projects</Link>
// //         </Navbar.Link>
// //       </Navbar.Collapse> */}
// //     </Navbar>
// //   );
// // }

// import React from "react";
// import { Button, Navbar, TextInput } from "flowbite-react";
// import { Link, NavLink } from "react-router-dom";

// import { AiOutlineSearch } from "react-icons/ai";
// import { FaMoon } from "react-icons/fa";

// export default function Header() {
//   return (
//     <Navbar className="border-b-2">
//       {/* Logo / Brand */}
//       <Link
//         to="/"
//         className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//       >
//         <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//           Bilal's
//         </span>
//         Blog
//       </Link>

//       {/* Search Input (Desktop only) */}
//       <form>
//         <TextInput
//           type="text"
//           placeholder="Search..."
//           rightIcon={AiOutlineSearch}
//           className="hidden lg:inline"
//         />
//       </form>

//       {/* Search Button (Mobile only) */}
//       <Button className="w-12 h-10 lg:hidden" color="gray" pill>
//         <AiOutlineSearch />
//       </Button>

//       {/* Right Side (Moon + Sign In + Toggle) */}
//       <div className="flex gap-2 md:order-2">
//         <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
//           <FaMoon />
//         </Button>
//         <Link to="/sign-in">
//           <Button
//             className="text-amber-50 bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500"
//             outline
//           >
//             Sign In
//           </Button>
//         </Link>
//         {/* Toggle Button (Hamburger) */}
//         <Navbar.Toggle />
//       </div>

//       {/* Collapsible Links */}
//       <Navbar.Collapse>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-600 font-bold underline"
//               : "text-gray-700 hover:text-blue-600"
//           }
//         >
//           Home
//         </NavLink>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-600 font-bold underline"
//               : "text-gray-700 hover:text-blue-600"
//           }
//         >
//           About
//         </NavLink>
//         <NavLink
//           to="/projects"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-600 font-bold underline"
//               : "text-gray-700 hover:text-blue-600"
//           }
//         >
//           Projects
//         </NavLink>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Disclosure } from "@headlessui/react";
// import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FaMoon } from "react-icons/fa";

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-white border-b-2 dark:bg-gray-900">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16">
//               {/* Logo */}
//               <div className="flex-shrink-0 flex items-center">
//                 <Link
//                   to="/"
//                   className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//                 >
//                   <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//                     Bilal's
//                   </span>{" "}
//                   Blog
//                 </Link>
//               </div>

//               {/* Desktop menu */}
//               <div className="hidden md:flex items-center space-x-6">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-600 font-bold underline"
//                       : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                   }
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-600 font-bold underline"
//                       : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                   }
//                 >
//                   About
//                 </NavLink>
//                 <NavLink
//                   to="/projects"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-600 font-bold underline"
//                       : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                   }
//                 >
//                   Projects
//                 </NavLink>
//               </div>

//               {/* Right side icons */}
//               <div className="flex items-center space-x-2">
//                 <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700">
//                   <FaMoon className="text-gray-700 dark:text-gray-200" />
//                 </button>
//                 <Link to="/sign-in">
//                   <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500">
//                     Sign In
//                   </button>
//                 </Link>
//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
//                   {open ? (
//                     <AiOutlineClose className="h-6 w-6" />
//                   ) : (
//                     <AiOutlineMenu className="h-6 w-6" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           <Disclosure.Panel className="md:hidden px-4 pt-2 pb-3 space-y-1">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-blue-600 font-bold underline"
//                   : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-blue-600 font-bold underline"
//                   : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
//               }
//             >
//               About
//             </NavLink>
//             <NavLink
//               to="/projects"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-blue-600 font-bold underline"
//                   : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
//               }
//             >
//               Projects
//             </NavLink>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Disclosure } from "@headlessui/react";
// import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FaMoon } from "react-icons/fa";

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-white border-b-2 dark:bg-gray-900">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16 items-center">
//               {/* Logo */}
//               <div className="flex-shrink-0 flex items-center">
//                 <Link
//                   to="/"
//                   className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
//                 >
//                   <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
//                     Bilal's
//                   </span>{" "}
//                   Blog
//                 </Link>
//               </div>

//               {/* Desktop menu */}
//               <div className="hidden md:flex items-center space-x-6">
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-600 font-bold underline"
//                       : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                   }
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-600 font-bold underline"
//                       : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                   }
//                 >
//                   About
//                 </NavLink>
//                 <NavLink
//                   to="/projects"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-blue-600 font-bold underline"
//                       : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
//                   }
//                 >
//                   Projects
//                 </NavLink>
//               </div>

//               {/* Right side */}
//               <div className="flex items-center space-x-3">
//                 {/* Search input (separate) */}
//                 <div className="relative hidden sm:block">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
//                   />
//                   <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-300" />
//                 </div>

//                 {/* Dark mode */}
//                 <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
//                   <FaMoon className="text-gray-700 dark:text-gray-200" />
//                 </button>

//                 {/* Sign In */}
//                 <Link to="/sign-in">
//                   <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500">
//                     Sign In
//                   </button>
//                 </Link>

//                 {/* Mobile menu button */}
//                 <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
//                   {open ? (
//                     <AiOutlineClose className="h-6 w-6" />
//                   ) : (
//                     <AiOutlineMenu className="h-6 w-6" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           <Disclosure.Panel className="md:hidden px-4 pt-2 pb-3 space-y-1">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-blue-600 font-bold underline"
//                   : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
//               }
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-blue-600 font-bold underline"
//                   : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
//               }
//             >
//               About
//             </NavLink>
//             <NavLink
//               to="/projects"
//               className={({ isActive }) =>
//                 isActive
//                   ? "block text-blue-600 font-bold underline"
//                   : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
//               }
//             >
//               Projects
//             </NavLink>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }

import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Disclosure as="nav" className="bg-white border-b-2 dark:bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link
                  to="/"
                  className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
                >
                  <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    Bilal's
                  </span>{" "}
                  Blog
                </Link>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-bold underline"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  }
                >
                  Projects
                </NavLink>
              </div>

              {/* Right side */}
              <div className="flex items-center space-x-3">
                {/* Search input (desktop only) */}
                <div className="relative hidden sm:block">
                  <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                {/* Search button (mobile only) */}
                <button className="sm:hidden flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                  <AiOutlineSearch className="text-gray-700 dark:text-gray-200" />
                </button>

                {/* Dark mode */}
                <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600">
                  <FaMoon className="text-gray-700 dark:text-gray-200" />
                </button>

                {/* Sign In */}
                <Link to="/sign-in">
                  <button className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500 hover:opacity-90">
                    Sign In
                  </button>
                </Link>

                {/* Mobile menu button */}
                <Disclosure.Button className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                  {open ? (
                    <AiOutlineClose className="h-6 w-6" />
                  ) : (
                    <AiOutlineMenu className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden px-4 pt-2 pb-3 space-y-1">
            <NavLink
              active={path === "/"}
              as={"div"}
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-bold underline"
                  : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              active={path === "/about"}
              as={"div"}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-bold underline"
                  : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
              }
            >
              About
            </NavLink>
            <NavLink
              active={path === "/projects"}
              as={"div"}
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 font-bold underline"
                  : "block text-gray-700 dark:text-gray-300 hover:text-blue-600"
              }
            >
              Projects
            </NavLink>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

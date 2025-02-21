import { useEffect, useState } from "react";

import invensi from '../assets/images/invensi.png'


export const Navbar = () => {

  const [show, setShow] = useState(false)
  const [scroll, setScroll] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(false);
      setShowDropdown(false);
    });
  }, []);


  const handleClick = () => {
    setShow(!show);
  }

  let menuActive = show ? "left-0" : "left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setScroll(true)
        setShow(false)
      } else {
        setScroll(false)
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4"

  return <div className={`Navbar fixed w-full transition-all ${scrollActive}`}>
    <div className="container mx-auto px-4">
      <div className="navbar-box flex items-center justify-between">
        <div className="logo">
          <img src={invensi} alt="Logo" className="h-12 border border-spacing-10 max-h-12 w-auto object-contain" />
        </div>
        <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
          <li className="flex items-center gap-3">
            <i className="ri-home-2-line text-3xl md:hidden block"></i>
            <a href="#home" className="font-medium hover:text-sky-400">Home</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-information-line text-3xl md:hidden block"></i>
            <a href="#about" className="font-medium hover:text-sky-400">About</a>
          </li>

          <li className="relative">
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={handleDropdownClick} 
              >
                <i className="ri-more-line text-3xl md:hidden block"></i>
                <span className="font-medium hover:text-sky-400">Demo</span>
              </div>

              {/* Dropdown Items */}
              <ul
                className={`absolute left-0 mt-2 bg-white text-black rounded shadow-lg transition-all ${
                  showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                <li className="px-4 py-5 bg-sky-400 hover:text-white whitespace-nowrap">
                  <a href="https://siwas.invensi.id/catalog">Aplikasi Pengawasan Hewan</a>
                </li>
                <li className="px-4 py-5 bg-sky-400 hover:text-white whitespace-nowrap">
                  <a href="https://symba.invensi.id/login">Aplikasi Monitoring Batere</a>
                </li>
                <li className="px-4 py-5 bg-sky-400 hover:text-white whitespace-nowrap">
                  <a href="http://demo.mytroubleticket.site/log_in/login?from=home%2Findex%3Fn">Aplikasi Asset Management</a>
                </li>
                <li className="px-4 py-5 bg-sky-400 hover:text-white whitespace-nowrap">
                  <a href="https://sitakah.invensi.id/login">Aplikasi Pengelolaan Naskah</a>
                </li>
              </ul>
            </li>

          <li className="flex items-center gap-3">
            <i className="ri-settings-3-line text-3xl md:hidden block"></i>
            <a href="#services" className="font-medium hover:text-sky-400">Services</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-image-line text-3xl md:hidden block"></i>
            <a href="#proyek" className="font-medium hover:text-sky-400">Partner</a>
          </li>
          <li className="flex items-center gap-3">
            <i className="ri-service-fill text-3xl md:hidden block"></i>
            <a href="#client" className="font-medium hover:text-sky-400">Client</a>
          </li>


        </ul>
                
        <div className="social flex items-center gap-2">
          <a href="#footer" className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">Social Media</a>
          <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
        </div>
      </div>
    </div>
  </div>
}


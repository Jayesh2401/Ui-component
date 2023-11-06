import React, { useEffect } from "react";

function AnimatedNavbar() {
  // https://codepen.io/hitensharma/pen/dybryGE
  useEffect(() => {}, []);
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  hamburger?.addEventListener("click", () => {
    //Animate Links
    navLinks?.classList.toggle("open");
    links?.forEach((link) => {
      link?.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger?.classList.toggle("toggle");
  });

  return (
    <nav className="h-24 w-screen bg-[#131418]  shadow-md flex fixed right-0 top-0 md:z-10 z-[3] text-white">
      <div className="logo py-[1vh] px-[1vw] text-center">
        <img
          src="https://www.mindinventory.com/static/media/logo-mind-inventory-w.8514e2e8.svg"
          alt="Logo Image"
          className="h-20 w-20"
        />
      </div>
      <div className="hamburger hidden">
        <div className="line1 w-8 h-1 bg-[#f2f5f7] m-1 transition-all duration-350 ease-linear "></div>
        <div className="line2 line1 w-8 h-1 bg-[#f2f5f7] m-1 transition-all duration-350 ease-linear"></div>
        <div className="line3 line1 w-8 h-1 bg-[#f2f5f7] m-1 transition-all duration-350 ease-linear"></div>
      </div>
      <ul className="nav-links  flex list-none w-[88vw] py-0 px-[0.7vw] justify-evenly items-center uppercase">
        <li className="relative">
          <a
            href="#"
            className="decoration-0 my-0 mx-[0.7vw] hover:text-[#61DAFB] before:block before:content-[''] before:h-[3px] before:w-0 before:bg-[#61DAFB] before:absolute before:transition-all before:duration-250 before:top-0 before:left-[10%] hover:before:w-4/5"
          >
            Home
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="decoration-0 my-0 mx-[0.7vw] hover:text-[#61DAFB] before:block before:content-[''] before:h-[3px] before:w-0 before:bg-[#61DAFB] before:absolute before:transition-all before:duration-250 before:top-0 before:left-[10%] hover:before:w-4/5"
          >
            Solutions
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="decoration-0 my-0 mx-[0.7vw] hover:text-[#61DAFB] before:block before:content-[''] before:h-[3px] before:w-0 before:bg-[#61DAFB] before:absolute before:transition-all before:duration-250 before:top-0 before:left-[10%] hover:before:w-4/5"
          >
            Products
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="decoration-0 my-0 mx-[0.7vw] hover:text-[#61DAFB] before:block before:content-[''] before:h-[3px] before:w-0 before:bg-[#61DAFB] before:absolute before:transition-all before:duration-250 before:top-0 before:left-[10%] hover:before:w-4/5"
          >
            Services
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="decoration-0 my-0 mx-[0.7vw] hover:text-[#61DAFB] before:block before:content-[''] before:h-[3px] before:w-0 before:bg-[#61DAFB] before:absolute before:transition-all before:duration-250 before:top-0 before:left-[10%] hover:before:w-4/5"
          >
            Contact Us
          </a>
        </li>
        <li className="relative">
          <button className="login-button bg-transparent  border-[1.5px] border-[#f2f5f7] rounded-[2em] py-[0.6rem] px-[0.8rem] ml-[2vw] text-base cursor-pointer  hover:text-[#131418] hover:bg-[#f2f5f7] hover:border[1.5px] hover:border-[#f2f5f7] hover:transition-all hover:duration-350  ">
            Login
          </button>
        </li>
        <li className="relative">
          <button className="join-button bg-[#61DAFB] text-[#131418]   border-[1.5px] border-[#61DAFB] rounded-[2em] py-[0.6rem] px-[0.8rem] ml-[2vw] text-base cursor-pointer  hover:text-[#f2f5f7] hover:bg-transparent hover:border[1.5px] hover:border-[#f2f5f7] hover:transition-all hover:duration-350 ">
            Join
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default AnimatedNavbar;

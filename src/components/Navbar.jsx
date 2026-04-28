import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../generic/Container";

const Navbar = () => {
  const navigate = useNavigate();
  const [sidebarshow, setsidebarshow] = React.useState(false);
  const NavData = [
    { href: "/home", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/product", label: "Products" },
    { href: "/category", label: "Category" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <Container version="v0" className="bg-white relative navbar">
      <div
        className={
          sidebarshow === true
            ? "fixed h-100 hidden md-block sm-block z-99 navview"
            : "fixed h-100 hidden md-block sm-block z-99 navhide"
        }
      >
        <div className="bg-white b-shadow w-80 h-100 absolute right-0 top-0">
          <div className="bg-secondary p-16">
            <div className="flex items-center justify-between gap-4">
              <p className="headpara-text text-white">Mayur Computers</p>
              <div onClick={() => setsidebarshow(false)}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="var(--white)"
                  strokeWidth="2"
                  fill="none"
                  className="flex cursor-pointer"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-16">
            {NavData.map((item) => (
              <>
                <div className="px-20 py-18 bordb" key={item?.label}>
                  <NavLink
                    to={item?.href}
                    activeClass="active"
                    className="text-gray flex items-center gap-8 cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="flex"
                    >
                      <polyline points="15 10 20 15 15 20"></polyline>
                      <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
                    </svg>
                    <p
                      className="my-0 ml-6 headpara-text font-500"
                      onClick={() => setsidebarshow(false)}
                    >
                      {item?.label}
                    </p>
                  </NavLink>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-secondary flex sm-block justify-between items-center p-20">
        <div className="flex sm-hidden gap-8 items-center">
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            stroke="var(--white)"
            strokeWidth="2"
            fill="none"
            className="flex text-white"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <p className="text-white small-text flex items-center gap-8">
            We Will Grow Your Small Business To The Next Level
          </p>
        </div>
        <div className="flex sm-block gap-8 items-center">
          <a
            href="tel:+919867264193"
            className="text-white para-text mr-12 sm-mr-1 flex items-center gap-8"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="var(--white)"
              strokeWidth="2"
              fill="none"
              className="flex text-white"
            >
              <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +91-9867264193
          </a>
          <p className="text-white para-text sm-hidden">|</p>
          <a
            href="mailto:mayur.computers2012@gmail.com"
            className="text-white para-text ml-12 sm-ml-1 sm-mt-12 flex items-center gap-8"
            aria-label="Send email to mayur.computers2012@gmail.com"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="var(--white)"
              strokeWidth="2"
              fill="none"
              className="flex text-white"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            mayur.computers2012@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between py-12 px-20">
        <NavLink to="/home">
          <img
            src="https://image1.jdomni.in/storeLogo/11012020/86/08/D1/E224BC336DAF85A7C455301446_1578736750581.png?output-format=webp"
            className="object-cover flex"
            style={{ height: "50px" }}
          />
        </NavLink>
        <div className="flex sm-hidden items-center gap-8">
          {NavData.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              activeClass="active"
              className="para-text text-gray font-500 mx-14 cursor-pointer"
            >
              {item.label}
            </NavLink>
          ))}
          <a href="tel:+919867264193">
            <button className="cursor-pointer px-25 py-11 para-text font-400 text-white bg-warning border-0 rounded-5 ml-12">
              Get A Quote
            </button>
          </a>
        </div>
        <div className="hidden sm-flex gap-12">
          <svg
            viewBox="0 0 26 26"
            width="36"
            height="36"
            stroke="var(--gray)"
            strokeWidth="2"
            fill="none"
            className="cursor-pointer flex"
            onClick={() => setsidebarshow(true)}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Container from "../generic/Container";
import Button from "../generic/Button";

const ProductsMenu = ({ menuItems }) => (
  <>
    <div className="bg-forth px-15 pt-15 pb-40">
      <img
        src="https://www.zegocloud.com/_nuxt/img/nav_pic_pricing@2x.549fcd3.jpg"
        alt="Products"
        className="flex w-full h-200 object-cover rounded-5"
      />
      <h4 className="mid-text text-dark font-500 pt-20">Success Stories</h4>
      <p className="small-text text-gray font-400 mt-6">
        See what customers are building with ZEGOCLOUD - The Trusted Platform.
      </p>
      <p className="small-text text-secondary font-400 mt-6 cursor-pointer">
        Learn More
      </p>
    </div>
    <div className="px-15 pt-15 pb-40">
      <p className="text-gray small-text font-500">Get Started</p>
      <div className="grid grid-cols-1 gap-12 mt-12">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="py-10 px-15 cursor-pointer hover:bg-forth"
            style={{ backgroundColor: index === 0 ? "#fafafa" : "transparent" }}
          >
            <p className="text-dark small-text font-500">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

const IndustryMenu = ({ menuItems }) => (
  <>
    <div className="bg-forth px-15 pt-15 pb-40">
      <img
        src="https://www.zegocloud.com/_nuxt/img/nav_pic_pricing@2x.549fcd3.jpg"
        alt="Products"
        className="flex w-full h-200 object-cover rounded-5"
      />
      <h4 className="mid-text text-dark font-500 pt-20">Success Stories</h4>
      <p className="small-text text-gray font-400 mt-6">
        See what customers are building with ZEGOCLOUD - The Trusted Platform.
      </p>
      <p className="small-text text-secondary font-400 mt-6 cursor-pointer">
        Learn More
      </p>
    </div>
    <div className="px-15 pt-15 pb-40">
      <p className="text-gray small-text font-500">Entertainment</p>
      <div className="grid grid-cols-1 gap-12 mt-12">
        {["Social Games", "Live Streaming", "Online Karaoke"].map((item) => (
          <div key={item} className="py-10 px-15 cursor-pointer hover:bg-forth">
            <p className="text-dark small-text font-500">{item}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="px-15 pt-15 pb-40">
      <p className="text-gray small-text font-500">Education</p>
      <div className="grid grid-cols-1 gap-12 mt-12">
        {["Virtual Classroom", "1v1 Tutoring", "LMS Integration"].map(
          (item) => (
            <div
              key={item}
              className="py-10 px-15 cursor-pointer hover:bg-forth"
            >
              <p className="text-dark small-text font-500">{item}</p>
            </div>
          ),
        )}
      </div>
    </div>
  </>
);

const MegaMenuContent = React.memo(({ label, menuItems }) => {
  switch (label) {
    case "Products":
      return <ProductsMenu menuItems={menuItems} />;
    case "Industry":
      return <IndustryMenu menuItems={menuItems} />;
    default:
      return null;
  }
});

const Navbar = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = React.useState(null);

  const menuItems = [
    "Video Call",
    "Audio Call",
    "Screen Share",
    "Conference",
    "Recording",
  ];

  const NavData = [
    { href: "/home", label: "Home" },
    { href: "/about-us", label: "About Us" },
    {
      label: "Products",
      hasMegaMenu: true,
      width: "650px",
      cols: "grid-cols-2",
    },
    { href: "/category", label: "Category" },
    {
      label: "Industry",
      hasMegaMenu: true,
      width: "960px",
      cols: "grid-cols-3",
    },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <div className="navbar bg-white">
      <Container version="v1">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-8">
            <NavLink to="/home">
              <img
                src="https://www.zegocloud.com/_nuxt/img/nav_zegocloud_logo@2x.8c52173.png"
                className="object-contain flex"
                style={{ height: "65px", width: "150px" }}
                alt="Logo"
              />
            </NavLink>

            <div className="flex sm-hidden items-center ml-45">
              {NavData?.map((item, i) => (
                <div
                  key={i}
                  className="relative flex items-center"
                  onMouseEnter={() =>
                    item?.hasMegaMenu && setActiveMenu(item?.label)
                  }
                  onMouseLeave={() => setActiveMenu(null)}
                  style={{ height: "65px" }}
                >
                  {!item?.hasMegaMenu ? (
                    <NavLink
                      to={item?.href}
                      className="small-text text-dark font-500 px-20 py-6 cursor-pointer"
                    >
                      {item?.label}
                    </NavLink>
                  ) : (
                    <p className="small-text text-dark font-500 px-20 py-6 cursor-pointer">
                      {item?.label}
                    </p>
                  )}

                  {item?.hasMegaMenu && activeMenu === item?.label && (
                    <div
                      className="absolute z-50 bg-white"
                      style={{
                        top: "100%",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div
                        className={`grid ${item?.cols} items-start`}
                        style={{ width: item?.width }}
                      >
                        <MegaMenuContent
                          label={item?.label}
                          menuItems={menuItems}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8">
            <Button text="Talk to Us" version="v2" bg="warning" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

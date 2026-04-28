import React from "react";
import Container from "../../../generic/Container";
import Button from "../../../generic/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const [swiper, setSwiper] = React.useState(null);
  const [isBeginning, setIsBeginning] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);
  return (
    <>
      <Container version="v0" className="">
        <div className="relative swiper-container h-650">
          <Button
            text={
              <>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="flex"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </>
            }
            version="v0"
            bg="white"
            color="dark"
            onClick={() => swiper?.slidePrev()}
            style={{
              position: "absolute",
              top: "50%",
              left: "10px",
              transform: "translateY(-50%)",
              zIndex: 99,
              opacity: isBeginning ? 0.4 : 1,
              pointerEvents: isBeginning ? "none" : "auto",
              cursor: isBeginning ? "not-allowed" : "pointer",
            }}
          />
          <Button
            text={
              <>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="flex"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </>
            }
            version="v0"
            bg="white"
            color="dark"
            className="next-btn z-99 absolute"
            onClick={() => swiper?.slideNext()}
            style={{
              position: "absolute",
              top: "50%",
              right: "10px",
              transform: "translateY(-50%)",
              zIndex: 99,
              opacity: isEnd ? 0.4 : 1,
              pointerEvents: isEnd ? "none" : "auto",
              cursor: isEnd ? "not-allowed" : "pointer",
            }}
          />

          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            loop={false}
            onSwiper={setSwiper}
            onSlideChange={(s) => {
              setIsBeginning(s.isBeginning);
              setIsEnd(s.isEnd);
            }}
          >
            <SwiperSlide>
              <div className="relative">
                <img
                  src="https://demo.web3canvas.com/themeforest/offshore/images/slider1.jpg"
                  alt="Banner"
                  className="w-full object-cover h-650 bg-forth filter-b4"
                />
                <div className="w-40 absolute top-0 left-0 container mx-auto h-650 flex items-center">
                  <div>
                    <h1 className="head-text text-white font-600">
                      Empower Your App with Interactive Live Streaming SDK
                    </h1>
                    <p className="headpara-text text-white font-500 mt-30">
                      Embed scalable interactive live streaming into your
                      platforms with our fully customizable and
                      easy-to-integrate live streaming SDK.
                    </p>
                    <Button
                      text="Start Building"
                      version="v1"
                      className="mt-40"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative">
                <img
                  src="https://demo.web3canvas.com/themeforest/offshore/images/slider2.jpg"
                  alt="Banner"
                  className="w-full object-cover h-650 bg-forth filter-b4"
                />
                <div className="w-40 absolute top-0 left-0 container mx-auto h-650 flex items-center">
                  <div>
                    <h1 className="head-text text-white font-600">
                      Empower Your App with Interactive Live Streaming SDK
                    </h1>
                    <p className="headpara-text text-white font-500 mt-30">
                      Embed scalable interactive live streaming into your
                      platforms with our fully customizable and
                      easy-to-integrate live streaming SDK.
                    </p>
                    <Button
                      text="Start Building"
                      version="v1"
                      className="mt-40"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>

      <Container version="v1" className="py-60">
        <div className="flex items-center gap-12 w-full">
          <div className="w-50">
            <h1 className="head-text text-dark font-600">
              Empower Your App with Interactive Live Streaming SDK
            </h1>
            <p className="headpara-text text-dark font-500 mt-30">
              Embed scalable interactive live streaming into your platforms with
              our fully customizable and easy-to-integrate live streaming SDK.
            </p>
            <Button text="Start Building" version="v1" className="mt-40" />
          </div>
          <div className="w-50 grid-cols-2 items-center gap-8">
            <div>
              <img
                src="https://www.zegocloud.com/_nuxt/img/live_woman.1489130.png"
                alt="Banner"
                className="w-full object-contain h-400"
              />
            </div>
            <div>
              <img
                src="https://www.zegocloud.com/_nuxt/img/im_01.5ea3a61.png"
                alt="Banner"
                className="w-full object-contain"
              />
              <img
                src="https://www.zegocloud.com/_nuxt/img/im_02.cdf51c8.png"
                alt="Banner"
                className="w-full object-contain my-10"
              />
              <img
                src="https://www.zegocloud.com/_nuxt/img/img_banner_livecode@2x.67accc8.png"
                alt="Banner"
                className="w-full object-contain h-200"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;

import "./css/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";
import CountUp from "react-countup";
import { useMediaQuery } from "react-responsive";

import data from "../../../../data/Home-page/data";
import background from "../../../../assets/images/background.jpg";

import ProductCard from "./components/Card/ProductCard";
import VideoPlayer from "./components/VideoCard/Video";

// Swiper
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Banner() {
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1199 });
  const widgetContent = data.content[0];
  const product1 = data.products[0];
  const product2 = data.products[1];

  //Handling video click events
  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  //Handling video end events
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="mx-auto py-10 overflow-x-hidden ">
      {isPlaying ? (
        <div className=" relative pt-4 bg-primary xl:h-[48rem] w-screen mx-auto banner-container">
          <VideoPlayer onVideoEnd={handleVideoEnd} />
        </div>
      ) : (
        <div className="relative isolate overflow-hidden px-6 pt-16 space-y-4 sm:px-16  xl:grid xl:grid-cols-2  xl:pt-0">
          <div className="mx-auto flex flex-col items-center text-center  xl:max-w-xl xl:items-start xl:text-start xl:py-32  ">
            {/* Title & Des */}
            <div className="p-6">
              <h1 className=" text-4xl sm:text-8xl xl:text-7xl font-bold tracking-tight text-white leading-10 ">
                {widgetContent.title}
              </h1>
              <p className="mt-6 text-sm sm:text-lg xl:4xl leading-6 text-gray-700 ">
                {widgetContent.description}
              </p>
            </div>
            {/* GetStart button & Play button */}
            <div className="mt-10 pl-6 700  flex items-center justify-center gap-x-6 lg:justify-start cursor-pointer ">
              <Link
                to="/product"
                className="bg-white text-black font-bold rounded-[1rem]  px-4 py-4 text-sm xl:text-xl font-poppins  shadow-md hover:bg-gray-300 "
              >
                Get started
              </Link>
              <button
                onClick={handlePlayClick}
                className="text-sm font-semibold leading-6 text-black"
              >
                <div className=" text-white cursor-pointer relative text-4xl ">
                  <BsPlayCircle />
                </div>
              </button>
            </div>
            {/* cards */}
            <div className="pl-6 flex items-center justify-center ">
              <dl className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-2">
                {widgetContent.stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-sm leading-7 text-gray-700">
                      {stat.name}
                    </dt>
                    <dd className=" text-4xl xl:text-5xl font-bold leading-9 tracking-tight text-white">
                      <CountUp
                        start={0}
                        end={parseInt(`${stat.value}`)}
                        duration={8}
                      />
                      <a className="ml-1">+</a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Advertize cards & background */}

          <div className="flex flex-col flex-grow isolate items-center mx-auto sm:pt-0">
            <div className="mx-auto h-[20rem] w-[40rem] rounded-[50px] xl:mt-10 xl:h-[35rem] xl:w-[55rem] overflow-hidden xl:rounded-[150px] bg-white transition-all duration-300">
              <img
                src={background}
                alt=""
                className="h-full w-full object-cover object-center xl:w-full xl:h-full"
              />
            </div>
            <div className="relative  -mt-[35rem] ml-14 ">
              {isMobile ? (
                <Swiper
                  modules={[Navigation, Pagination, A11y, Autoplay]}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 4000,
                  }}
                  onSwiper={(swiper) => console.log(swiper)}
                  className=" max-w-[40rem] relative mr-14 mt-40"
                >
                  <SwiperSlide>
                    <div className="scale-50">
                      <ProductCard product={product1} />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="scale-50">
                      <ProductCard product={product2} />
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mr-4">
                  <div className="w-full sm:scale-75">
                    <ProductCard product={product1} />
                  </div>
                  <div className="w-full">
                    <ProductCard product={product2} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

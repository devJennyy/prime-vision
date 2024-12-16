import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { transitionEffect } from "../styles/GlobalStyles";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { heroShowcaseData, showcaseData } from "../data/showcaseData";
import { IoMdTime } from "react-icons/io";
import { mediaDetails } from "../data/detailsData";
import { FaStar } from "react-icons/fa6";

const Homepage = () => {
  const handleVideoPage = () => console.log("Play Video");
  const handleDownloadLinks = () => console.log("Download Links");
  const handleShareLinks = () => console.log("Share Links");
  return (
    <a id="homepage" className="sm:flex flex-col hidden">
      <div className="flex flex-col justify-center items-center w-full my-auto h-screen">
        <div className="w-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
          >
            {showcaseData?.map((slides) => {
              return (
                <SwiperSlide className="mb-10">
                  <a href="overview">
                    <img
                      src={slides?.imageCover}
                      className="bg-cover w-full max-w-[407px] h-[453px]"
                    />
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-[2rem] font-medium">Deadpool & Wolverine</p>
          <div className="flex justify-center items-center gap-5 text-sm font-light tracking-wide">
            <div className="flex items-center gap-2">
              <IoMdTime size={17} />
              <p>{mediaDetails?.duration}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaStar className="text-secondary" />
              <p>{mediaDetails?.ratingScore} (IMDb)</p>
            </div>
          </div>
          <div className="flex lg:gap-3 gap-2 mt-2">
            {heroShowcaseData?.genre?.map((data, index) => (
              <p
                key={index}
                className="text-white text-[12px] py-1 px-[14px] bg-nightFall rounded-full shadow-sm backdrop-blur-sm"
              >
                {data.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1440px] mx-auto 2xl:px-16 xl:px-10 px-5 fixed left-0 right-0 bottom-0 mb-7">
        <div className="border-t-2 border-silverAsh/10 mb-6"></div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start text-[12px] tracking-wider font-light gap-1">
            <p>2024 - Movie</p>
            <p>Deadpool & Wolverine</p>
          </div>
          <div className="flex h-11 gap-3">
            <button
              onClick={handleVideoPage}
              className={`flex justify-center items-center w-full px-4 border rounded-full text-white font-medium gap-1 hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
            >
              <IoPlay size={16} className="mb-[1px]" />
              <p className="text-sm font-normal">Watch Now</p>
            </button>
            <button
              onClick={handleDownloadLinks}
              className={`flex justify-center items-center h-full aspect-square text-white bg-softGray/10 rounded-full shadow-sm backdrop-blur-sm border border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
            >
              <LiaDownloadSolid size={22} />
            </button>
            <button
              onClick={handleShareLinks}
              className={`flex justify-center items-center h-full aspect-square text-white bg-softGray/10 rounded-full shadow-sm backdrop-blur-sm border border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
            >
              <AiOutlineShareAlt size={21} />
            </button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Homepage;

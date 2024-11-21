
import { IoPlay, IoSearch } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { heroShowcaseData, heroShowcaseImageData } from "../../data/showcaseData";
import { transitionEffect } from "../../styles/GlobalStyles";
import DarkModeToggle from "../ui/DarkModeToggle";

const Hero = () => {
  const handleVideoPage = () => {
    console.log("Play Video")
  }
  const handleDownloadLinks = () => {
    console.log("Download Links");
  };
  return (
    <div className="flex xl:flex-row flex-col w-full xl:h-[488px] h-full xl:gap-9 lg:gap-7 sm:gap-5 mt-24 lg:mt-40 sm:mt-32">
      <div className="flex gap-3 mb-6 sm:hidden">
        <div className="flex justify-between items-center pl-6 pr-4 w-full h-[41px] dark:hover:border-white/25 rounded-full dark:bg-nightFall border border-nightFall/50 dark:focus-within:border-white/80">
          <input
            placeholder="Search a title"
            className="w-full h-full bg-transparent outline-none pr-2 dark:text-white text-sm text-primary dark:placeholder-white/50 placeholder:text-sm placeholder:tracking-wide placeholder-primary/60 focus:text-primary dark:focus:text-white focus:ring-0"
          />
          <button className="flex items-center justify-center p-1">
            <IoSearch
              size={17}
              className={`dark:text-white/50 text-primary/60 dark:active:text-white dark:hover:text-white ${transitionEffect}`}
            />
          </button>
        </div>

        <DarkModeToggle />
      </div>
      <div className="flex justify-center items-center w-full flex-shrink sm:max-w-[1030px] max-w-[295px] xl:h-full sm:h-[488px] h-[154px] relative">
        <img
          src={heroShowcaseImageData?.primaryImageCover}
          alt="primary-image"
          className="w-full h-full object-cover bg-no-repeat sm:rounded-[2.5rem] rounded-2xl z-20"
        />
        <img
          src="/images/bg-gradient.png"
          alt="bg-gradient"
          className="absolute z-30 w-full h-full sm:block hidden"
        />
        <div className="sm:flex flex-col justify-between text-left w-full h-full py-6 lg:px-10 px-6 z-40 absolute hidden">
          <div className="py-2 px-4 bg-softGray/10 rounded-full w-fit shadow-sm backdrop-blur-sm">
            <p className="text-white text-sm">🔥 New Popular</p>
          </div>
          <div className="flex flex-col lg:w-1/2 sm:w-5/6 w-full gap-4 mb-3">
            <div className="flex gap-3">
              {heroShowcaseData?.genre?.map((data, index) => {
                return (
                  <p key={index} className="text-white text-sm py-1 px-[14px] bg-softGray/10 rounded-full w-fit shadow-sm backdrop-blur-sm">
                    {data.name}
                  </p>
                );
              })}
            </div>
            <p className="font-semibold text-[27px] ml-1 text-white">
             {heroShowcaseData?.title}
            </p>
            <p className="ml-1 mb-2 text-white">
              {heroShowcaseData?.shortDescription}
            </p>
            <div className="flex gap-3 ml-1">
              <button
                onClick={() => handleVideoPage()}
                className="flex justify-center items-center py-[15px] px-6 bg-white rounded-full text-primary font-medium gap-1"
              >
                <IoPlay size={18} className="mb-[1px]" /> <p>Watch Now</p>
              </button>
              <button
                onClick={() => handleDownloadLinks()}
                className="flex justify-center items-center py-[15px] px-6 text-white bg-softGray/10 rounded-full w-fit shadow-sm backdrop-blur-sm gap-1"
              >
                <LiaDownloadSolid size={18} className="mb-[2px]" />{" "}
                <p>Download</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex flex-1 xl:flex-col flex-row justify-between xl:min-w-[246px] xl:max-w-[246px] w-full h-full xl:gap-9 lg:gap-7 gap-5 hidden">
        <button className="flex justify-center items-center w-full xl:h-1/2 xl:max-h-full h-[226px] dark:bg-primary bg-lightSlate rounded-[2rem] overflow-hidden relative">
          <div className="z-30 w-full h-full absolute bg-gradient-to-tl from-black via-transparent to-transparent to-100%"></div>
          <img
            src={heroShowcaseImageData?.secondaryImageCover}
            alt="secondary-image"
            className="w-full h-full object-top object-cover rounded-[2.1rem]"
          />
        </button>
        <button className="flex justify-center items-center w-full xl:h-1/2 xl:max-h-full h-[226px] dark:bg-primary bg-lightSlate rounded-[2rem] overflow-hidden relative">
          <div className="z-30 w-full h-full absolute bg-gradient-to-tl from-black via-transparent to-transparent to-100%"></div>
          <div className="flex justify-center items-center z-30 absolute bg-white/40 p-3 rounded-full">
            <IoPlay size={32} className="text-white/80" />
          </div>
          <img
            src={heroShowcaseImageData?.trailerVideo}
            alt="trailer"
            className="w-full h-full object-top object-cover rounded-[2.1rem] z-20"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;

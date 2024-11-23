import { IoPlay} from "react-icons/io5";
import { heroShowcaseImageData } from "../../data/showcaseData";

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col w-full xl:h-[488px] h-full xl:gap-9 sm:gap-5 mt-24 xl:mt-36 lg:mt-[125px] sm:mt-[100px]">
      {/* <div className="flex gap-3 mb-6 sm:hidden">
        <div className="flex justify-between items-center pl-6 pr-4 w-full h-[41px] dark:hover:border-white/25 rounded-full dark:bg-nightFall border border-nightFall/50 dark:focus-within:border-white/80">
          <input
            placeholder="Search a title"
            className="w-full h-full bg-transparent outline-none pr-2 dark:text-white text-sm text-primary dark:placeholder-white/50 placeholder:font-light tracking-wide placeholder:text-sm placeholder:tracking-wide placeholder-primary/60 focus:text-primary dark:focus:text-white focus:ring-0"
          />
          <button className="flex items-center justify-center p-1">
            <IoSearch
              size={17}
              className={`dark:text-white/50 text-primary/60 dark:active:text-white dark:hover:text-white ${transitionEffect}`}
            />
          </button>
        </div>
      </div> */}
      <div className="flex justify-center items-center w-full flex-shrink sm:max-w-[1030px] xl:h-full sm:h-[488px] h-[154px] relative">
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
      </div>
      <div className="sm:flex flex-1 xl:flex-col flex-row justify-between xl:min-w-[246px] xl:max-w-[246px] w-full h-full xl:gap-9 gap-5 hidden">
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

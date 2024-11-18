
import { IoPlay } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { heroShowcaseData, heroShowcaseImageData } from "../../data/showcaseData";

const Hero = () => {
  const handleVideoPage = () => {
    console.log("Play Video")
  }
  const handleDownloadLinks = () => {
    console.log("Download Links");
  };
  return (
    <div className="flex w-full h-[488px] gap-9">
      <div className="flex justify-center items-center w-full max-w-[1030px] h-full dark:bg-primary bg-lightSlate rounded-5xl relative">
        <img
          src={heroShowcaseImageData?.primaryImageCover}
          alt="primary-image"
          className="w-full h-full object-cover bg-no-repeat rounded-[2.5rem] z-20"
        />
        <img
          src="/images/bg-gradient.png"
          alt="bg-gradient"
          className="absolute z-30"
        />
        <div className="flex flex-col justify-between text-left w-full h-full py-6 px-10 z-40 absolute">
          <div className="py-2 px-4 bg-softGray/10 rounded-full w-fit shadow-sm backdrop-blur-sm">
            <p className="text-white text-sm">🔥 New Popular</p>
          </div>
          <div className="flex flex-col w-1/2 gap-4 mb-3">
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
      <div className="flex flex-1 flex-col justify-between max-w-full h-full gap-9">
        <button className="flex justify-center items-center w-full h-1/2 max-h-full dark:bg-primary bg-lightSlate rounded-[2rem] overflow-hidden relative">
          <div className="z-30 w-full h-full absolute bg-gradient-to-tl from-black via-transparent to-transparent to-100%"></div>
          <img
            src={heroShowcaseImageData?.secondaryImageCover}
            alt="secondary-image"
            className="w-full h-full object-top object-cover rounded-[2.1rem]"
          />
        </button>
        <button className="flex justify-center items-center w-full h-1/2 max-h-full dark:bg-primary bg-lightSlate rounded-[2rem] overflow-hidden relative">
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

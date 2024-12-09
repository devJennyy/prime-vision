import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPlay } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineShareAlt } from "react-icons/ai";
import { heroShowcaseData } from "../../data/showcaseData";
import { mediaDetails, screenResolutions, sypnosis } from "../../data/detailsData";
import { transitionEffect } from "../../styles/GlobalStyles";

const Details = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  const handleVideoPage = () => console.log("Play Video");
  const handleDownloadLinks = () => console.log("Download Links");
  const handleShareLinks = () => console.log("Share Links");

  return (
    <div className="w-full my-16 relative">
      <div className="flex justify-between w-full">
        {/* Media Details */}
        <div className="flex flex-col items-start gap-3 text-left">
          <p className="lg:text-[2rem] text-3xl lg:font-semibold font-medium tracking-wide capitalize">
            {mediaDetails?.title}
          </p>
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
        </div>

        {/* Action Buttons */}
        <div className="flex lg:h-[52px] h-[46px] lg:gap-4 md:gap-3 sm:gap-2">
          <button
            onClick={handleVideoPage}
            className={`flex justify-center items-center sm:h-full sm:aspect-square md:aspect-auto lg:px-6 md:px-4 border rounded-full text-white font-medium gap-1 hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
          >
            <IoPlay size={18} className="mb-[1px]" />
            <p className="md:block hidden">Watch Now</p>
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

      {/* Additional Details */}
      <div className="flex tracking-wide lg:gap-16 gap-12 text-left mt-10">
        <div className="flex flex-col gap-5">
          <p className="lg:text-xl text-[17px] font-medium">Release Date</p>
          <p className="lg:text-[16px] text-[15px] font-light">December 9, 2017</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="lg:text-xl text-[17px] font-medium">Genre</p>
          <div className="flex lg:w-1/2 sm:w-5/6 w-full gap-4">
            <div className="flex lg:gap-3 gap-2">
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
        <div className="flex flex-col gap-5">
          <p className="lg:text-xl text-[17px] font-medium">Available In</p>
          <div className="flex lg:gap-3 gap-2">
            {screenResolutions?.resolutions?.map((data, index) => (
              <p
                key={index}
                className="text-white text-[12px] py-1 px-[14px] bg-nightFall rounded-full shadow-sm backdrop-blur-sm"
              >
                {data.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Synopsis Section */}
      <div className="flex flex-col items-start text-left gap-5 mt-10 border-t-2 border-silverAsh/10 tracking-wide">
        <p className="text-2xl font-medium mt-10">Synopsis</p>
        <div className="sm:hidden">
          <p className="font-light leading-[2rem] text-white/80">
            {expanded
              ? sypnosis?.description
              : `${sypnosis?.description?.substring(0, 200)}...`}
          </p>
          <button
            onClick={toggleExpand}
            className="text-white tracking-wide underline underline-offset-4 mt-2"
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </div>
        <p className="font-light leading-[2rem] text-white/80 sm:block hidden">
          {sypnosis?.description}
        </p>
        <p className="italic text-white/80 font-extralight mt-5">
          Uploaded by :{" "}
          <span className="text-white font-semibold">
            {sypnosis?.uploadedBy}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Details;

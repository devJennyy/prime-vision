import { FaStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { heroShowcaseData } from "../../data/showcaseData";
import { screenResolutions } from "../../data/detailsData";
import { IoPlay } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { AiOutlineShareAlt } from "react-icons/ai";
import { transitionEffect } from "../../styles/GlobalStyles";

const Details = () => {
  const handleVideoPage = () => {
    console.log("Play Video");
  };
  const handleDownloadLinks = () => {
    console.log("Download Links");
  };
  const handleShareLinks = () => {
    console.log("Share Links");
  };
  return (
    <div className="w-full my-16">
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-start gap-2">
          <p className="text-[2rem] font-semibold tracking-wide">Deadpool</p>
          <div className="flex justify-center items-center gap-5 text-sm font-light tracking-wide">
            <div className="flex justify-center items-center gap-2">
              <IoMdTime size={17} />
              <p>2 hr 58 min</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaStar className="text-secondary" />
              <p>7.0 (IMDb)</p>
            </div>
          </div>
          <div className="flex tracking-wide gap-16 text-left mt-10">
            <div className="flex flex-col gap-5">
              <p className="text-xl font-medium">Release Date</p>
              <p className="font-light">December 9, 2017</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl font-medium">Genre</p>
              <div className="flex flex-col lg:w-1/2 sm:w-5/6 w-full gap-4 mb-3">
                <div className="flex gap-3">
                  {heroShowcaseData?.genre?.map((data, index) => {
                    return (
                      <p
                        key={index}
                        className="text-white text-[12px] py-1 px-[14px] bg-nightFall rounded-full w-fit shadow-sm backdrop-blur-sm"
                      >
                        {data.name}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl font-medium">Available In</p>
              <div className="flex gap-3">
                {screenResolutions?.resolutions?.map((data, index) => {
                  return (
                    <p
                      key={index}
                      className="text-white text-[12px] py-1 px-[14px] bg-nightFall rounded-full w-fit shadow-sm backdrop-blur-sm"
                    >
                      {data.label}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[52px] gap-4">
          <button
            onClick={() => handleVideoPage()}
            className={`flex justify-center items-center w-full h-full px-6 border rounded-full text-white font-medium gap-1 hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
          >
            <IoPlay size={18} className="mb-[1px]" /> <p>Watch Now</p>
          </button>
          <button
            onClick={() => handleDownloadLinks()}
            className={`flex justify-center items-center h-full aspect-square text-white bg-softGray/10 rounded-full shadow-sm backdrop-blur-sm border border-transparent gap-1 hover:bg-transparent hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
          >
            <LiaDownloadSolid size={22} />
          </button>
          <button
            onClick={() => handleShareLinks()}
            className={`flex justify-center items-center h-full aspect-square text-white bg-softGray/10 rounded-full shadow-sm backdrop-blur-sm border border-transparent gap-1 hover:bg-transparent hover:border-secondary hover:text-secondary active:border-white/70 active:text-white/70 ${transitionEffect}`}
          >
            <AiOutlineShareAlt size={21} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start text-left gap-5 mt-10 border-t-2 border-silverAsh/10 tracking-wide">
        <p className="text-2xl font-medium mt-10">Synopsis</p>
        <p className="font-light leading-[2rem] text-white/80">
          The extraordinary story of how the 'Merc with a Mouth,' Deadpool,
          joins forces with Wolverine to save his universe. When Deadpool's
          reality faces an existential threat, he must recruit an alternate
          Wolverine from another timeline to help. Together, they embark on a
          chaotic, multiverse-spanning adventure to stop Cassandra Nova, a
          powerful villain threatening their existence. Along the way, they
          encounter iconic Marvel characters, face personal challenges, and
          navigate their clashing personalities, blending humor, action, and
          heart in a high-stakes mission to restore balance to their world.
        </p>
        <p className="italic text-white/80 font-extralight mt-5">
          Uploaded by :{" "}
          <span className="text-white font-semibold">FREEMAN</span>
        </p>
      </div>
    </div>
  );
};

export default Details;

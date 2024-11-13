import { FaStar, FaStarHalf } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { transitionEffect } from "../../styles/GlobalStyles";

interface Props {
  title: string;
  data: {
    title: string,
    rating: string,
    genre: string,
    duration: string,
    imageCover: string,
    alt: string,
  }[]
}

const Showcase = ({ title, data } : Props) => {
  const handleDetails = () => {
    console.log("View Movie/Series Details");
  };
  const handleDownloadLinks = () => {
    console.log("Download Links");
  };
  return (
    <div className="flex flex-col items-start w-full mt-16">
      <p className="text-[1.7rem] font-semibold">{title}</p>
      <div className="grid grid-cols-4 w-full gap-9 pt-10 z-30">
        {data?.map((data, index) => {
          return (
            <div
              key={index}
              className="w-full h-[389px] dark:bg-primary bg-lightSlate rounded-[2rem] z-30 relative group overflow-hidden cursor-pointer"
            >
              <div className="opacity-0 flex flex-col justify-end items-start absolute w-full h-full bg-gradient-to-t group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 ease from-black from-20% to-transparent rounded-[2rem] p-6">
                <p className="font-semibold text-xl">{data?.title}</p>
                <div className="flex justify-center items-center gap-[6px] mb-5 mt-1 text-secondary">
                  <div className="flex gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                  <p className="font-semibold leading-none mt-[2px]">
                    {data?.rating}
                  </p>
                </div>
                <div className="flex justify-between w-full text-white/70">
                  <p>{data?.genre}</p>
                  <p>{data?.duration}</p>
                </div>
                <div className="flex w-full h-11 gap-3 mt-4">
                  <button
                    onClick={() => handleDetails()}
                    className={`flex justify-center items-center w-full h-full rounded-full border border-white active:border-white/70 active:text-white/70 hover:border-secondary text-white hover:text-secondary ${transitionEffect}`}
                  >
                    <p className="text-sm">View Details</p>
                  </button>
                  <button
                    onClick={() => handleDownloadLinks()}
                    className={`flex justify-center items-center w-full max-w-11 h-11 rounded-full bg-white/10 border border-transparent hover:border-secondary hover:bg-transparent text-white hover:text-secondary ${transitionEffect}`}
                  >
                    <LiaDownloadSolid size={21} />
                  </button>
                </div>
              </div>
              <img
                src={data?.imageCover}
                alt={data?.alt}
                className="w-full h-full object-cover bg-no-repeat rounded-[2rem]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Showcase;

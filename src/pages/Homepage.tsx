import { AiOutlineShareAlt } from "react-icons/ai";
import { IoPlay } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";
import { transitionEffect } from "../styles/GlobalStyles";

const Homepage = () => {
  const handleVideoPage = () => console.log("Play Video");
  const handleDownloadLinks = () => console.log("Download Links");
  const handleShareLinks = () => console.log("Share Links");
  return (
    <div id="homepage" className="sm:flex flex-col mt-20 hidden">
      <div className="flex flex-col w-full max-w-[1440px] mx-auto 2xl:px-16 xl:px-10 px-5 fixed left-0 right-0 bottom-0 mb-7">
        <div className="border-t-2 border-silverAsh/10 mb-6"></div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start text-[12px] tracking-wider font-light gap-1">
            <p>
              2024 - <span>Movie</span>
            </p>
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
    </div>
  );
};

export default Homepage;

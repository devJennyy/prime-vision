import { GoArrowUpRight } from "react-icons/go";
import { transitionEffect } from "../../styles/GlobalStyles";
import { socialButtons } from "../../data/footerData";

const Footer = () => {
  return (
    <div className="w-full xl:pt-12 md:pt-10 sm:pt-9 pt-7 pb-5 bg-primary">
      <div className="flex flex-col justify-end items-center w-full max-w-[1440px] mx-auto h-full md:gap-12 sm:gap-8 gap-10 2xl:px-16 xl:px-10 px-5">
        <div className="flex flex-col w-full max-w-[590px] gap-6">
          <p className="md:text-2xl sm:text-[20px] text-lg font-medium md:leading-10 leading-8">
            This platform is not intended for any commercial purposes; it is
            solely for showcasing my Frontend Development skills.
          </p>
          <p className="md:text-[16px] text-[13px] font-light tracking-wider">
            The data is sourced from the YTS API.
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center w-full border-t-2 border-[#979797]/20 text-[12px] sm:tracking-widest tracking-wider font-light sm:gap-0 gap-8">
          <p className="md:hidden mt-4">Designed & Developed by Jenny Pieloor</p>
          <div className="flex justify-between items-center w-full sm:mt-5 mt-0">
            <button
              className={`flex justify-start items-center sm:w-[130px] gap-[3px] hover:underline underline-offset-4 hover:gap-[6px] duration-100 active:text-white/60 ${transitionEffect}`}
            >
              <a href="https://github.com/devJennyy" target="_blank">Visit my GitHub</a>
              <GoArrowUpRight size={15} className="md:mt-[2px]" />
            </button>
            <p className="md:block hidden">
              Designed & Developed by Jenny Pieloor
            </p>
            <div className="flex md:gap-3 gap-2">
              {socialButtons?.map(
                ({ url, id, icon: Icon, size, smSize, className }) => (
                  <a href={url} target="_blank"
                    key={id}
                    className={`flex justify-center items-center ${className} rounded-full border hover:border-white/60 hover:text-white/60 active:scale-95 ${transitionEffect}`}
                  >
                    <Icon size={size} className="md:block hidden" />
                    <Icon size={smSize} className="md:hidden" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

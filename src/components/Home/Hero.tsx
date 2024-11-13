const Hero = () => {
  return (
    <div className="flex w-full h-[488px] gap-9">
      <div className="w-full max-w-[1030px] h-full dark:bg-primary bg-lightSlate rounded-5xl"></div>
      <div className="flex flex-1 flex-col justify-between max-w-full h-full gap-9">
        <div className="w-full h-full dark:bg-primary bg-lightSlate rounded-5xl"></div>
        <div className="w-full h-full dark:bg-primary bg-lightSlate rounded-5xl"></div>
      </div>
    </div>
  );
};

export default Hero;

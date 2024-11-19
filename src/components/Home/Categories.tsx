const Categories = () => {
  return (
    <div className="flex flex-col gap-4 text-left w-full pt-10 sm:hidden">
      <p className="font-medium tracking-wide">Categories</p>
      <div className="flex gap-1 w-full text-sm">
        <p className="flex justify-center items-center bg-softGray/10 w-[80px] py-1 rounded-lg text-secondary">
          All
        </p>
        <p className="flex justify-center items-center hover:bg-softGray/10 w-[80px] py-1 rounded-lg active:text-secondary hover:text-secondary">
          Movies
        </p>
        <p className="flex justify-center items-center hover:bg-softGray/10 w-[80px] py-1 rounded-lg active:text-secondary hover:text-secondary">
          Series
        </p>
        <p className="flex justify-center items-center hover:bg-softGray/10 w-[80px] py-1 rounded-lg active:text-secondary hover:text-secondary">
          Popular
        </p>
      </div>
    </div>
  );
};

export default Categories;

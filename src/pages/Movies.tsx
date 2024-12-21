
import Hero from "../components/SharedComponent/Hero";
import Showcase from "../components/Home/Showcase";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const Movies = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="movies" className="flex flex-col">
      <LoadingSpinner loading={loading} />

      {!loading && (
        <>
          <Hero menuType={"Movies"} />
          <Showcase />
        </>
      )}
    </div>
  );
};

export default Movies;

import Casts from "../components/Movies/Casts"
import Details from "../components/Movies/Details"


const Movies = () => {
  return (
    <div
      id="movies"
      className="flex flex-col"
    >
      <Details />
      <Casts />
    </div>
  )
}

export default Movies

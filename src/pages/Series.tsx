import Showcase from "../components/Home/Showcase"
import Hero from "../components/SharedComponent/Hero"


const Series = () => {
  return (
    <div
      id="series"
      className="flex flex-col"
    >
      <Hero menuType={"Series"} />
      <Showcase />
    </div>
  )
}

export default Series

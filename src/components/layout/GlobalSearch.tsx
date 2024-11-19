import { IoSearch } from "react-icons/io5"
import DarkModeToggle from "../ui/DarkModeToggle"
import { transitionEffect } from "../../styles/GlobalStyles"

const GlobalSearch = () => {
  return (
    <div className="flex gap-3 mb-6 sm:hidden">
        <div className="flex justify-between items-center pl-6 pr-4 w-full h-[41px] rounded-full dark:bg-nightFall border border-nightFall/50 dark:border-none dark:focus-within:border-white/80">
          <input
            placeholder="Search a title"
            className="w-full h-full bg-transparent outline-none pr-2 dark:text-white text-sm text-primary dark:placeholder-white/50 placeholder:text-sm placeholder:tracking-wide placeholder-primary/60 focus:text-primary dark:focus:text-white focus:ring-0"
          />
          <button className="flex items-center justify-center p-1">
            <IoSearch
              size={17}
              className={`dark:text-white/50 text-primary/60 dark:active:text-white ${transitionEffect}`}
            />
          </button>
        </div>

        <DarkModeToggle />
      </div>
  )
}

export default GlobalSearch

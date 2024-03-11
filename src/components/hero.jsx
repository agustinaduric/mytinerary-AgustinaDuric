import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 bg-[url(./travel3.png)] h-screen w-full bg-cover bg-center relative">
        <h1 className="mt-0 lg:mt-10 text-3xl sm:text-4xl md:text-6xl lg:text-7xl italic text-center px-4">My Tinerary</h1>
        <h2 className="text-md sm:text-lg md:text-2xl lg:text-3xl text-center px-4 sm:w-8/12 md:w-7/12 lg:w-5/12">Find your perfect trip, designed by insiders who know and love cities...</h2>
        <div className="backdrop-blur-[2px] bg-opacity-60 p-2 border-2 rounded-full absolute bottom-0 right-0 mb-4 mr-4 md:mb-8 md:mr-8 md:w-1/3 lg:w-1/4 bg-white flex flex-col items-center justify-center">
          <p className="text-center p-2 font-semibold">Embark on unforgettable adventures tailored just for you</p>
          <div className="flex justify-center items-center border border-black rounded bg-[#96c75c] px-2 py-1 hover:bg-[#84a948]">
            <Link to="/cities" className="text-center mr-2 flex items-center justify-center text-xs md:text-sm lg:text-md">Start Exploring Now</Link>
            <img src="./explorer.png" alt="ctaSymbol" className="w-4 h-4 self-center"></img>
          </div>
        </div>
      </div>
    );
  }
export default Hero;
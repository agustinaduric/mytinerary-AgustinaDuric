import React from "react";
function CardItem({city}) {
    return (
        <div className="relative flex flex-col gap-10">
        <article className="relative">
            <div className="absolute top-0 right-0 z-6 p-1 bg-[#CFCBC8] rounded-b rounded-l">
            <a href={`/cities/${city._id}`}><img src="/informationSymbol.png" alt="iSymbol" className="h-5 w-5 cursor-pointer relative"></img></a>
            </div>
            <img src={city.image} className="w-20 h-24 md:w-40 md:h-48 lg:w-40 lg:h-48 object-cover"></img>
            <footer className=" bg-[#CFCBC8] bg-opacity-90 text-center h-8 md:h-6 lg:h-6">
                <p className="font-semibold italic text-xs md:text-sm lg:text-md w-16 md:w-40 lg:w-40 pb-1">{city.name}</p>
            </footer>
        </article>
        </div>
    );
  }
export default CardItem;
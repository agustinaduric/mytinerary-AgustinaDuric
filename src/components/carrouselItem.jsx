import React from "react";
function CarrouselItem({city}) {
    return (
        <div className="flex">
        <article>
            <img src={city.image} className="w-16 h-20 md:w-40 md:h-48 lg:w-40 lg:h-48 object-cover"></img>
            <footer className=" bg-[#CFCBC8] text-center">
                <p className="font-semibold italic text-sm w-16 md:w-40 lg:w-40">{city.name}</p>            
            </footer>
        </article>
        </div>
    );
  }
export default CarrouselItem;
import React from "react";
function priceItinerary (itinerary){
    let priceImages=[]
    for(let i=0; i<itinerary.price;i++){
        priceImages.push(<img src="/price.png" alt="price" key={i} className="w-4 h-4 mt-1"></img>);
    }
    return priceImages;
}
function ItineraryItem ({itinerary}){
    return(
        <article className="bg-black bg-opacity-60 flex flex-col self-center text-white w-11/12 md:w-9/12 p-1 md:p-2 rounded-lg lg:p-4 mx-auto">
            <div className="flex justify-between items-start">
                <p className="font-bold text-lg md:text-xl lg:text-2xl">{itinerary.title}</p>
                <div className="flex items-center">
                    <img src={itinerary.guide_image} alt="" className="rounded-full h-6 w-6 lg:w-8 lg:h-8 mr-1"/>
                    <p className="font-semibold text-xs md:text-sm lg:text-md">{itinerary.guide}</p>            
                </div>
            </div>
            <hr className="my-1"></hr>
            <div className="flex justify-center gap-4 flex-wrap">
                {itinerary.activities.map((activity,index) => <img key={index} src={activity} alt='activity' className="rounded h-12 md:h-20 lg:h-28 w-auto my-1"></img>)}
            </div>
            <footer className="mt-1">
                <p className="italic text-sm">Duration: {itinerary.duration}</p>
                <p className="italic text-sm flex gap-1">Price:{priceItinerary(itinerary)}</p>
                <div className="flex gap-1 text-xs md:text-sm lg:text-sm justify-end">
                    {itinerary.hashtags.map((hashtag,index) => <p key={index} className="italic">{hashtag}</p>)}
                </div>
            </footer>
        </article>
    )
}
export default ItineraryItem;
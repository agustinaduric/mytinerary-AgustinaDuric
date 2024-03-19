import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <div className="flex flex-col sm:flex-row border border-gray-300 bg-[#effbf7] w-full">
        <div className="flex flex-col w-full sm:w-2/5 ml-4">
            <div className="flex mt-2 gap-2 justify-center sm:justify-start">
                <a href="https://www.facebook.com/MindHubLa/?locale=es_LA" target="_blank"><img src="/contact/facebook.png" alt="fLogo" className="w-6 h-6"></img></a>
                <a href="https://www.instagram.com/mindhub_la/?hl=es-la" target="_blank"><img src="/contact/instagram.png" alt="iLogo" className="w-6 h-6"></img></a>
                <a href="https://www.linkedin.com/school/mindhub-la/?originalSubdomain=ar" target="_blank"><img src="/contact/linkedin.png" alt="lLogo" className="w-6 h-6"></img></a>
                <a href="https://www.youtube.com/channel/UC-Y8nJdZwbfvwodLVDUkMlA" target="_blank"><img src="/contact/youtube.png" alt="yTLogo" className="w-6 h-6"></img></a>
            </div>
            <div className="flex mt-2 gap-2 justify-center sm:justify-start underline italic text-[#5b5c5e]">
                <a href="tel:(630)6908132">Tel</a>
                <a href="https://maps.app.goo.gl/XmDu2hv5gcudixi57" target="_blank" className="mr-0 sm:mr-0">Map</a>
            </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 py-1">
            <div className="flex items-center justify-center sm:justify-start">
                <img src="/logo.png" alt="logo" className="w-8"></img>
                <p className="ml-2 mt-2 font-semibold">My Tinerary</p>
            </div>
            <p className="text-[#5b5c5e] text-sm mt-2 text-center sm:text-left">MindHub - Agustina Duric - B2B050</p>
        </div>
        <div className="flex flex-col italic gap-2 items-center mr-2 mt-2">
            <Link to="/" className="flex"><img src="/home.png" alt="homeSymbol" className="w-6 h-6"></img>Home</Link>
            <Link to="/cities" className="flex"><img src="/explorerf.png" className="w-6 h-6"></img>Cities</Link>
        </div>
      </div>
    );
  }
export default Footer;
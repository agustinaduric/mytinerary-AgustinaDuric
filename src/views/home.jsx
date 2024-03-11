import Hero from "../components/hero.jsx"
import CarrouselAll from "../components/carrousel"
const Home = ()=>{
    return(
        <div>
            <Hero/>
            <main>
                <CarrouselAll></CarrouselAll>
            </main>
        </div>
    );
}
export default Home;
import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx"
const LayoutMain =({children}) =>{
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}
export default LayoutMain;
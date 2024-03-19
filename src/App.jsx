import Cities from "./views/cities";
import Home from "./views/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutMain from "./views/layout";
import CityInfo from "./views/cityInfo";
import store from "./redux/store"
import { Provider } from "react-redux";
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <LayoutMain>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cities" element={<Cities/>}></Route>
        <Route path="/cities/:id" element={<CityInfo/>}></Route>
    </Routes>
    </LayoutMain>
    </Provider>
    </BrowserRouter>
  )
}

export default App;
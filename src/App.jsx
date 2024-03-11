import Cities from "./views/cities";
import Home from "./views/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutMain from "./views/layout";
function App() {
  return (
    <BrowserRouter>
    <LayoutMain>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cities" element={<Cities/>}></Route>
    </Routes>
    </LayoutMain>
    </BrowserRouter>
  )
}

export default App;
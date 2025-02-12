import CarView from "./Cars/CarView"
import CarList from "./Cars/CarList"
import CarCreate from "./Cars/CarCreate"
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<CarList/>}/>
            <Route path="/Car/List" element={<CarList/>}/>
            <Route path="/Car/Create" element={<CarCreate/>}/>
            <Route path="/Car/View" element={<CarView/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
  
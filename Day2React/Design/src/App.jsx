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
            <Route path="/Cars/List" element={<CarList/>}/>
            <Route path="/Cars/Create" element={<CarCreate/>}/>
            <Route path="/Cars/View" element={<CarView/>}/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
  
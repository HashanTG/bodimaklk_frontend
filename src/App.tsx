import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"

import Home from "./home/home"
import Footer from "./component/Footer"



function App() {


  return ( 
    <>
      


<BrowserRouter >
<Header/>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    
                </Routes>
                <Footer/>
            </BrowserRouter>

    </>
  )
}

export default App

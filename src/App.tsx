import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Home from "./pages/Home"
import Panier from "./pages/Panier"
import New from "./pages/New"
import Navbar from "./composants/navbar"
import { useState } from "react"

function App() {

  const [PanierLength, setPanierLength] = useState(0)

  return (
    <BrowserRouter>
      <Navbar PanierLength={PanierLength}  />
      <Routes>
        <Route path="/" element={<Home PanierLength={PanierLength} setPanierLength={setPanierLength} />} />
        <Route path="/panier" element={<Panier PanierLength={PanierLength} setPanierLength={setPanierLength} />} />
        <Route path="/new" element={<New />} />

        <Route path="/*" element={"Page non trouvé"} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

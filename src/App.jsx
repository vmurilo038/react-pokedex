import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import PokemonDetails from "./Pages/PokemonDetails/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
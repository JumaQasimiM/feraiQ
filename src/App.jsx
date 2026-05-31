import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import { Home } from "./components/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Hero /> */}
        <Home />
        {/* <Routes>
          <Route element={} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;

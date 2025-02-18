import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/home/home";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

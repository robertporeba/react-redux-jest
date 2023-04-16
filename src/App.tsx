import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";
import ShowsList from "./pages/ShowsList";
import BottomNavigations from "./components/BottomNavigations";

import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/list/:page"} element={<ShowsList />} />
        <Route path={"/episode/:id"} element={<ShowDetails />} />
        <Route path={"*"} element={<Home />} />
      </Routes>
      <BottomNavigations />
    </>
  );
}

export default App;

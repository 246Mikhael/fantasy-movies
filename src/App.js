import React from "react";
import { Routes, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import MovieContainer from "./containers/MovieContainer";
import MainContainer from "./containers/MainContainer";


function App() {

  return (
  <>
    <header>
      <div className="header-title">SCIENCE FICTION</div>
      <div className="header-title-description">фантастические фильмы</div>
      <img className="header-img" src={require("./fiction1.jpg")} alt="cinema"></img>
    </header>
    <Routes>
      <Route path="/" element={<MainContainer/>}/>  
      <Route path="/film/:id" element={<MovieContainer/>}/> 
      <Route path="*" element={<NotFound/>}/>  
    </Routes>
  </>    
  );
}

export default App;

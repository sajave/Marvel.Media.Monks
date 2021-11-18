import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import {Home} from "./components/home/Home";
import {NavBar} from "./components/navBar/NavBar";
import {SearchBar} from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={NavBar} />
      <Route exact path='/' component={SearchBar} />
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;

import {Route} from "react-router-dom";
import "./App.css";
import {CharacterDetail} from "./components/characterDetail/CharacterDetail";
import {Home} from "./components/home/Home";
import {NavBar} from "./components/navBar/NavBar";

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={NavBar} />
      <Route path='/:id' component={NavBar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/:id' component={CharacterDetail} />
    </div>
  );
}

export default App;

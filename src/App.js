import React, { Component } from 'react';
import Menu from './components/menu';
import Peliculas from './paginas/Peliculas';
import Personajes from './paginas/personajes';
import Planetas from './paginas/planetas';
import Vehiculos from './paginas/vehiculos';
import Cruceros from './paginas/cruceros'
import './App.css';
import Slider from './components/slider'
import {Link, Route, Switch} from 'react-router-dom';






class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Slider/>
        <Route path="/pelicula" component={Peliculas}/>
        <Route path="/personaje" component={Personajes}/>
        <Route path="/planeta" component={Planetas}/>
        <Route path="/vehiculo" component={Vehiculos}/>
        <Route path="/crucero" component={Cruceros}/>

        
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const ImagenPersonaje = {
    "Luke Skywalker" : "/imagenes/perso1.jpg",
    "C-3PO" : "/imagenes/perso2.jpg",
    "R2-D2" : "/imagenes/perso3.jpg",
    "Darth Vader" : "/imagenes/perso4.jpg",
    "Leia Organa" : "/imagenes/perso5.jpg",
    "Owen Lars" : "/imagenes/perso6.jpg",
    "Beru Whitesun lars" : "/imagenes/perso7.jpg",
    "R5-D4" : "/imagenes/perso8.jpg",
    "Biggs Darklighter" : "/imagenes/perso9.jpg",
    "Obi-Wan Kenobi" : "/imagenes/perso10.jpg",
}

function Personaje(props){
    return(
        <div className="col-md-2">
        <Card>
        <CardImg src={ImagenPersonaje[props.name]} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.name}</h3></CardTitle>
          <CardText><b>Genero: {props.gender}</b></CardText>
          <CardText><b>Altura: {props.height}</b></CardText>
          <CardText><b>Año de nacimiento: {props.birth_year}</b></CardText>
          <CardSubtitle><i>Mundo natal: {props.homeworld}</i></CardSubtitle>
           <CardSubtitle><i>Peliculas: { props.films}</i></CardSubtitle>
         
        </CardBody>
      </Card>
      </div>
    )
}

export default class Personajes extends Component {
    state = {
       personajes : []
        }
    

    componentDidMount(){
        axios.get("https://swapi.co/api/people/")
            .then(rsp=> this.setState({personajes: rsp.data.results}))
    }
 //estudiar https://getbootstrap.com/docs/4.2/layout/grid/
    render(){
        const personajes = this.state.personajes.map(elemento=> <Personaje  name={elemento.name} films={elemento.films} homeworld={elemento.homeworld} gender={elemento.gender} birth_year={elemento.birth_year} height={elemento.height} />)

        return(
            <div className="container">
                <div className="row">
                     {personajes}
                </div>
               
            </div>
        )
 
    }
};
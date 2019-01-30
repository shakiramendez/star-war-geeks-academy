import React, {Component} from 'react';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const ImagenCrucero = {
    "Executor" : "/imagenes/c1.png",
    "Sentinel-class landing craft" : "/imagenes/c2.png",
    "Death Star" : "/imagenes/c3.jpeg",
    "Millennium Falcon" : "/imagenes/c4.png",
    "Y-wing" : "/imagenes/c5.jpeg",
    "X-wing" : "/imagenes/c6.jpg",
    "TIE Advanced x1" : "/imagenes/c7.jpg",
    "Slave 1" : "/imagenes/c8.jpg",
    "Imperial shuttle" : "/imagenes/c9.jpeg",
    "EF76 Nebulon-B escort frigate" : "/imagenes/c10.jpg",
}
function Crucero(props){
    return(
        <div className="col-md-2">
        <Card>
        <CardImg src={ImagenCrucero[props.name]} alt="Card image cap" />
        <CardBody>
        <CardTitle><h3>{props.name}</h3></CardTitle>
          <CardText><i>Modelo: {props. model}</i></CardText>
          <CardText><i>Equipo: {props.manufacturer}</i></CardText>
          <CardText><i>Naves: {props.starship_class}</i></CardText>
          <CardSubtitle><i>Pasajeros: {props.passengers}</i></CardSubtitle>
          
          </CardBody>
      </Card>
      </div>
    )
}
export default class Cruceros extends Component {
    state = {
       cruceros: []
        }
    

    componentDidMount(){
        axios.get("https://swapi.co/api/starships/")
            .then(rsp=> this.setState({cruceros: rsp.data.results}))
    }
    render() {
        const cruceros = this.state.cruceros.map((elemento) => {
          return <Crucero  name={elemento.name} model={elemento.model} manufacturer={elemento.manufacturer} starship_class={elemento.starship_class} passengers={elemento.passengers}  /> 
        });
        return(
            <div className="container">
                <div className="row">
                     {cruceros}
                </div>
               
            </div>
        )
 
    }
};
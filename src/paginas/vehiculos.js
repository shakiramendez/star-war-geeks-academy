import React, {Component} from 'react';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

    const ImagenVehiculo = {
        "Sand Crawler" : "/imagenes/v1.png",
        "T-16 skyhopper" : "/imagenes/v2.jpg",
        "X-34 landspeeder" : "/imagenes/v3.jpg",
        "TIE/LN starfighter" : "/imagenes/v4.gif",
        "Snowspeeder" : "/imagenes/v5.jpeg",
        "TIE bomber" : "/imagenes/v6.jpg",
        "AT-AT" : "/imagenes/v7.png",
        "AT-ST" : "/imagenes/v8.png",
        "Storm IV Twin-Pod cloud car" : "/imagenes/v9.jpg",
        "Sail barge" : "/imagenes/v10.jpeg",
    }
function Vehiculo(props){
    return(
        <div className="col-md-2">
        <Card>
        <CardImg src={ImagenVehiculo[props.name]} alt="Card image cap" />
        <CardBody>
          <CardTitle><h4>{props.name}</h4></CardTitle>
          <CardText><i>Modelo: {props. model}</i></CardText>
          <CardText><i>Equipo: {props.crew}</i></CardText>
          <CardText><i>Nave: {props.starship_class}</i></CardText>
          <CardSubtitle><i>Pasajeros: {props.passengers}</i></CardSubtitle>
          <CardSubtitle><i>Longictud: {props.length}</i></CardSubtitle>

           
         
        </CardBody>
      </Card>
      </div>
    )
}
export default class Vehiculos extends Component {
    state = {
       vehiculos: []
        }
    

    componentDidMount(){
        axios.get("https://swapi.co/api/vehicles/")
            .then(rsp=> this.setState({vehiculos: rsp.data.results}))
    }
    render() {
        const vehiculos = this.state.vehiculos.map((elementos) => {
          return <Vehiculo name={elementos.name} model={elementos.model} crew={elementos.crew} starship_class={elementos.starship_class} passengers={elementos.passengers}  length={elementos.length} /> 
        });
        return(
            <div className="container">
                <div className="row">
                     {vehiculos}
                </div>
               
            </div>
        )
 
    }
};
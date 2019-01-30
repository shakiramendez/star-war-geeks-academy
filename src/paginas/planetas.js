import React, {Component} from 'react';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const ImagenPlaneta = {
    "Alderaan" : "/imagenes/pla1.jpg",
    "Yavin IV" : "/imagenes/pla2.png",
    "Hoth" : "/imagenes/pla3.png",
    "Dagobah" : "/imagenes/pla4.jpg",
    "Bespin" : "/imagenes/pla5.png",
    "Endor" : "/imagenes/pla6.png",
    "Naboo" : "/imagenes/pla7.png",
    "Coruscant" : "/imagenes/pla8.png",
    "Kamino" : "/imagenes/pla9.png",
    "Geonosis" : "/imagenes/pla10.jpg",
}

function Planeta(props){
    return(
        <div className="col-md-2">
        <Card>
        <CardImg src={ImagenPlaneta[props.name]} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.name}</h3></CardTitle>
          <CardText><i>Diametro: {props. diameter}</i></CardText>
          <CardText><i>Poblacion: {props.population}</i></CardText>
          <CardText><i>Clima: {props.climate}</i></CardText>
          <CardSubtitle><i>Terreno: {props.terrain}</i></CardSubtitle>
           <CardSubtitle><i>Superficie: { props.surface_water}</i></CardSubtitle>
         
        </CardBody>
      </Card>
      </div>
    )
}
export default class Planetas extends Component {
    state = {
       planetas: []
        }
    

    componentDidMount(){
        axios.get("https://swapi.co/api/planets/")
            .then(rsp=> this.setState({planetas: rsp.data.results}))
    }
    render() {
        const planetas = this.state.planetas.map((elemento) => {
          return <Planeta name={elemento.name} diameter={elemento.diameter} population={elemento.population} climate={elemento.climate} terrain={elemento.terrain} surface_water={elemento.surface_water} /> 
        });
        return(
            <div className="container">
                <div className="row">
                     {planetas}
                </div>
               
            </div>
        )
 
    }
};

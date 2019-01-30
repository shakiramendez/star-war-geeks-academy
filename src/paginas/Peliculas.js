import React, {Component} from 'react';
import axios from 'axios';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

const ImagenPelicula = {
    "A New Hope" : "/imagenes/4P.jpg",
    "The Force Awakens" : "/imagenes/7P.jpg",
    "Attack of the Clones" : "/imagenes/2P.jpg",
    "The Phantom Menace" : "/imagenes/1P.jpg",
    "Revenge of the Sith" : "/imagenes/3P.jpg",
    "Return of the Jedi" : "/imagenes/6P.jpg",
    "The Empire Strikes Back" : "/imagenes/5P.jpg",
}

function Pelicula(props){
    return(
        <div className="col-md-2">
        <Card>
        <CardImg src={ImagenPelicula[props.title]} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.title}</h3></CardTitle>
          <CardSubtitle><b>Episodio: { props.episode_id}</b></CardSubtitle>
          <CardSubtitle><b>Fecha: {props.release_date}</b></CardSubtitle>
          <CardText><i>Sinopsis:{props.opening_crawl}</i></CardText>
          <CardText><b>Director: {props.director}</b></CardText>
          <CardText><b>Productor: {props.producer}</b></CardText>
         
        </CardBody>
      </Card>
      </div>
    )
}


export default class Peliculas extends Component {
    state = {
       peliculas : []
        }
    

    componentDidMount(){
        axios.get("https://swapi.co/api/films")
            .then(rsp=> this.setState({peliculas: rsp.data.results}))
    }
 
    render(){
        const peliculas = this.state.peliculas.map(elemento=> <Pelicula  title={elemento.title} episode_id={elemento.episode_id} release_date={elemento.release_date} opening_crawl={elemento.opening_crawl} director={elemento.director} producer={elemento.producer} />)

        return(
            <div className="container">
                <div className="row">
                     {peliculas}
                </div>
               
            </div>
        )
 
    }
};
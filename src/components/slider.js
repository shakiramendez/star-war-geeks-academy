import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

export default function () {
    return (
        <Slider>
             
            <div key={2}>
                <img src="imagenes/2.jpg"></img>
            </div>
            <div key={5}>
                <img src="imagenes/5.jpg"></img>
            </div>
            <div key={6}>
                <img src="imagenes/6.jpg"></img>
            </div>
            <div key={7}>
                <img src="imagenes/7.jpg"></img>
            </div>
            <div key={3}>
                <img src="imagenes/3.jpeg"></img>
            </div>
            <div key={1}>
                <img src="imagenes/1.jpg"></img>
            </div>

        </Slider>
    )
};
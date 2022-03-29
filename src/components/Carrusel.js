import React from 'react';
import "./Carrusel.css";

function Carrusel() {
    return ( <
        div id = "carouselExampleIndicators"
        className = "carousel slide"
        data-ride = "carousel" >
        <
        ol className = "carousel-indicators" >
        <
        li data-target = "#carouselExampleIndicators"
        data-slide-to = {
            0
        }
        className = "active" / >
        <
        li data-target = "#carouselExampleIndicators"
        data-slide-to = {
            1
        }
        /> <
        li data-target = "#carouselExampleIndicators"
        data-slide-to = {
            2
        }
        /> < /
        ol > <
        div className = "carousel-inner" >
        <
        div className = "carousel-item active" >
        <
        img className = "d-block w-100"
        src = "/images/vape_1.jpg"
        alt = "First slide" / >
        <
        /div> <
        div className = "carousel-item" >
        <
        img className = "d-block w-100"
        src = "/images/vape_2.jpg"
        alt = "Second slide" / >
        <
        /div> <
        div className = "carousel-item" >
        <
        img className = "d-block w-100"
        src = "/images/vape_3.jpg"
        alt = "Third slide" / >
        <
        /div> < /
        div > <
        a className = "carousel-control-prev"
        href = "#carouselExampleIndicators"
        role = "button"
        data-slide = "prev" >
        <
        span className = "sr-only" > Previous < /span><i className="fas fa-chevron-left" / >
        <
        /a> <
        a className = "carousel-control-next"
        href = "#carouselExampleIndicators"
        role = "button"
        data-slide = "next" >
        <
        span className = "sr-only" > Next < /span><i className="fas fa-chevron-right" / >
        <
        /a> < /
        div >
    );
}


export default Carrusel;
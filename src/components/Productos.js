import React from "react";
import './Productos.css';

class Productos extends React.Component {

    // Constructor 
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("/api/products")
          .then((res) => res.json())
            .then((data) => {
              this.setState({
                    items: data.data,
                    DataisLoaded: true
                });
                
            })
    }
    render() {
        const {
            DataisLoaded,
            items
        } = this.state;
        if (!DataisLoaded) return <div >
            <h1> Cargando... </h1> </div > ;

        return ( <main> 
            <h2> Todos los productos </h2>
           
            
            {
            items.map((item) => ( <
                div className = "content-product"
                key = {
                    item.id
                } >
                <span className = "resaltado"> Id: </span> {
                    item.id
                }, < br / >
                 <span className = "resaltado" > Nombre: </span> {
                 item.product_name
                 },
                < br/> <span className = "resaltado" > Descripción: </span> {
                    item.product_description 
                } < br / > <button> Ver detalle </button> </div >
            ))
        } </main>
    );
}
}

export default Productos;
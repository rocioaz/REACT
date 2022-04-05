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
        this.props = props;
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

    onClick = () => {
        this.props.navigate("/api/products/2");
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
                <img src= {"/img/productos/" + item.image} width= "50%"/> 
                    
                 < br / >
                 < br / >
               
                <span className = "resaltado"> Id: </span> {
                    item.id
                }, < br / >
                 <span className = "resaltado" > Nombre: </span> {
                 item.product_name
                 },< br / >

                 <span className = "resaltado" > Precio: </span> {
                    item.price
                    }, < br / >
                
                <span className = "resaltado" > Categoria: </span> {
                    item.category
                }
                < br / > <button onClick={this.onClick}> Ver detalle </button> </div >
            ))
        } </main>
    );
}
}

export default Productos;
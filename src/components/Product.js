import React from "react";
import './Productos.css';
class Product extends React.Component {

// Constructor 
constructor(props) {
    super(props);

    this.state = {
        item: props.match.params.id,
        DataisLoaded: false
    };
}

// ComponentDidMount is used to
// execute the code 
    componentDidMount() {
        fetch(`/api/products?id=${match.params.id}`)
            .then((res) => {console.log(res)})
            //.then((data) => console.log(data));
                    /*this.setState({
                        item: data.data,
                        DataisLoaded: true*/
        
        
              
}
render() {
    const {
        DataisLoaded,
        item
    } = this.state;
    if (!DataisLoaded) return <div >
        <h1> Cargando... </h1> </div > ;

    return ( < div >
        <h1> Producto Seleccionado </h1>
        <span className = "resaltado" > Nombre: </span> {item.product_name}
            
            </div>)


}
}

export default Product;
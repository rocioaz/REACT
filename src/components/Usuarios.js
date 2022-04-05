import React from "react";
import './Usuarios.css';

class Usuarios extends React.Component {

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
        fetch("/api/users")
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
            <h2> Todos los usuarios </h2>
           
            
            {
            items.map((item) => ( <
                div className = "content-product"
                key = {
                    item.id
                } >
                <img src= {"/img/usuarios/" + item.image} width= "30%"  /> 
                < br />

                <span className = "resaltado"> Id: </span> {
                    item.id
                }, < br/>
                 
                <span className = "resaltado" > Nombre: </span> {
                 item.userName
                 },< br/>

                <span className = "resaltado" > Email: </span> {
                    item.email
                },
            < br / > <button> Ver detalle </button> 
            </div>
            ))
        } </main>
    );
}
}

export default Usuarios;
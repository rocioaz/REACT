import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import './Productos.css';
function Product (props) {  
    const [item, setItem] = useState(null)  
    const [dataLoaded, setDataloaded] = useState(false) 
    const {id} = useParams()

    useEffect(() => {
       const getProduct = () => {
            console.log(id);
            fetch(`/api/products/${id}`)
                .then((res) => res.json())
                .then((data) => setItem (
                        data.data));
        } 
        getProduct();

    }, [])

    return ( <div >
        <img src= {"/img/productos/" + item.image} width= "20%"/> 
        < br/>
     
        <span className = "resaltado"> Id: </span> {
                    item.id
                }, < br/>

        <span className = "resaltado" > Nombre: </span> {
                 item.product_name
                 }, < br/>
       
       <span className = "resaltado" > Descripción: </span> {
                    item.product_description 
                }, < br/>
        
        <span className = "resaltado" > Categoria: </span> {
                    item.category
                }
        </div>  
         
    );
}
export default Product;
import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Total productos',
    color: 'primary', 
    cuantity: 22,
    icon: 'fa-shopping-cart',
}

/* <!-- Total users --> */

let totalUsers = {
    title:'Total usuarios', 
    color:'success', 
    cuantity: '2',
    icon:'fa-users'
}

/* <!-- Total Categories --> */

let totalCategories = {
    title:'Total Categorias' ,
    color:'warning',
    cuantity:'6',
    icon:'fa-sitemap'
}

let cartProps = [productsInDB, totalUsers, totalCategories];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;
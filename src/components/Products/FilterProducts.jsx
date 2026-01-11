import React, { useEffect, useState } from 'react';
import {RenderStars} from "../../utils/renderStars";
import { Link, useParams } from "react-router-dom";

const FilterProducts = ({category:staticCategory}) => {
const {category:routeCategory} = useParams();
const category = routeCategory||staticCategory;
  const[products,setProducts]=useState([])
    const capitalizedCategory = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : '';
  useEffect(()=>{
    if (!category) return;
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(res=>res.json())
    .then(data=>
      setProducts(data.products))
      .catch(err => console.error("Error fetching products:", err));

    },[category]);

    return (
      <div>
          <div className="mt-14 mb-12">
      <div className="container mx-auto ">
        {/* header section */}
        <div data-aos="fade-up" className="text-center mb-10 max-w-150 mx-auto ">
          {capitalizedCategory && (
<>
          <p className="text-sm text-mainColor">Top {capitalizedCategory} for you</p>
          <h1 className="text-3xl font-bold">{capitalizedCategory}</h1>
</>
          )}
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et
            doloremque quaerat?
          </p>
        </div>
        {/* body section */}
        <div>
            <div
            className="grid place-items-center grid-cols-2 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5  gap-5 justify-center "
            >
            {/* card section */}
            {products.map((product, index) => (
              
              
              <Link to={`/product/${product.id}`}
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 20}
              className="card 
              space-y-3 shadow-lg bg-cardColor/20 rounded-lg "
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-md object-cover"
                  />
                <h4 className="font-semibold mx-3">{product.title}</h4>
                <div className="flex items-center gap-1 mx-3"><RenderStars rating={product.rating}/></div>
                <p className="mx-3 my-3">{(48*(product.price)).toFixed(0)} L.E</p>
                </Link>
            
          ))}
          </div>
          </div>
        </div>
        </div>
        </div>
  )
};
  
  
export default FilterProducts

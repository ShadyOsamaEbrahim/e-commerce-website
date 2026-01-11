import React, { useEffect, useState ,useRef } from "react";
import SortBy ,{ sortProducts } from "../../utils/SortBy";
import { RenderStars } from "../../utils/renderStars";
import CategoryFilter from "../../utils/categoryFilter";
import PrimaryButtons from "../layout/PrimaryButtons";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories , setSelectedCategories] = useState([]);
  const [sortValue , setSortValue] = useState('default');
  const {addToCart} = useCart();
  const {search} = useSearch();

useEffect(()=>{
  const query = search||'';
  setLoading(true);
  fetch(`https://dummyjson.com/products/search?q=${query}`)
  .then((res)=> res.json())
  .then((data) =>{
    setProducts(data.products || []);
    setLoading(false);
  })
  .catch((err) => {
    setError(err.message);
    setLoading(false);
  });
}, [search]);

// useEffect(() => {
  
//     fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//         setProducts(data.products);
//         setLoading(false);
//       })
//       .catch((err) => {
//           setError(err.message);
//           setLoading(false);
//         });
//       }, []);
      
      if (loading) return <p>loading...</p>;
      if (error) return <p>Error:{error}</p>;
      
      
      const filteredProducts =
      selectedCategories.length === 0
      ? products
      : products.filter((product) => 
        selectedCategories.includes(product.category)
    );
 
    const finalProducts = sortProducts(filteredProducts , sortValue);
    

  return (
    <div className="px-5 pt-5 sm:pt-15 lg:pt-10 md:pt-9">
      <div className="flex justify-between p-5">

        <SortBy onChange={setSortValue}/>
      <CategoryFilter
       selectedCategories={selectedCategories}
       setSelectedCategories={setSelectedCategories}
       />

      </div>
      {/* products grid */}

      <div
        className="grid grid-cols-1 sm:grid-cols-3
        md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
        >
        {/* card section */}
        {finalProducts.map((product , index) => (
          <div 
          
            key={product.id}
          className="relative">
          <Link
          
          to={`/product/${product.id}`}
          data-aos="fade-up"
            data-aos-delay={index * 20}
            className="card space-y-2 shadow-md"
          >
            <div>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="rounded-md"
              />
              {product.discountPercentage && (
                
                <p className="absolute bg-red-600 rounded px-3 top-5 text-white">{product.discountPercentage.toFixed(0)} % OFF</p>
              )}
              </div>
            <h4 className="font-semibold">{product.title}</h4>
            <div><RenderStars rating={product.rating}/></div>
            <div className="flex gap-5">
            <p >{48*((product.price)-(((product.discountPercentage)*product.price)/100)).toFixed(0)} L.E</p>
            <p className="text-red-600 line-through">{(48*(product.price)).toFixed(0)} L.E</p>
              </div>
          
          </Link>
            <PrimaryButtons onClick={() => addToCart(product)}>add to cart</PrimaryButtons>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

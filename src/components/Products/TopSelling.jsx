import React from "react";
import { useEffect, useState } from "react";
import {RenderStars} from "../../utils/renderStars";
import { Link } from "react-router-dom"


const TopSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const topSelling = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);
        setProducts(topSelling);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Loading top selling...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* header section */}
        <div data-aos="fade-up" className="text-center mb-10 max-w-150 mx-auto">
          <p className="text-sm text-mainColor">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum et
            doloremque quaerat?
          </p>
        </div>
        {/* body section */}
        <div>
          <div
            className="flex gap-2 overflow-auto "
          >
            {/* card section */}
            {products.map((product, index) => (
               

              <Link
                to={`/product/${product.id}`}
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 20}
                className="card 
                space-y-3 shadow-lg "
                >
                  <div className="w-50 h-full grid rounded-lg bg-mainColor/15">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="rounded-md object-cover h-50"
                  />
                  <div className="grid justify-between">

                <h4 className="font-semibold mx-3">{product.title}</h4>
                <div className="flex items-center gap-1 mx-3"><RenderStars rating={product.rating}/></div>
                <p className="mx-3 my-3">{(48*(product.price)).toFixed(0)} L.E</p>
                  </div>
            </div>
              </Link>
            
            ))}
          </div>
        </div>
        </div>
        </div>
      );
    };
    
export default TopSelling;

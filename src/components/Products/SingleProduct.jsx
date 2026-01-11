import React, { useEffect , useState } from 'react'
import {useParams} from "react-router-dom"
import { RenderStars } from '../../utils/renderStars';
import { getDiscountedPrice } from '../../utils/getDiscountedPrice';

const SingleProduct = () => {
    const {id} = useParams();
    const [product,setProduct]=useState(null)
    useEffect(() => {
        fetch (`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.error(err));
    }, [id]);
    if(!product) return <p>loading...</p>;
    const discount=product.discountPercentage || 0;
    const finalPrice = getDiscountedPrice(product.price,discount);
  return (
    <div className='w-full max-w-7xl mx-auto p-4 md:grid md:grid-cols-2 items-center'>
      <div className='relative w-full'>
      <img 
       src={product.thumbnail}
       alt={product.title}
       className='w-full object-center rounded-md mb-4' />
       {product.discountPercentage && (
        <p className='bg-red-600 absolute px-5 py-1 rounded-xl top-10 sm:top-15 left-10 text-white font-bold text-xl'>{product.discountPercentage.toFixed(0) } % OFF </p>
      )}
      </div>
     <div className='grid gap-3'>
      <h1 className='text-6xl font-bold'>{product.brand}</h1>
      <h2 className='font-bold text-2xl'>{product.title}</h2>
      <p className='text-gray-600'>{product.description}</p>
      <div className='flex items-center text-green-600 font-bold text-2xl gap-3'>
      <p>{finalPrice.toFixed(0)} LE</p>
      {discount > 0 &&(
        <p className='text-red-600 line-through text-2xl font-bold'>{product.price.toFixed(0)} LE</p>
      )}
      </div>
      <div><RenderStars rating={product.rating}/></div>
     </div>
      
    </div>
  )
}

export default SingleProduct

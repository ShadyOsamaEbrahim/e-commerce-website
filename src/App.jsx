import { Fragment, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar'
import { Routes , Route } from "react-router-dom";
import SingleProduct from './components/Products/SingleProduct';
import Home from './pages/Home';
import Products from './components/Products/Products';
import FilterProducts from './components/Products/FilterProducts';
import { CartProvider } from './context/CartContext';
import Cart from './components/Navbar/Cart';
import { SearchProvider } from './context/SearchContext';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing:"ease-in-out",
    });
  }, []);
  return (
    <SearchProvider>

<CartProvider>
  
    <div className='bg-white dark:bg-gray-950 dark:text-white min-h-screen '>
      <Navbar />
      <div className='sm:pt-12 '>

    <Routes>
        <Route path="/" element={<Home />}/>
    <Route path="/product/:id" element={<SingleProduct />}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/category/:category' element={<FilterProducts />} />
      <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      </div>
    </div>
</CartProvider>
    </SearchProvider>
  )
}

export default App

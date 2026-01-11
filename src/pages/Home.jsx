import React from 'react'
import FirstPhotos from "../components/HomePage/FirstPhotos"
import Products from '../components/Products/Products'
import TopSelling from '../components/Products/TopSelling'
import FilterProducts from '../components/Products/FilterProducts'

const Home = () => {
  return (
    <>
    <FirstPhotos />
    <TopSelling />
    <FilterProducts category='laptops' />
    <FilterProducts category='womens watches' />
    <Products />

    </>
  )
}

export default Home

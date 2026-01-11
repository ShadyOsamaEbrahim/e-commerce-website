import React from 'react'


export const getDiscountedPrice = (price, discount = 0) => {
    if (!discount || discount <=0 ) return price;
    const discountedPrice = price - (price*discount)/100;
  return discountedPrice
}

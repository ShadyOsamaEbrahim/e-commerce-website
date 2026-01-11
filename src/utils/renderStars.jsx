import React from 'react'
import { FaRegStar, FaStar, FaRegStarHalfStroke } from "react-icons/fa6";

export const RenderStars = ({rating}) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaRegStarHalfStroke key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};



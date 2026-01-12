import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";


ReactDom.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter basename="/e-commerce-website" >
    <App />
  </BrowserRouter>
  
)

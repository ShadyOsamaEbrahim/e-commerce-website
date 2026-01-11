import Image1 from "../../assets/introPhotos/first.png";
import Image2 from "../../assets/introPhotos/second.png";
import Image3 from "../../assets/introPhotos/third.png";
import PrimaryButtons from "../layout/PrimaryButtons";
import Slider from "react-slick"
import Products from "../Products/Products";
import { useNavigate } from "react-router-dom";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description: `doloribus repellat cum recusandae,
         totam, non corporis veniam maiores 
         eum atque! Quia, voluptatem`,
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 30% off on all woman's Wear",
    description: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Laudantium voluptates
        quis voluptas eos, sed veritatis minus
        adipisci doloribus repellat cum recusandae,
        totam, non corporis veniam maiores eum atque! Quia, voluptatem`,
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laudantium voluptates quis voluptas eos, sed veritatis minus
        adipisci doloribus repellat cum recusandae, totam, non corporis
        veniam maiores eum atque! Quia, voluptatem`,
  },
];
function FirstPhotos() {
  const navigate = useNavigate();
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div>
{/* slider section */}
    <div
    className="relative overflow-hidden h-137.5
    sm:h-162.5 bg-gray-100 flex justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200   "
    >
      {/* background pattern */}
      <div 
      data-aos="fade-up"
        className="h-80 w-80  bg-mainColor/40 absolute
        -top-35 -right-10 sm:h-175 sm:w-175 
        sm:-top-80 sm:-right-30 rounded-3xl rotate-45 z-9  "
        ></div>
      {/* FirstPhotos section */}
      <div 
        
      className="w-full px-6  ">
        <Slider {...settings}>
          {ImageList.map((data) =>(
            
        
          <div className="grid justify-center items-center">
            {/* image section */}
            
           
                <img
                  src={data.img}
                  alt=""
                  className="w-60 h-60 sm:h-112.5 sm:w-112.5 
                  sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
           
            
            {/* text content section */}
            <div
            className="flex flex-col gap-4 items-center">
              <h1 
              data-aos="zoom-out"
              data-aos-duration="500"
              data-aos-once="true"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {data.title}
              </h1>
              <p
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"

              className="text-sm">
               {data.description}
              </p>
              <div
              data-aos="fade=up"
              data-aos-duration="500"
              data-aos-delay="300">
                <PrimaryButtons className="w-full" onClick={()=> navigate('/products')}>Order Now</PrimaryButtons>
              </div>
            </div>
          </div>
        
          ) )}

                  </Slider>
      </div>
    </div>
   
    
          </div>
  );
}

export default FirstPhotos;

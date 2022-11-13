import React from "react";
import Carousel from "react-elastic-carousel";

import style from "./style.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 2, itemsToShow: 2 },
  { width: 3, itemsToShow: 3 },
  { width: 4, itemsToShow: 4 },
  { width: 5, itemsToShow: 5 },
  { width: 5, itemsToShow: 6 },
];
const CarouselsM = () => {
  return (
    <>
    
        <Carousel  className={style.Carousel} breakPoints={breakPoints}>
         
            <div className={style.Cimgbox}>
              <img
                src="https://images.asos-media.com/products/asos-design-sandals-in-olive/201370900-2?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000"
                alt=""
              />
              <p>FOOTWEAR</p>
            </div>
         
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/asos-design-oversized-t-shirt-in-white-with-photographic-back-print/201154126-1-white?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>TOPS</p>
            </div>
          
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/adidas-training-earth-shades-aeroready-panelled-long-sleeve-half-zip-sweat-in-grey/201104836-1-grey?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>SPORTS BRANDS</p>
            </div>
          
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/bando-regular-fit-jersey-suit-jacket-in-stone/202183594-4?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>TAILORING</p>
            </div>
          

          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/asos-actual-oversized-hoodie-with-logo-front-print-in-rose/201355721-1-rosepink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>HOODIES & SWEATSHIRTS</p>
            </div>
            
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/puma-downtown-colourblock-shorts-in-pink-exclusive-to-asos/24307413-3?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>SHORT & TROUSERS</p>
            </div>
          
            <div className={style.Cimgbox}>
              <img src="https://images.asos-media.com/products/south-beach-tie-dye-swim-shorts-with-bonded-zip-in-pink/201557375-1-pink?$n_640w$&wid=513&fit=constrain&hei=236&wid=185&bgc=000000" alt="" />
              <p>SWIMWEAR</p>
            </div>
          
        
        </Carousel>
   
    </>
  );
};

export default CarouselsM;
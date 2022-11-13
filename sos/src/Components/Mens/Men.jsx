import React from "react";
import CarouselsM from "../carousel/CarouselM";

import style from './Men.module.css'
const Men = () => {
  
const saleimg="https://content.asos-media.com/-/media/homepages/unisex/homepages/2022/sale-lockups/sale/dt-white/215_40_dt_sale_white_uk_rosv2.png"

const secbackgroundsmall='https://content.asos-media.com/-/media/homepages/mw/2022/june/06/hero/mw_1mob_hero_640x692.jpg'

  return (
    <div>
      
      <div className={style.top_section}>
        <div className={style.sale_img}> <img src={saleimg} alt="" /></div>
        <div >
            <span>
               <h2 className={style.salespan}>UP TO 70% OFF!
               <br />
                IT'S CALLED BIG DISCOUNT ENERGY
            </h2> 
                </span>
        </div>
        <div className={style.cru}>
      <CarouselsM />

        </div>
        {/* <div className="crousel"></div> */}
        <div className="view-all-btn">
            <button className={style.middlebtn}>VIEW ALL</button>
        </div>
        <p className={style.topdis}> Limited time only. Selected styles marked down as shown.</p>
      </div>
      <div className={style.secSection}>
          <button className={style.secbtn}>SHOP ASOS DESIGN</button>
        <div className={style.summerj}>
      <span>  
        Summer juice
        </span>
      </div>
      </div>
      <div className={style.thirdSection}>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_festive_jewels_moment_870x1110.jpg" alt="" />
          <h3>ASOS DESIGN JEWELS</h3>
          <p>E-boy energy</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_au_footwear_moment_870x1110.jpg" alt="" />
          <h3>SHOES</h3>
          <p>Sneaky picks</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_asos_design_skate_prints_moment_870x1110.jpg" alt="" />
          <h3>SKATE PRINTS</h3>
          <p>Punk perfection by ASOS DESIGN</p>
        </div>
        <div className={style.imgbox}>
          <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_hiit_moment_870x1110.jpg" alt="" />
          <h3>HIIT</h3>
          <p>Ready,sweat,go!</p>
        </div>
      </div>
      <div className={style.fourthSection}></div>

      <div className={style.fifthSection}>
        <div className={style.imgbox1}>
        <img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_gbl_topman_moment_870x1110v2.jpg"></img>
        <h2>TOPMAN</h2>
        <p>Top-tier threads</p>
        <button className={style.fibtn}>SHOP THE BRAND</button> 
        </div>
        <div className={style.imgbox1}>
<img src="https://content.asos-media.com/-/media/homepages/mw/2022/june/06/moments/mw_swim_moment_870x1110.jpg"></img>
<h2>SWIM ESSENTIALS</h2>
<p>Everthing's just beachy</p>
<button className={style.fifbtn}>SHOP NOW</button> 
        </div>
      </div>
      <div className={style.sixSection}>
        <h2>TRENDING BRANDS</h2>
        <div className={style.imgflexbox}>
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg" alt="" />
        <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png" alt="" />
    <img src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg" alt="" />
    </div>
      </div>
    </div>
  );
};

export default Men;
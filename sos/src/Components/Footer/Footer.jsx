import React from 'react'
// import { UNSAFE_LocationContext, useLocation } from 'react-router-dom'
import style from './footer.module.css'
const Footer = () => {
//   let {pathname}=useLocation()
//   let page=pathname.split("/")[1]
//   if(page=="join")return null
  return (
    <div className={style.footer}>
        <div className={style.footerTop}>
          <div className={style.box1}>
            <img className={style.icon1} src="https://thumbs.dreamstime.com/b/facebook-logo-icon-voronezh-russia-november-square-blue-color-164585769.jpg" alt="" />
            <img className={style.icon1} src="https://thumbs.dreamstime.com/b/new-instagram-camera-logo-icon-purple-pink-vector-modern-gradient-design-illustrations-white-background-ai-138907950.jpg" alt="" />
            <img className={style.icon1} src="https://image.similarpng.com/very-thumbnail/2020/05/Glossy-Snapchat-logo-PNG.png" alt="" />
          </div>
          <span style={{marginLeft:"140px"}}>|</span>
          <div className={style.box2}>
            <img className={style.icon2} src="https://images.asos-media.com/navigation/visa-png" alt="" />
          <img className={style.icon2} src="https://images.asos-media.com/navigation/mastercard-png" alt="" />
          <img className={style.icon2} src="https://images.asos-media.com/navigation/pay-pal-png" alt="" />
          <img className={style.icon2} src="https://images.asos-media.com/navigation/american-express-png" alt="" />
          <img className={style.icon2} src="https://images.asos-media.com/navigation/visa-electron-png" alt="" />
          </div>

        </div>
        <div className={style.bottom}>
         <div className={style.innerBottom}>
         <div>
            <ul type="none">
              <li><h4 className={style.heading}>HELP & INFORMATION</h4></li>
              <li><a className={style.anchor} href="https://www.asos.com/customer-care/">Help</a></li>
              <li><a className={style.anchor} href='https://my.asos.com/my-account/orders?country=IN&keyStoreDataversion=dupqtf-35&lang=en-GB&store=ROW&_gl=1*3c3ldd*_ga*MTY0ODAzODI2Mi4xNjU1MTMyMTk4*_ga_1JR0QCFRSY*MTY1NTI4NDExNi44LjEuMTY1NTI4NDE4Ny42MA..*_fplc*N2JiNTFGYWFPT0RHZjlJTm1DdlElMkJMRUd0c0pZNkZhaUlFNFNwNjA1UEJPOWJLY1RCWnpvYTI0eHlWVlZJdWxlUmg0VHA1Q3ZBMzBGcml6STVWSzVNa0E5MmhPcnZ3ZzdWcTl1VzlGWGJGOURoJTJCZyUzRA..&_ga=2.172742755.1151980577.1655132198-1648038262.1655132198'>Track order</a></li>
              <li><a className={style.anchor} href="https://www.asos.com/payments-and-deliveries/delivery/">Delivery {'&'} erturns</a></li>
            </ul>
          </div>
          <div>
            <ul type="none">
              <li><h4 className={style.heading}>ABOUT ASOS</h4></li>
              <li><a className={style.anchor} href="https://www.asos.com/about/">About us</a></li>
              <li><a className={style.anchor} href="https://asoscareers.asos.com/">Careers at ASOS</a></li>
              <li><a className={style.anchor} href="https://www.asosplc.com/fashion-with-integrity/">Carporate responsibility</a></li>
              <li><a className={style.anchor} href="https://www.asosplc.com/">Investir's site</a></li>
            </ul>

          </div>
          <div>
            <ul type="none">
              <li><h4 className={style.heading}>MORE FROM ASOS</h4></li>
              <li><a className={style.anchor} href="https://www.asos.com/discover/our-apps/">Mobiles and ASOS apps</a></li>
              <li><a className={style.anchor} href="https://marketplace.asos.com/?ctaref=Global%20footer">ASOS marketpalce</a></li>
              <li><a className={style.anchor} href="https://www.asos.com/gift-vouchers/?ctaref=global%20footer|gift%20vouchers">Gift vouchers</a></li>
              <li><a className={style.anchor} href="https://www.asos.com/discover/black-friday-cyber-monday-deals/">Black Friday</a></li>
              <li><a className={style.anchor} href="https://thrift.plus/pages/get-started-asos">ASOS x Thrift+</a></li>
            </ul>
          </div>
          <div>
            <ul type="none">
              <li><h4 className={style.heading}>SHOPPING FROM:</h4></li>
              <li className={style.last}>You're in <span><img className={style.icon3} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/joypixels/291/flag-india_1f1ee-1f1f3.png" alt="" /></span><span>| CHANGE</span></li>
            </ul>
          </div>
         </div>
        </div>

        <div style={{display: "flex",width: "100%",height: "50px" ,justifyContent: "space-between",margin:"auto" ,backgroundColor:"rgba(201, 198, 198, 0.964) "}}>
         
         <div style={{display: "flex",width: "60%",height: "40px" ,justifyContent: "space-between",margin:"auto",}}>
            <div style={{marginTop:"5px"}}>
              <p>@ 2022 ASOS</p>
            </div>

            <div style={{marginTop:"5px"}}>
              <a href="https://thrift.plus/pages/get-started-asos" style={{textDecoration:"none",color:"black"}}>Privacy & Cookies</a>

                <span style={{marginLeft:"5px",marginRight:"5px"}}>|</span>

              <a href="https://thrift.plus/pages/get-started-asos"style={{textDecoration:"none",color:"black"}}>Ts&Cs</a>

                <span style={{marginLeft:"5px",marginRight:"5px"}}>|</span>

              <a href="https://thrift.plus/pages/get-started-asos"style={{textDecoration:"none",color:"black"}}>Accessibility</a>
            </div>

         </div>
         

        </div>
    </div>
  )
}

export default Footer
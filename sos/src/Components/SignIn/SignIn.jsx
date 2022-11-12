 import React from 'react'
 import { useNavigate } from 'react-router-dom'
 import styles from "./signin.module.css"

// import { RangeSliderFilledTrack } from "@chakra-ui/react";

 const SingIn = () => {
     const navigation = useNavigate()
     function onclickhandler(){
         let user=JSON.parse(localStorage.getItem("user"))
         navigation('/')
     }
   return (
     <div>
        
         <div className={styles.joinSection}>
             <div className={styles.inputDiv}>
                 <label className={styles.label}>EMAIL ADDRESS:</label>
                 <input className={styles.input} type="email" />
                 <label className={styles.label}>PASSWORD:</label>
                 <input className={styles.input} type="password" />
                 <button className={styles.signinButton} onClick={onclickhandler}>SIGN IN</button>
                 <p className={styles.forget}>Forget password?</p>
             </div>
             <h2 className={styles.heading1}>OR SIGN IN WITH...</h2>
             <div className={styles.gridButtons}>
                 <button className={styles.gridButton}>
                     <img className={styles.googleLogo} src="https://www.dtl.coventry.domains/wp-content/uploads/2020/07/Google-Logo.png" alt="" />
                     GOOGLE
                 </button>
                 <button className={styles.gridButton}>
                     <img className={styles.appleLogo} src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png" alt="" />
                     APPLE</button>
                 <button className={styles.gridButton}>
                     <img className={styles.facebookLogo} src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-flat-facebook-logo-png-icon-circle-22.png" alt="" />
                     FACEBOOK</button>
               <button className={styles.gridButton}>
                   <img className={styles.twitterLogo} src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
                   TWITTER</button>
            </div>
        </div>
        <div className={styles.footerLink}>
            <a href="">Privacy Policy</a>
            <a className={styles.footerline} href="">Terms and Conditions</a>
        </div>
    </div>
  )
 }

export default SingIn

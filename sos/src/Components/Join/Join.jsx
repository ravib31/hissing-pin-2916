import React from 'react'
import styles from "./join.module.css"

const Join = ({setShow}) => {
    const [user,setuser]=React.useState({
        fname:"",
        lname:"",
        email:"",
        password:"",

    })
    function onchange(e){
        setuser({...user,[e.target.name]:e.target.value})

    }
    function onclickhandler(){
        
        
        localStorage.setItem("user",JSON.stringify(user))
        setShow(false)
    }   
  return (
    <div>
        <div className={styles.joinSection}>
            <h2 className={styles.heading1}>SIGN UP WITH...</h2>
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
            </div>
            <div>
                <p className={styles.para}>Signing up with social is super quick. 
                    No extra passwords to remember - no brain fail. <br />
                    Don't worry, we'd never share any of your data or 
                    post anything on your behalf #notevil
                </p>
            </div>
            <h2 className={styles.heading1}>OR SIGN UP WITH EMAIL</h2>
            <div className={styles.inputDiv}>
                <label className={styles.label}>EMAIL ADDRESS:</label>
                <input className={styles.input} onChange={onchange} name='email' type="email" />
                <p className={styles.belowInput}>We'll send your order confirmation here</p>
                <label className={styles.label}>FIRST NAME:</label>
                <input className={styles.input} onChange={onchange} name='fname' type="name" />
                <label className={styles.label}>LAST NAME:</label>
                <input className={styles.input} onChange={onchange} name='lname' type="name" />
                <label className={styles.label}>PASSWORD:</label>
                <input className={styles.input} onChange={onchange} name='password' type="password" />
                <p className={styles.belowInput}>Must be 10 or more characters</p>
                <label className={styles.label}>DATE OF BIRTH:</label>
                <input className={styles.input} type="date" />
                <p className={styles.belowInput}>You need to be 16 or over to use ASOS</p>
                <label className={styles.label}>MOSTLY INTERESTED IN:</label>
                <div className={styles.radiobox}>
                    <input className={styles.input} type="radio" />
                    <p>Womenswear</p>
                    <input className={styles.input} type="radio" />
                    <p>Menswear</p>
                </div>
                <label className={styles.contactPref}>CONTACT PREFERENCES</label>
                <div className={styles.selectAll}>
                    <p className={styles.belowInput}>Tell us which emails you’d like:</p>
                    <button>SELECT ALL</button>
                </div>
                <div className={styles.checkbox}>
                    <p>Discounts and sales</p>
                    <input type="checkbox" />
                </div>
                <div className={styles.checkbox}>
                    <p>New Stuff</p>
                    <input type="checkbox" />
                </div>
                <div className={styles.checkbox}>
                    <p>Your Exclusives</p>
                    <input type="checkbox" />
                </div>
                <div className={styles.checkbox}>
                    <p>ASOS Partners</p>
                    <input type="checkbox" />
                </div>
                <button className={styles.signinButton} onClick={onclickhandler}>JOIN ASOS</button>
            </div>
           
        </div>
        <div className={styles.footerLink}>
            <a href="">Privacy Policy</a>
            <a className={styles.footerline} href="">Terms and Conditions</a>
        </div>
    </div>
  )
}

export default Join
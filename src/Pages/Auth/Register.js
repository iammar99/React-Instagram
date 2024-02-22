import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
//  ---------------------- Firebase ---------------------- 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from 'Config/firebase';
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "Config/firebase"
//  ---------------------- Auth Context ---------------------- 
import { useAuthContext } from 'Context/AuthContext';

export default function Register() {

  const [state, setState] = useState({})
  const [isChecked, setIsChecked] = useState(false)
  const { dispatch } = useAuthContext()

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  let { email, password, username, fulllname } = state

  const handleCheckbox = () => {
    setIsChecked(!isChecked)
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    // console.log('state', state)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        let userToRegistered = { ...state, id: user.uid }
        setDoc(doc(firestore, "Users", user.uid), userToRegistered);
        localStorage.setItem("Token", "True")
        localStorage.setItem("user", JSON.stringify(userToRegistered))
        dispatch({type:"Set_Logged_In" , payload:{userToRegistered}})
        console.log('Registered')
        // ...
      })
      .catch((error) => {
        console.log('error', error)
        // ..
      });
  }

  return (
    <div className='signUp-container'>
      <div className="container d-flex p-0" style={{ "justifyContent": "center", "alignItems": "center" }}>
        <div className="form-container">
          <form>
            {/* Instagram text */}
            <i
              data-visualcompletion="css-img"
              aria-label="Instagram"
              className=""
              role="img"
              style={{
                backgroundImage:
                  'url("https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png")',
                backgroundPosition: "0px -52px",
                backgroundSize: "auto",
                marginBottom: "40px",
                width: 175,
                height: 51,
                backgroundRepeat: "no-repeat",
                display: "inline-block"
              }}
            />
            <b className='text-center' style={{ "color": "#737577" }}>
              Sign up to see photos and videos from your friends.
            </b>
            {/* ------------ Login With Facebook ------------ */}
            <button className="btn facebook-btn">
              {/* <img src={logo}
                className="facebook-logo image-fluid" alt="" /> */}
              <span>Login with Facebook</span>
            </button>
            {/* ----------- Or ----------- */}
            <span className="or">OR</span>
            <input type="email" name="email" placeholder='email' className='form-control' onChange={handleChange} />
            <input type="text" name="fullname" placeholder='Full Name' className='form-control' onChange={handleChange} />
            <input type="text" name="username" placeholder='UserName' className='form-control' onChange={handleChange} />
            <div className="password-container">
              <input type={!isChecked ? `password` : `text`} name="password" placeholder='Password' className='form-control' onChange={handleChange} />
              <label className="checkbox-container">
                <input type="checkbox" defaultChecked="checked" onChange={handleCheckbox} />
                <b className='eye'>
                  Hide
                </b>
                <b className='eye-slash'>
                  Show
                </b>
              </label>
            </div>
            {/* ----------- Links ----------- */}
            <p className='links'>
              People who use our service may have uploaded your contact information to Instagram. <Link>Learn More</Link>
            </p>
            <p className='links'>
              By signing up, you agree to our <Link>Terms</Link> , <Link>Privacy Policy</Link> and <Link>Cookies Policy </Link>.
            </p>
            <button className="login-btn" onClick={handleRegister}  >
              Sign Up
            </button>
          </form>
          {/* --------- Log in --------- */}
          <div className="signup-container">
            Have an account ?
            <Link to={"/"} style={{ "color": "#1778f2" }}>
              Log in
            </Link>
            {/* --------- Get The App --------- */}
          </div>
          <div className='getApp'>
            Get the app
            {/* ---------  Software Installed Images   --------- */}
            <div className="installpic">
              <a
                aria-label="Get it on Google Play"
                className="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _aa5s _a6hd"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D2B846993-332E-4830-A409-65A8DB97B26C%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1"
                rel="nofollow noopener"
                role="link"
                tabIndex={0}
                target="_blank"
              >
                <img
                  alt="Get it on Google Play"
                  className="_aa5q"
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                />
              </a>
              <a
                aria-label="Get it from Microsoft"
                className="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _aa5s _a6hd"
                href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1394%2C1320"
                role="link"
                tabIndex={0}
              >
                <img
                  alt="Get it from Microsoft"
                  className="_aa5q"
                  src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
                />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

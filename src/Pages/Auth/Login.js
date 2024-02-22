import React, { useState } from 'react'
import { Link } from "react-router-dom"
import phone from "../../Assets/phone.png"
// --------------- Firebase ---------------
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from 'Config/firebase';
//  ---------------------- Auth Context ---------------------- 
import { useAuthContext } from 'Context/AuthContext';

export default function Login() {

  const [state, setState] = useState({})
  const [filled, setFilled] = useState(false)
  const [error, setError] = useState(false)
  const { dispatch } = useAuthContext()

  const handleChange = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  let { email, password } = state


  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem("Token", "True")
        localStorage.setItem("user", JSON.stringify(state))
        dispatch({ type: "Set_Logged_In", payload: { state } })
        console.log('Login')
        // ...
      })
      .catch((error) => {
        console.log('error', error)
        setError(true)
      });
  }

  return (
    <>
      <div className="container d-flex p-0" style={{ "justifyContent": "center", "alignItems": "center", "height": "100vh" }}>
        <img src={phone} alt="" className='phone-img' />
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
                // marginBottom: "40px",
                width: 175,
                height: 51,
                backgroundRepeat: "no-repeat",
                display: "inline-block"
              }}
            />
            <input type="email" name="email" placeholder='email' className='form-control' onChange={handleChange} />
            <input type="password" name="password" placeholder='Password' className='form-control' onChange={handleChange} />
            <button className="login-btn" onClick={handleLogin}>
              Log In
            </button>
            {/* ----------- Or ----------- */}
            <span className="or">OR</span>
            {/* -------------- Facebook -------------- */}
            <span className='facebook-login'>
              <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png"
                className="facebook-logo image-fluid" alt="" />
              <span>Login with Facebook</span>
            </span>
            {/* --------- Error Message --------- */}
            {
              error
                ?
                <span className="error-msg">
                  Sorry, your password was incorrect. Please double-check your password
                </span>
                :
                <></>
            }
            {/* --------- Forgot Password --------- */}
            <Link className='forgot-password'>
              Forgot Password
            </Link>
          </form>
          {/* --------- Sign up --------- */}
          <div className="signup-container">
            Don't have an account ?
            <Link to={"/signup/"}>
              Sign Up
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
    </>
  )
}

import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [isChecked, setisChecked] = useState(false)

  const handleCheck = () => {
    setisChecked(!isChecked)
  }
  return (
    <nav>
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
      <a href="">
        <i className="fa-solid fa-house" style={{ "color": "black" }}></i>
        <span>
          Home
        </span>
      </a>
      <a href="">
        <i className="fa-solid fa-magnifying-glass" style={{ "color": "black" }}></i>
        <span>
          Search
        </span>
      </a>
      <a href="">
        <i className="fa-regular fa-compass" style={{ "color": "black" }}></i>
        <span>
          Explore
        </span>
      </a>
      <a href="">
        <i className="fa-solid fa-camera-retro" style={{ "color": "black" }}></i>
        <span>
          Reel
        </span>
      </a>
      <a href="">
        <i className="fa-brands fa-facebook-messenger" style={{ "color": "black" }}></i>
        <span>
          Message
        </span>
      </a>
      <a href="">
        <i className="fa-regular fa-heart" style={{ "color": "black" }}></i>
        <span>
          Notification
        </span>
      </a>
      <a href="">
        <i className="fa-regular fa-square-plus" style={{ "color": "black" }}></i>
        <span>
          Create
        </span>
      </a>
      <a href="">
        <span>
          Profile
        </span>
      </a>
      {/* ----------- More Option ----------- */}
      <div className={`more-option d-${(isChecked) ? "block" : "none"}`}>
        fdsf
      </div>
      <label className="burger" htmlFor="burger" >
        <input type="checkbox" id="burger" onChange={handleCheck} />
        <span />
        <span />
        <span />
        <div className='more-link'>
          More
        </div>
      </label>
    </nav>
  )
}

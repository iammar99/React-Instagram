import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="link-container">
                    <Link className='underline'>Meta</Link>
                    <Link className='underline'>About</Link>
                    <Link className='underline'>Blog</Link>
                    <Link>Jobs</Link>
                    <Link className='underline'>Help</Link>
                    <Link className='underline'>API</Link>
                    <Link>Privacy</Link>
                    <Link>Terms</Link>
                    <Link>Locations</Link>
                    <Link>Instagram Lite</Link>
                    <Link className='underline'>Threads</Link>
                    <Link>Contact Iploading & Non-Users</Link>
                    <Link className='underline'>Meta Verified</Link>
                </div>
            </footer>
        </>
    )
}

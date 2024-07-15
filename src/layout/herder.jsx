import Link from 'next/link'
import React from 'react'
export default function Herder() {
  return (
    <div> <header>
    <div className="_main_nav">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3 className="logo"><a href="/">Lawyer</a></h3>
                </div>
                <div className="col-md-9">
                    <div className="nav">
                        <div className="menu-toggle"></div>
                        <div className="my-nav">
                            <div className="menu">
                              <ul>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/services">Services</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/contact">Contact Us</Link></li>
                              </ul>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
</header></div>
  )
}

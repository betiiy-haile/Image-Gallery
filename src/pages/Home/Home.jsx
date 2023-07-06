import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {
  return (
    <section className="home">
      <div className="text__content">
        <div className="our-slogan">
          Save Your Day <span className="small">with Your</span> Camera!!
        </div>
        <Link to='images' className="btn">Share your cool pictures</Link>
      </div>
    </section>
  );
}

export default Home

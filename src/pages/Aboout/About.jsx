import React from 'react'
import { Link } from "react-router-dom"
import CameraMan from "../../Assets/cameraMan.jpg"
import Mountain from "../../Assets/mountain-2.jpg"
import "./About.css"

const About = () => {
  return (
    <section className="about">
      <div className="first-row">
        <div className="about-us">
          <h2>Get to Know about Us!!</h2>
          <p className="text-light">
            Our photo sharing platform is a community for photographers to share
            their creativity and passion with the world. Whether you're a
            professional or an amateur, our platform provides a space to
            showcase your work, connect with other photographers, and discover
            new perspectives.
          </p>
          <Link to="contact" className="btn">
            Any Questions
          </Link>
        </div>
        <div className="image">
          <img src={CameraMan} alt="camera man" />
        </div>
      </div>

      <div className="second-row">
        <div className="about-us">
          <h2>How to be A Member</h2>
          <p className="text-light">
            Join our platform by creating an account and sharing your photos.
            Connect with other photographers, add captions and tags, and engage
            through comments and feedback. Discover new perspectives and build
            your portfolio in a vibrant community of photographers.
          </p>
          <Link to="register" className="btn">
            Be A Member
          </Link>
        </div>
        <div className="image">
          <img src={Mountain} alt="Mountain" />
        </div>
      </div>
    </section>
  );
}

export default About

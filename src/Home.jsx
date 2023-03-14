import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import NavBar from './NavBar';
import image from './web.png';

const HeroSection = () => {
    return (
        <>
            <span className="dot" id="one"></span>
            <span className="dot" id="two"></span>
            <NavBar/>
            <section className="hero-section">
                <h1>Which ArtLab character are you?</h1>
                <p>Our psychological assessment will help you discover your strengths, weaknesses, and hidden talents in just a few clicks! So why wait? Take the first step towards self-discovery today and see what amazing things await you!</p>
                <Link to="/assessment">
                    <button>Start Assessment</button>
                </Link>

            </section>
                <img src={image} alt="" />
        </>
    );
};

export default HeroSection;

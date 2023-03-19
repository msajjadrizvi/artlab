import React from 'react';
import './home.css'
import NavBar from '../../../components/header/NavBar';
import { Button } from '../../../components/common/Button';
import { useNavigate } from "react-router-dom";
import image from '../../../web.png';

const HeroSection = () => {
    const navigate = useNavigate()
    //
    const handleClick = () => {
        navigate(`/assessment`)
    }
    //
    return (
        <div className="main-container">
            <NavBar/>
            <div className="hero-section">
                <h1>Which ArtLab character are you?</h1>
                <p>Our psychological assessment will help you discover your strengths, weaknesses, and hidden talents in just a few clicks! So why wait? Take the first step towards self-discovery today and see what amazing things await you!</p>
                <Button value={`Start Assessment`} onClick={handleClick}/>
                <img src={image} alt="home" className="home-img"/>
            </div>
        </div>
    );
};

export default HeroSection;

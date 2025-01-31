/* eslint-disable no-unused-vars */
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Box, Typography } from '@mui/material';
import Nav from '../Navbar/Nav';
import Sidenav from '../Navbar/Sidenav';
import FacebookLogin from './FacebookLogin';
import InstagramLogin from './InstagramLogin';
import TelegramLogin from './TelegramLogin';
import YoutubeLogin from './YoutubeLogin';
import TwitterLogin from './TwitterLogin';
import LinkedInLogin from './LinkedInLogin';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCirclePlay } from "react-icons/fa6";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RedditLogin from './RedditLogin';

const SocialMediaLogin = () => {

    return (
        <>
            <Nav />
            <div style={{ display: 'flex' }}>
                <Sidenav />
                <Box sx={{ flexGrow: 1, marginLeft: '1rem' }}>
                    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                        <h1 style={{ textAlign: 'center', color: '#ba343b', fontSize: '1.7rem' }}>
                            Connect a Social Network
                        </h1>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='container-soc'>
                                <div className='box-container-soc' style={{ display: 'flex', justifyContent: 'space-around', margin: '25px auto', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                                    <FacebookLogin />
                                    <InstagramLogin />
                                    <TelegramLogin />
                                    <LinkedInLogin />
                                </div>
                            </div>
                        </div>
                        <h1 style={{ textAlign: 'center', color: '#ba343b', fontSize: '24px', margin: '10px auto' }}>
                            Upcoming Media Platforms
                        </h1>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', marginTop: '-2rem' }}>
                            <div className='container-soc' style={{ maxWidth: '1200px', width: '100%' }}>
                                <div className='box-container-soc' style={{ display: 'flex', justifyContent: 'space-around', margin: '25px auto', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                                    <div style={{ position: 'relative', textAlign: 'center' }}>
                                        <YoutubeLogin />
                                        <AutoAwesomeIcon style={{ position: 'absolute', top: '10px', right: '25px', color: '#ffbf00', fontSize: '2rem' }} />
                                    </div>
                                    <div style={{ position: 'relative', textAlign: 'center' }}>
                                        <TwitterLogin />
                                        <AutoAwesomeIcon style={{ position: 'absolute', top: '10px', right: '25px', color: '#ffbf00', fontSize: '2rem' }} />
                                    </div>
                                    <div style={{ position: 'relative', textAlign: 'center' }}>
                                        <RedditLogin />
                                        <AutoAwesomeIcon style={{ position: 'absolute', top: '10px', right: '25px', color: '#ffbf00', fontSize: '2rem' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </Box>
            </div>
            <div className="icon-container">
                <Link to='/reference-video'><FaCirclePlay className="circle-icon" /></Link>
                <div className="hover-content">reference video</div>
            </div>
            <Footer />
        </>
    );
}

const Footer = () => {
    return (
        <Box p={2} textAlign="center" bgcolor="##333333" marginTop={9.3}>
            <Typography variant="body1" color='#fff' textAlign="center">
                &copy; {new Date().getFullYear()} Quantum Share. All rights reserved | <Link to='/privacy-policy' id="privacy">Privacy Policy</Link>
            </Typography>
        </Box>
    );
}

export default SocialMediaLogin;
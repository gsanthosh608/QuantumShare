import React, { useState } from 'react';
import Logo from '../Assets/Quantum_Logo.webp';
import '../CssFolder/template.css';
import EditContainer from './EditContainer';

const Template = () => {
  const defaultContent = 'Engage with your audience, grow your brand, and analyze performance with our comprehensive social media tools.';

  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [titleColor, setTitleColor] = useState('');
  const [content, setContent] = useState('');
  const [contentColor, setContentColor] = useState('');
  const [footer, setFooter] = useState('');
  const [footerColor, setFooterColor] = useState('');
  const [logoUrl, setLogoUrl] = useState('');
  const [logoSize, setLogoSize] = useState(); // Default logo size
  const [bgColor, setBgColor] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');

  return (
   
      <div className="home-container" style={{ display: 'flex' }}>
        <div
          className="template-section"
          style={{
            padding: '5px',
            width: '40%',
            marginRight: '10px',
            backgroundImage: `url(${backgroundImage})`, // Correct backgroundImage syntax
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div id="custom-template-wrapper" style={{ backgroundColor: bgColor || '' }}>
            <div className="logo-container" style={{ width: `${logoSize}px`, height: `${logoSize}px` }}>
              <img src={logoUrl || Logo} alt="logo" className="logo-image" />
            </div>
            <div className="title-section">
              <h1 className="title" style={{ color: titleColor || '#E94560' }}>
                {title || 'Welcome to Our Platform'}
              </h1>
            </div>
            <div className="content-section">
              <p className="content-text" style={{ color: contentColor || '#E5E5E5' }}>
                {content || defaultContent}
              </p>
            </div>
            <div className="footer-section">
              <p className="footer-text" style={{ color: footerColor || '#E94560' }}>
                {footer || '© 2024 Your Company Name. All rights reserved.'}
              </p>
            </div>
          </div>
        </div>

        <div className="editing-section" style={{ padding: '5px', width: '35%', marginLeft: '55%' }}>
          <EditContainer
            imageUrl={imageUrl}
            updateImageUrl={setImageUrl}
            updateTitle={setTitle}
            updateTitleColor={setTitleColor}
            updateContent={setContent}
            updateContentColor={setContentColor}
            updateFooter={setFooter}
            updateFooterColor={setFooterColor}
            logoUrl={logoUrl}
            updateLogoUrl={setLogoUrl}
            logoSize={logoSize}
            updateLogoSize={setLogoSize}
            bgColor={bgColor}
            updateBgColor={setBgColor}
            updateBackgroundImage={setBackgroundImage}
          />
        </div>
      </div>
    
  );
};

export default Template;

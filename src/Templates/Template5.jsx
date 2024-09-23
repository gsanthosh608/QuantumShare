import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaPlusCircle, FaDownload, FaTimes, FaPhoneAlt, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import logo1 from '../Assets/T5l.jpg';
import bg5 from '../Assets/T5b.jpg'

const Template5 = () => {
  const [companyName, setCompanyName] = useState("Quantum Paradigm");
  const [tagline, setTagline] = useState("Delivering cutting-edge solutions for a smarter, more connected world.");
  const [footerText, setFooterText] = useState("");
  const [logo, setLogo] = useState(logo1);
  const [teamPhoto, setTeamPhoto] = useState("T5p.jpg");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentEditingElement, setCurrentEditingElement] = useState(null);
  const [companyNameFontSize, setCompanyNameFontSize] = useState("34px");
  const [companyNameFontStyle, setCompanyNameFontStyle] = useState("italic");
  const [companyNameColor, setCompanyNameColor] = useState("#000000");
  const [taglineFontSize, setTaglineFontSize] = useState("27px");
  const [taglineFontStyle, setTaglineFontStyle] = useState("normal");
  const [taglineColor, setTaglineColor] = useState("#F7F9F2");
  const [footerFontSize, setFooterFontSize] = useState("25px");
  const [footerFontStyle, setFooterFontStyle] = useState("normal");
  const [footerColor, setFooterColor] = useState("#000000");
  const [phoneNumber, setPhoneNumber] = useState("+123456789");
  const [email, setEmail] = useState("contact@quantumparadigm.com");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [logoDimensions, setLogoDimensions] = useState({ width: 170, height: 79 });
  const [teamPhotoDimensions, setTeamPhotoDimensions] = useState({ width: 368, height: 359 });

  const handleLogoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setLogo(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleTeamPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setTeamPhoto(event.target.result);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDownload = () => {
    html2canvas(document.querySelector(".template")).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL("image/png");
      link.download = 'template.png';
      link.click();
    });
  };

  const openPopup = (element) => {
    setIsPopupOpen(true);
    setCurrentEditingElement(element);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentEditingElement(null);
  };

  const handleResize = (e, dimension, setter) => {
    const newValue = parseInt(e.target.value);
    setter(prev => ({ ...prev, [dimension]: newValue }));
  };

  const renderPopupContent = () => {
    switch (currentEditingElement) {
      case 'companyName':
        return (
          <div>
            <h3>Edit Company Name Styles</h3>
            <div>
              <label>Font Size:</label>
              <input
                type="number"
                min="8"
                max="72"
                value={parseInt(companyNameFontSize)}
                onChange={(e) => setCompanyNameFontSize(`${e.target.value}px`)}
              />
            </div>
            <div>
              <label>Font Style:</label>
              <select value={companyNameFontStyle} onChange={(e) => setCompanyNameFontStyle(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div>
              <label>Color:</label>
              <input
                type="color"
                value={companyNameColor}
                onChange={(e) => setCompanyNameColor(e.target.value)}
              />
            </div>
          </div>
        );
      case 'tagline':
        return (
          <div>
            <h3>Edit Tagline Styles</h3>
            <div>
              <label>Font Size:</label>
              <input
                type="number"
                min="8"
                max="72"
                value={parseInt(taglineFontSize)}
                onChange={(e) => setTaglineFontSize(`${e.target.value}px`)}
              />
            </div>
            <div>
              <label>Font Style:</label>
              <select value={taglineFontStyle} onChange={(e) => setTaglineFontStyle(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div>
              <label>Color:</label>
              <input
                type="color"
                value={taglineColor}
                onChange={(e) => setTaglineColor(e.target.value)}
              />
            </div>
          </div>
        );
      case 'footer':
        return (
          <div>
            <h3>Edit Footer Styles</h3>
            <div>
              <label>Font Size:</label>
              <input
                type="number"
                min="8"
                max="72"
                value={parseInt(footerFontSize)}
                onChange={(e) => setFooterFontSize(`${e.target.value}px`)}
              />
            </div>
            <div>
              <label>Font Style:</label>
              <select value={footerFontStyle} onChange={(e) => setFooterFontStyle(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div>
              <label>Color:</label>
              <input
                type="color"
                value={footerColor}
                onChange={(e) => setFooterColor(e.target.value)}
              />
            </div>
          </div>
        );
      case 'logo':
        return (
          <div>
            <h3>Replace Logo</h3>
            <div>
              <label>Upload New Logo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
              />
            </div>
            {logo && (
              <div>
                <h4>Resize Logo</h4>
                <div>
                  <label>Width:</label>
                  <input
                    type="number"
                    min="50"
                    max="500"
                    value={logoDimensions.width}
                    onChange={(e) => handleResize(e, 'width', setLogoDimensions)}
                  />
                  <label>Height:</label>
                  <input
                    type="number"
                    min="50"
                    max="500"
                    value={logoDimensions.height}
                    onChange={(e) => handleResize(e, 'height', setLogoDimensions)}
                  />
                </div>
                <img
                  src={logo}
                  alt="Logo Preview"
                  style={{ width: `${logoDimensions.width}px`, height: `${logoDimensions.height}px`, marginTop: '10px' }}
                />
              </div>
            )}
          </div>
        );
      case 'teamPhoto':
        return (
          <div>
            <h3>Replace Team Photo</h3>
            <div>
              <label>Upload New Team Photo:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleTeamPhotoChange}
              />
            </div>
            {teamPhoto && (
              <div>
                <h4>Resize Team Photo</h4>
                <div>
                  <label>Width:</label>
                  <input
                    type="number"
                    min="50"
                    max="500"
                    value={teamPhotoDimensions.width}
                    onChange={(e) => handleResize(e, 'width', setTeamPhotoDimensions)}
                  />
                  <label>Height:</label>
                  <input
                    type="number"
                    min="50"
                    max="500"
                    value={teamPhotoDimensions.height}
                    onChange={(e) => handleResize(e, 'height', setTeamPhotoDimensions)}
                  />
                </div>
                <img
                  src={teamPhoto}
                  alt="Team Photo Preview"
                  style={{ width: `${teamPhotoDimensions.width}px`, height: `${teamPhotoDimensions.height}px`, marginTop: '10px' }}
                />
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="template" style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#F7F9F2', padding: '20px', boxSizing: 'border-box',backgroundImage:`url(${bg5})` }}>
      <Draggable>
        <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: '1000' }}>
          <button onClick={handleDownload} style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '20px', color: '#000' }}>
            <FaDownload />
          </button>
        </div>
      </Draggable>
      <h1 style={{ fontSize: companyNameFontSize, fontStyle: companyNameFontStyle, color: companyNameColor, textAlign: 'center', margin: '10px 0' }} onClick={() => openPopup('companyName')}>
        {companyName}
      </h1>
      <h2 style={{ fontSize: taglineFontSize, fontStyle: taglineFontStyle, color: taglineColor, textAlign: 'center', margin: '10px 0' }} onClick={() => openPopup('tagline')}>
        {tagline}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <img src={logo} alt="Logo" style={{ width: `${logoDimensions.width}px`, height: `${logoDimensions.height}px`, marginRight: '10px' }} />
        <img src={teamPhoto} alt="Team" style={{ width: `${teamPhotoDimensions.width}px`, height: `${teamPhotoDimensions.height}px` }} />
      </div>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button onClick={() => openPopup('phone')} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#000' }}>
          <FaPhoneAlt /> {isEditingPhone ? (
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={() => setIsEditingPhone(false)}
            />
          ) : (
            <span onClick={() => setIsEditingPhone(true)}>{phoneNumber}</span>
          )}
        </button>
        <button onClick={() => openPopup('email')} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#000' }}>
          <FaEnvelope /> {isEditingEmail ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setIsEditingEmail(false)}
            />
          ) : (
            <span onClick={() => setIsEditingEmail(true)}>{email}</span>
          )}
        </button>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => openPopup('footer')} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#000' }}>
            <FaUserPlus /> {footerText || "Add Footer Text"}
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}>
          <button onClick={closePopup} style={{ cursor: 'pointer', background: 'none', border: 'none', color: '#000', float: 'right' }}>
            <FaTimes />
          </button>
          {renderPopupContent()}
        </div>
      )}
    </div>
  );
};

export default Template5;

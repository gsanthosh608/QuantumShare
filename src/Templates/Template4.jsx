import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaPlusCircle, FaDownload, FaTimes } from 'react-icons/fa';
import html2canvas from 'html2canvas';

const Template4 = () => {
  const [companyName, setCompanyName] = useState("Quantum Paradigm");
  const [tagline, setTagline] = useState("Delivering cutting-edge solutions for a smarter, more connected world.");
  const [footerText, setFooterText] = useState("© Quantum Paradigm | Empowering Innovation");

  const [logo, setLogo] = useState("T7l.jpg");
  const [teamPhoto, setTeamPhoto] = useState("T7b.jpg");

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentEditingElement, setCurrentEditingElement] = useState(null);

  const [companyNameFontSize, setCompanyNameFontSize] = useState("24px");
  const [companyNameFontStyle, setCompanyNameFontStyle] = useState("normal");
  const [companyNameColor, setCompanyNameColor] = useState("#000000");

  const [taglineFontSize, setTaglineFontSize] = useState("16px");
  const [taglineFontStyle, setTaglineFontStyle] = useState("normal");
  const [taglineColor, setTaglineColor] = useState("#000000");

  const [footerFontSize, setFooterFontSize] = useState("14px");
  const [footerFontStyle, setFooterFontStyle] = useState("normal");
  const [footerColor, setFooterColor] = useState("#000000");

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

  const renderPopupContent = () => {
    // Add content rendering logic here...
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '95vh',
      padding: '10px',
      backgroundColor: '#dfe2e2',
    }}>
      <div className="template" style={{
        
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        width: '600px',
        maxWidth: '90%',
      }}>
        <Draggable>
          <div className="draggable-element" style={{
            padding: '10px',
            border: '2px blanchedalmond',
            borderRadius: '8px',
            transition: 'border-color 0.3s ease',
            width: 'fit-content',
          }}>
            {logo ? (
              <img
                src={logo}
                alt="Company Logo"
                style={{
                  cursor: 'pointer',
                  width: '150px', // Adjust width dynamically if needed
                  height: '150px', // Adjust height dynamically if needed
                }}
                onClick={() => openPopup('logo')}
              />
            ) : (
              <div style={{ cursor: 'pointer' }}>
                <label htmlFor="logoUpload" style={{ cursor: 'pointer' }}>
                  <FaPlusCircle className="plus-icon" />
                  <p>Add Logo</p>
                </label>
                <input
                  type="file"
                  id="logoUpload"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleLogoChange}
                />
              </div>
            )}
          </div>
        </Draggable>

        <Draggable>
          <div className="draggable-element" style={{
            cursor: 'pointer',
          }}>
            <h1
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => setCompanyName(e.target.innerText)}
              onClick={() => openPopup('companyName')}
              style={{
                fontSize: companyNameFontSize,
                fontStyle: companyNameFontStyle,
                color: companyNameColor,
              }}
            >
              {companyName}
            </h1>
          </div>
        </Draggable>

        <Draggable>
          <div className="draggable-element" style={{
            cursor: 'pointer',
          }}>
            <p
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => setTagline(e.target.innerText)}
              onClick={() => openPopup('tagline')}
              style={{
                fontSize: taglineFontSize,
                fontStyle: taglineFontStyle,
                color: taglineColor,
              }}
            >
              {tagline}
            </p>
          </div>
        </Draggable>

        <Draggable>
          <div className="draggable-element" style={{
            cursor: 'pointer',
          }}>
            {teamPhoto ? (
              <img
                src={teamPhoto}
                alt="Team"
                style={{
                  cursor: 'pointer',
                  width: '500px', // Adjust width dynamically if needed
                  height: '300px', // Adjust height dynamically if needed
                }}
                onClick={() => openPopup('teamPhoto')}
              />
            ) : (
              <div style={{ cursor: 'pointer' }}>
                <label htmlFor="teamPhotoUpload" style={{ cursor: 'pointer' }}>
                  <FaPlusCircle className="plus-icon" />
                  <p>Add Team Photo</p>
                </label>
                <input
                  type="file"
                  id="teamPhotoUpload"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleTeamPhotoChange}
                />
              </div>
            )}
          </div>
        </Draggable>

        <Draggable>
          <div className="draggable-element" style={{
            cursor: 'pointer',
          }}>
            <footer
              contentEditable="true"
              suppressContentEditableWarning={true}
              onBlur={(e) => setFooterText(e.target.innerText)}
              onClick={() => openPopup('footer')}
              style={{
                fontSize: footerFontSize,
                fontStyle: footerFontStyle,
                color: footerColor,
              }}
            >
              {footerText}
            </footer>
          </div>
        </Draggable>
      </div>

      <button onClick={handleDownload} style={{
        marginLeft: '10px',
        marginBottom: '3px',
        padding: '10px 20px',
        backgroundColor: '#9500ff',
        border: 'none',
        color: 'white',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        <FaDownload /> Download Template
      </button>

      {isPopupOpen && (
        <div className="popup" style={{
          background: '#cfc1c1',
          padding: '20px',
          borderRadius: '20px',
          position: 'absolute',
        }}>
          <button onClick={closePopup} style={{
            position: 'absolute',
            top: '10px',
            right: '40px',
            cursor: 'pointer',
          }}>
            <FaTimes />
          </button>
          {renderPopupContent()}
        </div>
      )}
    </div>
  );
};

export default Template4;

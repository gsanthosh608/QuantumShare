import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { FaPlusCircle, FaDownload, FaTimes, FaPhoneAlt, FaEnvelope, FaUserPlus } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import bg3 from '../Assets/T4b.jpg'

const Template3 = () => {
  const [companyName, setCompanyName] = useState("Quantum Paradigm");
  const [tagline, setTagline] = useState("Delivering cutting-edge solutions for a smarter, more connected world.");
  const [footerText, setFooterText] = useState("");
  const [logo, setLogo] = useState("logos.png");
  const [teamPhoto, setTeamPhoto] = useState("p.jpg");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentEditingElement, setCurrentEditingElement] = useState(null);

  // Font and color states
  const [companyNameStyles, setCompanyNameStyles] = useState({
    fontSize: "71px",
    fontStyle: "italic",
    color: "#000000"
  });

  const [taglineStyles, setTaglineStyles] = useState({
    fontSize: "31px",
    fontStyle: "normal",
    color: "#B80000"
  });

  const [footerStyles, setFooterStyles] = useState({
    fontSize: "25px",
    fontStyle: "normal",
    color: "#000000"
  });

  const [phoneNumber, setPhoneNumber] = useState("+123456789");
  const [email, setEmail] = useState("contact@quantumparadigm.com");
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [logoDimensions, setLogoDimensions] = useState({ width: 235, height: 98 });
  const [teamPhotoDimensions, setTeamPhotoDimensions] = useState({ width: 294, height: 300 });

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
                value={parseInt(companyNameStyles.fontSize)}
                onChange={(e) => setCompanyNameStyles(prev => ({ ...prev, fontSize: `${e.target.value}px` }))}
              />
            </div>
            <div>
              <label>Font Style:</label>
              <select value={companyNameStyles.fontStyle} onChange={(e) => setCompanyNameStyles(prev => ({ ...prev, fontStyle: e.target.value }))}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div>
              <label>Color:</label>
              <input
                type="color"
                value={companyNameStyles.color}
                onChange={(e) => setCompanyNameStyles(prev => ({ ...prev, color: e.target.value }))}
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
                value={parseInt(taglineStyles.fontSize)}
                onChange={(e) => setTaglineStyles(prev => ({ ...prev, fontSize: `${e.target.value}px` }))}
              />
            </div>
            <div>
              <label>Font Style:</label>
              <select value={taglineStyles.fontStyle} onChange={(e) => setTaglineStyles(prev => ({ ...prev, fontStyle: e.target.value }))}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div>
              <label>Color:</label>
              <input
                type="color"
                value={taglineStyles.color}
                onChange={(e) => setTaglineStyles(prev => ({ ...prev, color: e.target.value }))}
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
                value={parseInt(footerStyles.fontSize)}
                onChange={(e) => setFooterStyles(prev => ({ ...prev, fontSize: `${e.target.value}px` }))}
              />
            </div>
            <div>
              <label>Font Style:</label>
              <select value={footerStyles.fontStyle} onChange={(e) => setFooterStyles(prev => ({ ...prev, fontStyle: e.target.value }))}>
                <option value="normal">Normal</option>
                <option value="italic">Italic</option>
                <option value="oblique">Oblique</option>
              </select>
            </div>
            <div>
              <label>Color:</label>
              <input
                type="color"
                value={footerStyles.color}
                onChange={(e) => setFooterStyles(prev => ({ ...prev, color: e.target.value }))}
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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '95vh',
      padding: '10px',
      backgroundColor: '#e6ecec',
    }}>
      <div style={{
        backgroundImage: `url(${bg3})`,
        width: '600px',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <Draggable>
          <div>
            {logo ? (
              <img
                src={logo}
                alt="Company Logo"
                style={{
                  cursor: 'pointer',
                  width: `${logoDimensions.width}px`,
                  height: `${logoDimensions.height}px`
                }}
                onClick={() => openPopup('logo')}
              />
            ) : (
              <div>
                <label htmlFor="logoUpload" style={{ cursor: 'pointer' }}>
                  <FaPlusCircle />
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
          <div>
            <h1
              contentEditable="true"
              suppressContentEditableWarning={true}
              style={{
                cursor: 'pointer',
                fontSize: companyNameStyles.fontSize,
                fontStyle: companyNameStyles.fontStyle,
                color: companyNameStyles.color
              }}
              onClick={() => openPopup('companyName')}
            >
              {companyName}
            </h1>
          </div>
        </Draggable>

        <Draggable>
          <div>
            <p
              contentEditable="true"
              suppressContentEditableWarning={true}
              style={{
                cursor: 'pointer',
                fontSize: taglineStyles.fontSize,
                fontStyle: taglineStyles.fontStyle,
                color: taglineStyles.color
              }}
              onClick={() => openPopup('tagline')}
            >
              {tagline}
            </p>
          </div>
        </Draggable>

        <Draggable>
          <div>
            {teamPhoto ? (
              <img
                src={teamPhoto}
                alt="Team"
                style={{
                  cursor: 'pointer',
                  width: `${teamPhotoDimensions.width}px`,
                  height: `${teamPhotoDimensions.height}px`
                }}
                onClick={() => openPopup('teamPhoto')}
              />
            ) : (
              <div>
                <label htmlFor="teamPhotoUpload" style={{ cursor: 'pointer' }}>
                  <FaPlusCircle />
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
          <div style={{
            fontSize: footerStyles.fontSize,
            fontStyle: footerStyles.fontStyle,
            color: footerStyles.color,
          }}>
            <p>
              {footerText}
              {isEditingPhone ? (
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  onBlur={() => setIsEditingPhone(false)}
                />
              ) : (
                <span onClick={() => setIsEditingPhone(true)}>
                  <FaPhoneAlt /> {phoneNumber}
                </span>
              )}
              <br />
              {isEditingEmail ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setIsEditingEmail(false)}
                />
              ) : (
                <span onClick={() => setIsEditingEmail(true)}>
                  <FaEnvelope /> {email}
                </span>
              )}
            </p>
            <button style={{
              background: '#007bff',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              <FaUserPlus /> Join Us
            </button>
          </div>
        </Draggable>
      </div>

      <button style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer'
      }} onClick={handleDownload}>
        <FaDownload /> Download Template
      </button>

      {isPopupOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '0 5px 15px rgba(0,0,0,.5)',
          zIndex: 1000,
        }}>
          <button onClick={closePopup}><FaTimes /></button>
          {renderPopupContent()}
        </div>
      )}
    </div>
  );
};

export default Template3;

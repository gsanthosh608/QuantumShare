import React, { useState } from 'react';
import Button from '@mui/material/Button';

function EditContainer({
  imageUrl,
  updateImageUrl,
  updateTitle,
  updateTitleColor,
  updateContent,
  updateContentColor,
  updateFooter,
  updateFooterColor,
  logoUrl,
  updateLogoUrl,
  updateLogo,
  updateLogoColor,
  updateLogoSize,
  updateBgColor,
  updateBackgroundImage,
  
}) {
  const [titleInput, setTitleInput] = useState('');
  const [titleColor, setTitleColor] = useState('#ffffff');
  const [contentInput, setContentInput] = useState('');
  const [contentColor, setContentColor] = useState('#ffffff');
  const [footerInput, setFooterInput] = useState('');
  const [footerColor, setFooterColor] = useState('#ffffff');
  const [logoTitleInput, setLogoTitleInput] = useState('');
  const [logoColor, setLogoColor] = useState('#ffffff');
  const [logoSize, setLogoSize] = useState(20);
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitleInput(newTitle);
    updateTitle(newTitle);
  };

  const handleTitleColorChange = (event) => {
    const newTitleColor = event.target.value;
    setTitleColor(newTitleColor);
    updateTitleColor(newTitleColor);
  };

  const handleContentChange = (event) => {
    const newContent = event.target.value;
    setContentInput(newContent);
    updateContent(newContent);
  };

  const handleContentColorChange = (event) => {
    const newContentColor = event.target.value;
    setContentColor(newContentColor);
    updateContentColor(newContentColor);
  };

  const handleFooterChange = (event) => {
    const newFooter = event.target.value;
    setFooterInput(newFooter);
    updateFooter(newFooter);
  };

  const handleFooterColorChange = (event) => {
    const newFooterColor = event.target.value;
    setFooterColor(newFooterColor);
    updateFooterColor(newFooterColor);
  };

  const handleLogoUrlChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateLogoUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoTitleChange = (event) => {
    const newTitle = event.target.value;
    setLogoTitleInput(newTitle);
    updateLogo(newTitle);
  };

  const handleLogoColorChange = (event) => {
    const newTitleColor = event.target.value;
    setLogoColor(newTitleColor);
    updateLogoColor(newTitleColor);
  };

  const handleLogoSizeChange = (event) => {
    const newSize = event.target.value;
    setLogoSize(newSize);
    updateLogoSize(newSize);
  };


  const handleBgColorChange = (event) => {
    const newBgColor = event.target.value;
    setBgColor(newBgColor);
    updateBgColor(newBgColor);
  };

  function saveChangies(e) {
    e.preventDefault();

  }

  return (
    <div style={{ height: '100%', width: '100%' }}>
      
      <label>
        Upload BackgroundImage:
        <input
          type="file"
          onChange={handleBackgroundImageChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      
      <label>
        Upload Logo:
        <input
          type="file"
          onChange={handleLogoUrlChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Logo Title:
        <input
          type="text"
          value={logoTitleInput}
          onChange={handleLogoTitleChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Logo Text Color:
        <input
          type="color"
          value={logoColor}
          onChange={handleLogoColorChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Logo Size:
        <input
          type="range"
          min="20"
          max="100"
          value={logoSize}
          onChange={handleLogoSizeChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>


      <label>
        Title:
        <input
          type="text"
          value={titleInput}
          onChange={handleTitleChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Title Text Color:
        <input
          type="color"
          value={titleColor}
          onChange={handleTitleColorChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>

      <label>
        Content:
        <input
          type="text"
          value={contentInput}
          onChange={handleContentChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Content Text Color:
        <input
          type="color"
          value={contentColor}
          onChange={handleContentColorChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Footer:
        <input
          type="text"
          value={footerInput}
          onChange={handleFooterChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>
      <label>
        Footer Color:
        <input
          type="color"
          value={footerColor}
          onChange={handleFooterColorChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>

      <label>
        Background Color:
        <input
          type="color"
          value={bgColor}
          onChange={handleBgColorChange}
          style={{ width: '100%', marginBottom: '16px' }}
        />
      </label>

      <Button type="submit" onClick={saveChangies} variant="outlined" color="error">
        Updated
      </Button>
    </div>
  );
}

export default EditContainer;

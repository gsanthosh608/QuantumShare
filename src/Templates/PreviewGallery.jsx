import React from 'react';

const PreviewGallery = ({ templateData }) => {
  if (!templateData) {
    return <div>No template selected for preview</div>;
  }

  return (
    <div className="gallery-preview">
      <h1>{templateData.companyName}</h1>
      <p>{templateData.tagline}</p>
      {templateData.logo && <img src={templateData.logo} alt="Company Logo" />}
      {templateData.teamPhoto && <img src={templateData.teamPhoto} alt="Team Photo" />}
      <p>{templateData.phoneNumber}</p>
      <p>{templateData.email}</p>
    </div>
  );
};

export default PreviewGallery;

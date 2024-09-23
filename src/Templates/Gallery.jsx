import React, { useState, useRef } from 'react';
import template1 from '../Assets/Screenshot 2024-09-17 165040.png';
import template2 from '../Assets/AddBotImage-4.webp';
import template3 from '../Assets/AddBotImage-4.webp';
import template4 from '../Assets/AddBotImage-4.webp';
import '../CssFolder/gallery.css';
import Nav from '../Navbar/Nav';
import Sidenav from '../Navbar/Sidenav';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Button } from '@mui/material';

// Import template components
import Template from './Template';
import Template2 from './Template2';
import Template3 from './Template3';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Gallery() {
  const [open, setOpen] = useState(false); // Manage the main dialog
  // const [previewOpen, setPreviewOpen] = useState(false); 
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [templateData, setTemplateData] = useState({}); // State to track changes to template data

  const templateRef = useRef(null);

  const handleClickOpen = (templateId) => {
    setSelectedTemplate(templateId); // Set the selected template
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
    setSelectedTemplate(null); // Reset the selected template
  };

  // const handlePreviewOpen = () => {
  //   setPreviewOpen(true); // Open the preview popup
  // };

  // const handlePreviewClose = () => {
  //   setPreviewOpen(false); // Close the preview popup
  // };

  const handleTemplateChange = (updatedData) => {
    setTemplateData(updatedData); // Update the template data
  };

  const renderTemplate = (editable = true) => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template data={templateData} setData={handleTemplateChange} editable={editable} ref={templateRef} />;
      case 'template2':
        return <Template2 data={templateData} setData={handleTemplateChange} editable={editable} ref={templateRef} />;
      case 'template3':
        return <Template3 data={templateData} setData={handleTemplateChange} editable={editable} ref={templateRef} />;
      case 'template4':
        // Add logic for template4 if needed
        return null;
      default:
        return null;
    }
  };


  return (
    <div>
      <Nav />
      <div style={{ display: 'flex' }}>
        <Sidenav />
        <div className="all-template">
          <img
            src={template1}
            alt="Gallery Image 1"
            onClick={() => handleClickOpen('template1')}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={template2}
            alt="Gallery Image 2"
            onClick={() => handleClickOpen('template2')}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={template3}
            alt="Gallery Image 3"
            onClick={() => handleClickOpen('template3')}
            style={{ cursor: 'pointer' }}
          />
          <img
            src={template4}
            alt="Gallery Image 4"
            onClick={() => handleClickOpen('template4')}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          style: {
            width: '90%',
            maxHeight: '90vh',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          },
        }}
      >
        {/* Close Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
          <button
            onClick={handleClose}
            style={{
              padding: '10px 20px',
              backgroundColor: '#E94560',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>

        
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          <div ref={templateRef}>
            {renderTemplate(true)} {/* Pass editable=true to allow editing */}
          </div>
        </div>
      </Dialog>
    </div>
  );
}

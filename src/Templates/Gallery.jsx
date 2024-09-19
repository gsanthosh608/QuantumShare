import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import template1 from '../Assets/Screenshot 2024-09-17 165040.png';
import template2 from '../Assets/AddBotImage-4.webp';
import template3 from '../Assets/AddBotImage-4.webp';
import template4 from '../Assets/AddBotImage-4.webp';
import '../CssFolder/gallery.css';
import Nav from '../Navbar/Nav';
import Sidenav from '../Navbar/Sidenav';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

// Import template components
import Template from './Template';
import Template2 from './Template2';
import { Button } from '@mui/material';
import Template3 from './Template3';
// Add more template imports if necessary

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // Reference to capture the template for conversion to image
  const templateRef = useRef(null);

  const handleClickOpen = (templateId) => {
    setSelectedTemplate(templateId); // Set the selected template
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
    setSelectedTemplate(null); // Reset the selected template
  };

  // Capture the template as an image and download it
  const captureTemplateAsImage = () => {
    if (templateRef.current) {
      html2canvas(templateRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg'); // Set the format to JPG
        link.download = `${selectedTemplate}-template-image.jpg`; // Name the file based on selected template
        link.click(); // Trigger the download
      });
    }
  };

  // Render the selected template component
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template ref={templateRef} />;
      case 'template2':
        return <Template2 ref={templateRef} />;
      case 'template3':
       
        return <Template3 ref={templateRef} />;
      case 'template4':
        // return <Template4 ref={templateRef} />;
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
            onClick={() => handleClickOpen('template1')} // Pass the identifier
            style={{ cursor: 'pointer' }}
          />
          <img
            src={template2}
            alt="Gallery Image 2"
            onClick={() => handleClickOpen('template2')} // Pass the identifier
            style={{ cursor: 'pointer' }}
          />
          <img
            src={template3}
            alt="Gallery Image 3"
            onClick={() => handleClickOpen('template3')} // Pass the identifier
            style={{ cursor: 'pointer' }}
          />
          <img
            src={template4}
            alt="Gallery Image 4"
            onClick={() => handleClickOpen('template4')} // Pass the identifier
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
            flexDirection: 'column', // Ensure vertical layout
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

        {/* Render the selected template component */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          <div ref={templateRef}>
            {renderTemplate()}
          </div>
        </div>

        {/* Button to download the template as JPG */}
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '10px', // Align to the bottom-right
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff', // Optional background for visibility
          padding: '5px',
          height: '40px',
          
        }}>
          <Button
            onClick={captureTemplateAsImage}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50 ',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Download as JPG
          </Button>
          <Button
            
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50 ',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '15px', 
            }}
          >
            Publish
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

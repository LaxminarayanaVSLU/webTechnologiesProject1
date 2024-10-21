import React, { useState } from 'react';
import '../styles/css/ImageWithTooltip.css'; // Import the CSS file

const ImageWithTooltip = ( {ImagePath} ) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="image-container">
      <img
        src={ImagePath} // Replace with your image source
        alt="Example"
        className="image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && <div className="tooltip">This is a tooltip!</div>}
    </div>
  );
};

export default ImageWithTooltip;

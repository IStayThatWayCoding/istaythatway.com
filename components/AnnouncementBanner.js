import React, { useState } from 'react';

// Use Announcement Banner? //
var sAB = true

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(sAB); // Set to false by default

  const hideBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Hide the banner when isVisible is false
  }

  return (
    <div className="announcement-banner">
      <p>New video coming soon! // Happy Spooky Month! 🎃</p>
    </div>
  );
};

export default AnnouncementBanner;

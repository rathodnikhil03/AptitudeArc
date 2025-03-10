import React from 'react';

const SharePage = () => {
  // Function to handle the share action
  const handleShare = () => {
    const currentUrl = window.location.href; // Get the current page URL
    const lineShareUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(currentUrl)}`;
    // Open the LINE share dialog in a new window
    const shareWindow = window.open(lineShareUrl, '_blank', 'noopener,noreferrer,width=550,height=550');
    if (shareWindow) {
      // Focus the new window if it was successfully opened
      shareWindow.focus();
    } else {
      // Handle the case where the window couldn't be opened
      alert('Please allow pop-ups for this site.');
    }
  };

  return (
    <button onClick={handleShare}>
      Share on LINE
    </button>
  );
};

export default SharePage;

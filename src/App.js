// This is for the proof of concept first where I am trying to make a scrollable media feed of pictures and videos that the user can add on to or delete

import React, { useState, useRef } from 'react';

const MediaFeed = () => {
  const [mediaList, setMediaList] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const objectURL = URL.createObjectURL(file);
      setMediaList(prevMediaList => [...prevMediaList, { type: file.type, url: objectURL }]);
    }

    // Clear the file input
    fileInputRef.current.value = '';
  };

  const handleRemoveMedia = (index) => {
    setMediaList(prevMediaList => prevMediaList.filter((_, i) => i !== index));
  };

  return (
    <div className="media-feed">
      <div className="upload-section">
        <input type="file" multiple ref={fileInputRef} onChange={handleFileUpload} />
      </div>
      <div className="media-container">
        {mediaList.map((media, index) => (
          <div key={index} className="media-item">
            {media.type.startsWith('image') ? (
              <img src={media.url} alt={`Media ${index}`} />
            ) : (
              <video controls>
                <source src={media.url} type={media.type} />
                Your browser does not support the video tag.
              </video>
            )}
            <button onClick={() => handleRemoveMedia(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaFeed;

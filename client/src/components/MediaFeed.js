import React, { useState, useRef } from 'react';
import '../styles/MediaFeed.css';

function MediaFeed(props) {
  const [mediaList, setMediaList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const files = e.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const objectURL = URL.createObjectURL(file);
      setMediaList((prevMediaList) => [...prevMediaList, { type: file.type, url: objectURL }]);
    }

    // Clear the file input
    fileInputRef.current.value = '';
  };

  const handleRemoveMedia = () => {
    if (selectedMedia !== null) {
      setMediaList((prevMediaList) => prevMediaList.filter((_, index) => index !== selectedMedia));
      setSelectedMedia(null);
    }
  };

  const handleAddMedia = () => {
    // Trigger the file input programmatically
    fileInputRef.current.click();
  };

  const handleDeleteAllMedia = () => {
    setMediaList([]);
    setSelectedMedia(null);
  };

  const handleMediaClick = (index) => {
    setSelectedMedia(selectedMedia === index ? null : index);
  };

  return (
    <div className="media-feed">
      <div className="upload-section">
        <input
          type="file"
          multiple
          ref={fileInputRef}
          accept=".jpg, .jpeg, .png, .gif, .mp4"
          onChange={handleFileUpload}
        />
        <button className='add-btn' onClick={handleAddMedia}>
          Add
        </button>

        <button className='delete-btn' onClick={handleRemoveMedia}>
          Delete
        </button>
      </div>

      <div className="media-container">
        {mediaList.map((media, index) => (
          <div
            key={index}
            className={`media-item ${selectedMedia === index ? 'selected' : ''}`}
            onClick={() => handleMediaClick(index)}
          >
            {media.type.startsWith('image') ? (
              <img
                src={media.url}
                alt={`Media ${index}`}
                style={{ width: '420px', height: '210px' }}
              />
            ) : (
              <video
                controls
                style={{ maxWidth: '420px', maxHeight: '210px' }}
              >
                <source src={media.url} type={media.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaFeed;

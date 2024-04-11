import React, { useState, useRef, useEffect } from 'react';
import '../styles/MediaFeed.css';

function MediaFeed({accountPresent, viewedAccountFirstName, viewedAccountLastName, accountType, accountFirstName, accountLastName}) {
  const [mediaList, setMediaList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [sameFirst, setSameFirst] = useState(false);
  const [sameLast, setSameLast] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Update sameFirst and sameLast when viewed account names change
    setSameFirst(viewedAccountFirstName === accountFirstName);
    console.log('same first: ', sameFirst);
    setSameLast(viewedAccountLastName === accountLastName);
    console.log('same last: ', sameLast)
  });

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

  console.log(`Account present: ${accountPresent}
    viewed First: ${viewedAccountFirstName}
    viewed Last: ${viewedAccountLastName}
    current First: ${accountFirstName}
    current Last: ${accountLastName}
    current Type: ${accountType}`)

  return (
    <div className="media-feed">
      <div className="upload-section">
        {accountPresent && accountType === 'Trainer' && sameFirst && sameLast && (
          <>
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
          </>
        )}
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

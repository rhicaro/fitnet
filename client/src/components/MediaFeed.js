import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import '../stylesV2/MediaFeed.css';

/**
 * Represents a component for displaying and managing media content.
 * @param {boolean} accountPresent - Indicates whether the current account is present.
 * @param {string} viewedAccountFirstName - The first name of the viewed account.
 * @param {string} viewedAccountLastName - The last name of the viewed account.
 * @param {string} accountType - The type of the current account.
 * @param {string} accountFirstName - The first name of the current account.
 * @param {string} accountLastName - The last name of the current account.
 * @returns {JSX.Element} - The rendered MediaFeed component.
 */
function MediaFeed({ accountPresent, viewedAccountFirstName, viewedAccountLastName, accountType, accountFirstName, accountLastName }) {
  const [mediaList, setMediaList] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [sameFirst, setSameFirst] = useState(false);
  const [sameLast, setSameLast] = useState(false);
  const fileInputRef = useRef(null);
  /**
   * Allows the rendering of the add and delete buttons as well as fills the feed of any media object that is stored connected
   * to the accounts first and last name
   */
  useEffect(() => {
    setSameFirst(viewedAccountFirstName === accountFirstName);
    setSameLast(viewedAccountLastName === accountLastName);
    axios.get(`http://localhost:5001/api/usermedia/${viewedAccountFirstName}/${viewedAccountLastName}`)
      .then(response => {
        const mediaObjects = response.data.map(media => ({
          id: response.data[0].media_id,
          type: media.media_path.endsWith('.mp4') ? 'video/mp4' : 'image/jpeg',
          url: media.media_path
        }));
        setMediaList(mediaObjects);
      })
      .catch (error => {
        console.log('Error fetching media: ', error);
      });
  }, [viewedAccountFirstName, viewedAccountLastName]);

  /**
   * Generates a unique media ID.
   * @returns {number} - The generated media ID.
   */
  const generateMediaId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  /**
   * Handles file upload.
   * @param {Event} e - The file input change event.
   */
  const handleFileUpload = (e) => {
    if (sameFirst && sameLast) {
      const files = e.target.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const objectURL = URL.createObjectURL(file);
        setMediaList((prevMediaList) => [...prevMediaList, { type: file.type, url: objectURL }]);

        const mediaData = {
          media_id: generateMediaId(),
          user_first: accountFirstName,
          user_last: accountLastName,
          media_path: `/images/media/${file.name}`
        };

        axios.post(`http://localhost:5001/api/usermedia/${accountFirstName}/${accountLastName}`, mediaData)
          .then(response => {
            console.log('Media uploaded successfully');
          })
          .catch(error => {
            console.error('Error uploading media:', error);
          });
      }

      fileInputRef.current.value = '';
    }
  };

  /**
   * Handles removal of media.
   */
  const handleRemoveMedia = () => {
    if (sameFirst && sameLast && selectedMedia !== null) {
      const selectedMediaId = mediaList[selectedMedia].id; // Retrieve the ID of the selected media
      axios.delete(`http://localhost:5001/api/usermedia/${selectedMediaId}`)
        .then(response => {
          console.log('Media deleted successfully');
          // After deleting the media, remove it from the mediaList
          const updatedMediaList = [...mediaList];
          updatedMediaList.splice(selectedMedia, 1);
          setMediaList(updatedMediaList);
          setSelectedMedia(null); // Reset selectedMedia state
        })
        .catch(error => {
          console.error('Error deleting media:', error);
        });
    }
  };

   /**
   * Handles addition of media.
   */
  const handleAddMedia = () => {
    if (sameFirst && sameLast) {
      fileInputRef.current.click();
    }
  };

  /**
   * Handles click on media item.
   * @param {number} index - The index of the clicked media item.
   */
  const handleMediaClick = (index) => {
    setSelectedMedia(selectedMedia === index ? null : index);
  };

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
            <button className='media-btn' onClick={handleAddMedia}>
              Add
            </button>

            <button className='media-btn' onClick={handleRemoveMedia}>
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
                className='media-object'
                src={media.url}
                alt={`Media ${index}`}
                style={{ width: '400px', height: '250px' }}
              />
            ) : (
              <video
                className='media-object'
                controls
                style={{ maxWidth: '400px', maxHeight: '250px' }}
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

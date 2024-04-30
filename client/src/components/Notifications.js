// I did not have the time to do this
import React from 'react';
import '../stylesV2/Notifications.css';

function NotificationPopup({ show }) {
  return (
    show && (
      <div className="notif-popup">
        {/* Your notification content goes here */}
        <ul>
          <li>Notification 1</li>
          <li>Notification 2</li>
          <li>Notification 3</li>
          {/* Add more notifications as needed */}
        </ul>
      </div>
    )
  );
}

export default NotificationPopup;

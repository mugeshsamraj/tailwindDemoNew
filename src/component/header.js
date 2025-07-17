import React from 'react';

function Header() {
  return (
    <div className="flex justify-between items-center p-5 border-b border-b-gray-300 shadow-md z-50 bg-white sticky top-0">
      {/* Left: Logo + Title */}
      <div className="flex items-center">
        <img
          src="/assets/line.png"
          width="66"
          height="57"
          alt="logo"
          className="mr-5"
        />
        <p className="text-lg font-medium">Admin Users</p>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <img src="/assets/setting.png" alt="settings" width="66" height="57" />
        <img src="/assets/notification.png" alt="notifications" width="66" height="57" />
        <img src="/assets/avatar.png" alt="avatar" width="66" height="57" />
      </div>
    </div>
  );
}

export default Header;

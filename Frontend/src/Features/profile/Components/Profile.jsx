import React, { useState } from "react";
// import PropTypes from "prop-types";
import "../style/instagram.scss";

const AvatarSVG = ({ size = 48 }) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    aria-label="Avatar"
  >
    <circle cx="50" cy="38" r="18" fill="#ff9a4a" />
    <circle cx="50" cy="36" r="6" fill="#ffe0a0" />
    <ellipse cx="50" cy="80" rx="28" ry="20" fill="#ff9a4a" />
    <path d="M35 30 Q50 10 65 30" fill="#ff6600" stroke="#ff4400" strokeWidth="1" />
    <circle cx="50" cy="15" r="4" fill="#ffcc00" />
  </svg>
);

const PostSVG = () => (
  <svg
    viewBox="0 0 80 80"
    width="70"
    height="70"
    aria-label="Post Placeholder"
  >
    <circle cx="40" cy="28" r="14" fill="#ff9a4a" />
    <circle cx="40" cy="26" r="5" fill="#ffe0a0" />
    <ellipse cx="40" cy="62" rx="22" ry="15" fill="#ff9a4a" opacity="0.8" />
    <path d="M28 22 Q40 6 52 22" fill="#ff6600" />
    <circle cx="40" cy="10" r="3.5" fill="#ffcc00" />
  </svg>
);

const tabs = [
  <svg viewBox="0 0 24 24" aria-label="Grid View">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-label="List View">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>,
  <svg viewBox="0 0 24 24" aria-label="Search View">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="M21 15l-5-5L5 21" />
  </svg>,
];

const Profile = ({username, profilePicture, bio, isPrivate, posts , reels , tagged, stats , isOwnProfile}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="ig-wrap">
      {/* Header */}
      <div className="ig-header">
        <div className="ig-header-user">
          <svg className="ig-icon" viewBox="0 0 24 24" aria-label="Back">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>{username}</span>
          <svg className="ig-verified" viewBox="0 0 24 24" aria-label="Verified">
            <circle cx="12" cy="12" r="10" fill="none" stroke="#fff" strokeWidth="1.8" />
            <path
              d="M9 12l2 2 4-4"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="ig-header-icons">
          <svg className="ig-icon" viewBox="0 0 24 24" aria-label="Menu">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
          <svg className="ig-icon" viewBox="0 0 24 24" aria-label="Options">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </div>

      {/* Profile Section */}
      <div className="ig-profile-section">
        <div className="ig-top-row">
          {/* Avatar */}
          <div className="ig-avatar-wrap">
            <div className="ig-avatar-ring">
              <div className="ig-avatar-inner">
                {profilePicture ? (
                  <img
                    src={profilePicture}
                    alt={`${username}'s profile`}
                    className="ig-avatar-img"
                  />
                ) : (
                  <AvatarSVG size={80} />
                )}
              </div>
            </div>
          </div>

          {/* Right side: stats + name/bio/buttons on md+ */}
          <div className="ig-profile-right">
            <div className="ig-stats">
              <div className="ig-stat">
                <div className="ig-stat-num">{stats?.postsCount || 0}</div>
                <div className="ig-stat-lbl">posts</div>
              </div>
              <div className="ig-stat">
                <div className="ig-stat-num">{stats?.followersCount || 0}</div>
                <div className="ig-stat-lbl">followers</div>
              </div>
              <div className="ig-stat">
                <div className="ig-stat-num">{stats?.followingCount || 0}</div>
                <div className="ig-stat-lbl">following</div>
              </div>
            </div>

            {/* Name + bio + buttons shown inline on md+ */}
            <div className="ig-name-block ig-name-mobile">
              <div className="ig-display-name">{username}</div>
              <div className="ig-bio">{bio}</div>
            </div>

            <div className="ig-btn-row">
              {isOwnProfile ? (
                <>
                  <button className="ig-btn">Edit profile</button>
                  <button className="ig-btn">View archive</button>
                </>
              ) : (
                <>
                  <button className="ig-btn follow-btn">Follow</button>
                  <button className="ig-btn">Message</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stories Row */}
      <div className="ig-stories-row">
        <div className="ig-story">
          <div className="ig-story-ring">
            <span className="ig-new-story">+</span>
          </div>
          <span className="ig-story-lbl">New</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="ig-tabs">
        {tabs.map((icon, i) => (
          <div
            key={i}
            className={`ig-tab ${activeTab === i ? "active" : ""}`}
            onClick={() => setActiveTab(i)}
          >
            {icon}
          </div>
        ))}
      </div>

      {/* Dynamic Content Grid */}
      <div className="ig-grid">
        {isPrivate ? (
          <div className="ig-private-overlay">
            <span>🔒 Private Account</span>
          </div>
        ) : (
          (() => {
            // 1. Decide karo kaunsa data dikhana hai
            let currentData = [];
            if (activeTab === 0) currentData = posts;
            if (activeTab === 1) currentData = reels;
            if (activeTab === 2) currentData = tagged;

            // 2. Agar data khali hai toh Placeholder dikhao
            if (!currentData || currentData.length === 0) {
              return (
                <div className="no-content-placeholder">
                  <PostSVG />
                  <p>No {activeTab === 1 ? 'Reels' : 'Posts'} yet</p>
                </div>
              );
            }

            // 3. Data ko map karo
            return currentData.map((item, index) => (
              <div key={index} className="ig-post">
                {/* 4. Media Type Check: Reel tab mein video, baki mein image */}
                {activeTab === 1 || item.contentType === 'reel' ? (
                  <video 
                    src={item.imgUrl} 
                    className="ig-post-img" 
                    muted 
                    loop 
                    onMouseOver={(e) => e.target.play()} 
                    onMouseOut={(e) => e.target.pause()} 
                  />
                ) : (
                  <img src={item.imgUrl} alt={item.caption} className="ig-post-img" />
                )}

                <div className="ig-post-overlay">
                  <span>♥ {item.likes || 0}</span>
                  <span>💬 {item.comments || 0}</span>
                </div>
              </div>
            ));
          })()
        )}
      </div>
    </div>
  );
};

// InstagramProfile.propTypes = {
//   username: PropTypes.string.isRequired,
//   profilePicture: PropTypes.string,
//   bio: PropTypes.string,
//   isPrivate: PropTypes.bool,
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       imgUrl: PropTypes.string.isRequired,
//       caption: PropTypes.string,
//       likes: PropTypes.number,
//       comments: PropTypes.number,
//     })
//   ),
//   stats: PropTypes.shape({
//     posts: PropTypes.number.isRequired,
//     followers: PropTypes.number.isRequired,
//     following: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Profile;

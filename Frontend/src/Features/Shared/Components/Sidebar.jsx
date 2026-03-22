import React, { useState } from "react";
import "../style/sidebar.scss";
import "../Style/style.scss";

// ── Icons ──────────────────────────────────────────
// All icons follow the same pattern: accept `filled` prop,
// toggle fill/stroke inline — no conditional JSX branching.

const HomeIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9L12 2L21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9Z"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? "#fff" : "none"}
    />
    <path
      d="M9 22V12H15V22"
      stroke={filled ? "#000" : "#fff"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReelsIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect
      x="2" y="2" width="20" height="20" rx="4"
      stroke="#fff"
      strokeWidth="1.8"
      fill={filled ? "#fff" : "none"}
    />
    <polygon
      points="10,8 10,16 16,12"
      fill={filled ? "#000" : "#fff"}
    />
  </svg>
);

const ExploreIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle
      cx="12" cy="12" r="9.5"
      stroke="#fff"
      strokeWidth="1.8"
      fill={filled ? "#fff" : "none"}
    />
    <polygon
      points="16,8 10.5,10.5 8,16 13.5,13.5"
      stroke={filled ? "#000" : "#fff"}
      fill={filled ? "#000" : "none"}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const CreateIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect
      x="3" y="3" width="18" height="18" rx="4"
      stroke="#fff"
      strokeWidth="1.8"
      fill={filled ? "#fff" : "none"}
    />
    <line
      x1="12" y1="8" x2="12" y2="16"
      stroke={filled ? "#000" : "#fff"}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="8" y1="12" x2="16" y2="12"
      stroke={filled ? "#000" : "#fff"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const AvatarIcon = ({ filled }) => (
  <span className={`ig-sidebar__avatar ${filled ? "ig-sidebar__avatar--active" : ""}`}>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="38" r="18" fill="#ff9a4a"/>
      <circle cx="50" cy="36" r="6" fill="#ffe0a0"/>
      <ellipse cx="50" cy="80" rx="28" ry="20" fill="#ff9a4a"/>
      <path d="M35 30 Q50 10 65 30" fill="#ff6600"/>
      <circle cx="50" cy="15" r="4" fill="#ffcc00"/>
    </svg>
  </span>
);

const SettingsIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill="none">
    <circle
      cx="12" cy="12" r="3"
      stroke="#fff"
      strokeWidth="1.8"
      fill={filled ? "#fff" : "none"}
    />
    <path
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
      stroke="#fff"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <line x1="3" y1="6" x2="21" y2="6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="21" y2="18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DoodleIcon = () => (
  <div className="doodle-icon">
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1.5" y="1.5" width="33" height="33" rx="9" stroke="#fff" strokeWidth="2.5"/>
      <polygon points="8,26 8,17 12,21 18,12 24,21 28,17 28,26"
        fill="#fff" stroke="#ccc" strokeWidth="1" strokeLinejoin="round"/>
      <circle cx="8"  cy="17" r="1.8" fill="#fff" stroke="#ccc" strokeWidth="0.8"/>
      <circle cx="18" cy="12" r="1.8" fill="#fff" stroke="#ccc" strokeWidth="0.8"/>
      <circle cx="28" cy="17" r="1.8" fill="#fff" stroke="#ccc" strokeWidth="0.8"/>
    </svg>
  </div>
);

const DoodleWordmark = () => (
  <div className="doodle-wordmark">
    <svg viewBox="0 0 136 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      {/* Crown above D — white */}
      <polygon points="3,9 3,4 6.5,6.5 11,1 15.5,6.5 19,4 19,9"
        fill="#fff" stroke="#ccc" strokeWidth="0.6" strokeLinejoin="round"/>
      <circle cx="3"  cy="4"  r="1.3" fill="#fff" stroke="#ccc" strokeWidth="0.5"/>
      <circle cx="11" cy="1"  r="1.3" fill="#fff" stroke="#ccc" strokeWidth="0.5"/>
      <circle cx="19" cy="4"  r="1.3" fill="#fff" stroke="#ccc" strokeWidth="0.5"/>
      {/* White outline stroke (thin) */}
      <text x="1" y="30"
        fontFamily="'Fredoka One', 'Nunito', 'Varela Round', Arial Rounded MT Bold, sans-serif"
        fontSize="22" fontWeight="900"
        fill="none" stroke="#fff" strokeWidth="2.5"
        strokeLinejoin="round" paintOrder="stroke"
        letterSpacing="0.5">Doodlle</text>
      {/* Transparent fill */}
      <text x="1" y="30"
        fontFamily="'Fredoka One', 'Nunito', 'Varela Round', Arial Rounded MT Bold, sans-serif"
        fontSize="22" fontWeight="900"
        fill="transparent"
        letterSpacing="0.5">Doodlle</text>
    </svg>
  </div>
);

// ── Nav config ─────────────────────────────────────
const NAV_ITEMS = [
  { id: "home",    label: "Home",               Icon: HomeIcon },
  { id: "reels",   label: "Reels",              Icon: ReelsIcon },
  { id: "explore", label: "Explore",            Icon: ExploreIcon },
  { id: "create",  label: "Create",             Icon: CreateIcon },
  { id: "profile", label: "bramhacharya_goals", Icon: AvatarIcon },
];

// ── Sidebar ────────────────────────────────────────
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive]     = useState("home");

  return (
    <>
      {/* ── Sidebar (tablet / desktop) ── */}
      <aside className={`ig-sidebar ${expanded ? "ig-sidebar--expanded" : "ig-sidebar--collapsed"}`}>

        {/* Logo row */}
        <div className="ig-sidebar__logo-row">
          <div className="ig-sidebar__wordmark">
            <DoodleIcon />
            <DoodleWordmark />
          </div>
          <button
            className="ig-sidebar__menu-btn"
            onClick={() => setExpanded(prev => !prev)}
            aria-label="Toggle sidebar"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Nav items */}
        <nav className="ig-sidebar__nav">
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`ig-sidebar__item ${active === id ? "ig-sidebar__item--active" : ""}`}
              onClick={() => setActive(id)}
              aria-label={label}
            >
              <span className="ig-sidebar__icon">
                <Icon filled={active === id} />
              </span>
              <span className="ig-sidebar__label">{label}</span>
              <span className="ig-sidebar__dot" />
            </button>
          ))}
        </nav>

        {/* Bottom: Settings only */}
        <div className="ig-sidebar__bottom">
          <button
            className={`ig-sidebar__item ${active === "settings" ? "ig-sidebar__item--active" : ""}`}
            onClick={() => setActive("settings")}
            aria-label="Settings"
          >
            <span className="ig-sidebar__icon">
              <SettingsIcon filled={active === "settings"} />
            </span>
            <span className="ig-sidebar__label">Settings</span>
            <span className="ig-sidebar__dot" />
          </button>
        </div>

      </aside>

      {/* ── Bottom Bar (mobile only) ── */}
      <nav className="ig-bottom-bar">
        {NAV_ITEMS.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`ig-bottom-bar__item ${active === id ? "ig-bottom-bar__item--active" : ""}`}
            onClick={() => setActive(id)}
            aria-label={label}
          >
            <span className="ig-bottom-bar__icon">
              <Icon filled={active === id} />
            </span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;

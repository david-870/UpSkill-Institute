import { Link, NavLink } from "react-router-dom";
import { Reveal } from "../hooks";
import upskill_digitalskill_logo from "../assets/upskill_digitalskill_logo.jpeg";

export function Logo() {
  return (
    <Link to="/" className="logo">
      {/* <span className="mark">US</span> UpSkill Tech Institute */}
      <img src={upskill_digitalskill_logo} alt="UpSkill Tech Institute" />
    </Link>
  );
}

export function Header({ ticker }) {
  return (
    <>
      {ticker && <Ticker items={ticker} />}
      {ticker && <div className="ticker-spacer" aria-hidden="true" />}
      <div className={`site-top${ticker ? " with-ticker" : ""}`}>
        <header>
          <nav>
            <Logo />
            <div className="nav-links">
              <a href="/#journey">How it works</a>
              <a href="/#courses">Courses</a>
              <a href="/#rewards">Rewards</a>
              <a href="/#apply">Apply</a>
            </div>
            <NavLink to="/register" className="nav-cta">
              Join free orientation
            </NavLink>
          </nav>
        </header>
      </div>
    </>
  );
}

export function Ticker({ items }) {
  const line = items.map((t, i) => (
    <span key={i}>
      <span>{t}</span>
      <span className="sep">●</span>
    </span>
  ));
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <div className="grp">{line}</div>
        <div className="grp">{line}</div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <div className="footImg">
          <Logo />
        </div>

        <span className="mono">
          © 2026 UpSkill Tech Institute · Fully online · 4 courses · 1
          leaderboard
        </span>
      </div>
    </footer>
  );
}

export function SectionHead({ eyebrow, title, text }) {
  return (
    <Reveal className="sec-head">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{text}</p>
    </Reveal>
  );
}

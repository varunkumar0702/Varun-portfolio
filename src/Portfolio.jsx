import { useState, useEffect } from "react";
import PHOTO from "./photo.jpg";
import RESUME from "./resume.pdf";
import LOGO_QB from "./logo_quickbite.png";
import LOGO_AC from "./logo_campusflow.png";


const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root, [data-theme="light"] {
    --bg: #f9f8f5;
    --bg2: #f0efe9;
    --text: #111110;
    --text-muted: #6b6b67;
    --accent: #00aaff;
    --accent-bg: #e8f6ff;
    --border: #e2e0d8;
    --card: #ffffff;
    --shadow: rgba(0,0,0,0.06);
    --font-head: 'Bricolage Grotesque', sans-serif;
    --font-serif: 'Instrument Serif', serif;
    --font-body: 'DM Sans', sans-serif;
    --radius: 16px;
    --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
  [data-theme="dark"] {
    --bg: #0e0e10;
    --bg2: #18181c;
    --text: #f0f0f2;
    --text-muted: #8a8a96;
    --accent: #00aaff;
    --accent-bg: rgba(0,170,255,0.12);
    --border: rgba(255,255,255,0.08);
    --card: #16161a;
    --shadow: rgba(0,0,0,0.5);
  }
  [data-theme="dark"] .nav { background: rgba(14,14,16,0.92) !important; }
  [data-theme="dark"] .about-strip { background: var(--bg2); }
  [data-theme="dark"] .nav-cta { background: var(--text); color: var(--bg); }
  [data-theme="dark"] .hero-name { color: var(--text); }
  [data-theme="dark"] .project-body { background: var(--card); }
  [data-theme="dark"] .modal-body { background: var(--card); }
  [data-theme="dark"] .resume-header { background: var(--card); }
  [data-theme="dark"] body { background: var(--bg); color: var(--text); }
  [data-theme="dark"] .badge-text { color: var(--text); }
  [data-theme="dark"] .badge-sub { color: var(--text-muted); }
  [data-theme="dark"] .fb-desc { color: var(--text-muted); }
  [data-theme="dark"] .project-desc { color: var(--text-muted); }
  [data-theme="dark"] .hero-bio { color: var(--text-muted); }
  [data-theme="dark"] .project-footer { border-top-color: var(--border); }
  [data-theme="dark"] .project-audience { background: var(--bg2); color: var(--text-muted); border-color: var(--border); }
  [data-theme="dark"] .fb-badge { background: var(--bg2); color: var(--text-muted); border-color: var(--border); }
  [data-theme="dark"] .fb-badge.accent { background: var(--accent-bg); color: var(--accent); }
  [data-theme="dark"] .modal-step { background: var(--bg2); color: var(--text-muted); border-color: var(--border); }
  [data-theme="dark"] .modal-step.active { background: var(--accent-bg); color: var(--accent); }
  [data-theme="dark"] .resume-title { color: var(--text); }
  [data-theme="dark"] .footer-name { color: var(--text); }
  [data-theme="dark"] .footer-copy { color: var(--text-muted); }
  [data-theme="dark"] .section-eyebrow { color: var(--accent); }
  [data-theme="dark"] .hero-available { background: var(--bg2); border-color: var(--border); color: var(--text-muted); }
  [data-theme="dark"] .hero-role-text { color: var(--text-muted); }
  [data-theme="dark"] .nav-links a { color: var(--text-muted); }
  [data-theme="dark"] .nav-links a:hover { background: var(--bg2); color: var(--text); }
  [data-theme="dark"] .about-bio-text { color: var(--text-muted); }
  [data-theme="dark"] .about-stat-label { color: var(--text-muted); }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-body); -webkit-font-smoothing: antialiased; overflow-x: hidden; }

  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 48px; height: 68px;
    background: rgba(var(--nav-bg, 249,248,245),0.9); backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border); transition: background 0.3s, box-shadow 0.3s;
  }
  .nav.raised { box-shadow: 0 4px 32px var(--shadow); }
  .nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
  .nav-logo-mark { width: 36px; height: 36px; border-radius: 10px; background: var(--text); display: flex; align-items: center; justify-content: center; font-family: var(--font-head); font-weight: 800; font-size: 16px; color: var(--bg); }
  .nav-logo-name { font-family: var(--font-head); font-weight: 600; font-size: 15px; color: var(--text); }
  .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
  .nav-links a { font-size: 14px; font-weight: 400; color: var(--text-muted); text-decoration: none; padding: 7px 14px; border-radius: 8px; transition: all 0.2s; }
  .nav-links a:hover { background: var(--bg2); color: var(--text); }
  .nav-cta { font-family: var(--font-head); font-size: 13px; font-weight: 600; background: var(--text); color: var(--bg); padding: 9px 20px; border-radius: 10px; text-decoration: none; transition: all 0.2s; border: none; }
  .nav-cta:hover { opacity: 0.8; transform: translateY(-1px); }
  .nav-cta.outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
  .nav-cta.outline:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-bg); }
  .nav-right { display: flex; align-items: center; gap: 10px; }
  .dark-toggle { width: 40px; height: 40px; border-radius: 10px; background: var(--bg2); border: 1px solid var(--border); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: all 0.25s; color: var(--text); }
  .dark-toggle:hover { background: var(--border); transform: rotate(20deg); }

  /* RESUME MODAL */
  .resume-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 600; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(8px); animation: fadeIn 0.25s ease; }
  .resume-box { background: var(--card); border-radius: 20px; width: 100%; max-width: 800px; height: 88vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 32px 80px rgba(0,0,0,0.5); animation: scaleUp 0.35s var(--ease); }
  .resume-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px; border-bottom: 1px solid var(--border); flex-shrink: 0; background: var(--card); color: var(--text); }
  .resume-title { font-family: var(--font-head); font-size: 16px; font-weight: 700; }
  .resume-actions { display: flex; gap: 10px; align-items: center; }
  .resume-download { font-family: var(--font-head); font-size: 12px; font-weight: 600; background: var(--accent); color: #fff; border: none; border-radius: 8px; padding: 8px 16px; cursor: pointer; text-decoration: none; transition: opacity 0.2s; }
  .resume-download:hover { opacity: 0.85; }
  .resume-close { width: 34px; height: 34px; border-radius: 8px; background: var(--bg2); border: 1px solid var(--border); cursor: pointer; font-size: 16px; color: var(--text); transition: all 0.2s; display: flex; align-items: center; justify-content: center; }
  .resume-close:hover { background: var(--border); color: var(--text); }
  .resume-iframe { flex: 1; border: none; width: 100%; min-height: 0; }

  /* ENHANCED ANIMATIONS */
  @keyframes scaleUp { from { opacity:0; transform: scale(0.93) translateY(16px); } to { opacity:1; transform: scale(1) translateY(0); } }
  @keyframes slideDown { from { opacity:0; transform: translateY(-16px); } to { opacity:1; transform: translateY(0); } }

  .hero { min-height: 100vh; padding: 120px 48px 80px; display: grid; grid-template-columns: 1fr 400px; gap: 60px; align-items: center; max-width: 1200px; margin: 0 auto; }
  .hero-available { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; color: var(--text-muted); background: var(--bg2); border: 1px solid var(--border); border-radius: 100px; padding: 6px 14px; margin-bottom: 32px; opacity: 0; animation: fadeUp 0.7s var(--ease) 0.1s forwards; }
  .avail-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; flex-shrink: 0; }
  .hero-name { font-family: var(--font-head); font-size: clamp(44px, 6vw, 82px); font-weight: 800; line-height: 0.95; letter-spacing: -3px; opacity: 0; animation: fadeUp 0.8s var(--ease) 0.2s forwards; }
  /* hero-name-serif removed — unified font */
  .hero-role { display: flex; align-items: center; gap: 14px; margin-top: 28px; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s var(--ease) 0.3s forwards; }
  .hero-role-text { font-family: var(--font-head); font-size: clamp(15px,2vw,20px); font-weight: 500; color: var(--text-muted); }
  .hero-role-badge { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; background: var(--accent-bg); color: var(--accent); border: 1px solid rgba(0,170,255,0.25); padding: 5px 12px; border-radius: 100px; }
  .hero-bio { font-size: 16px; line-height: 1.8; color: var(--text-muted); font-weight: 300; max-width: 520px; margin-top: 24px; opacity: 0; animation: fadeUp 0.8s var(--ease) 0.4s forwards; }
  .hero-actions { display: flex; gap: 12px; margin-top: 40px; flex-wrap: wrap; opacity: 0; animation: fadeUp 0.8s var(--ease) 0.5s forwards; }
  .btn { font-family: var(--font-head); font-size: 14px; font-weight: 600; padding: 13px 28px; border-radius: 12px; border: none; cursor: pointer; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
  .btn-dark { background: var(--text); color: var(--bg); }
  .btn-dark:hover { opacity: 0.82; transform: translateY(-1px); }
  .btn-outline { background: transparent; color: var(--text); border: 1.5px solid var(--border); }
  [data-theme="dark"] .btn-outline { border-color: rgba(255,255,255,0.2); color: var(--text); }
  [data-theme="dark"] .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-bg); }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); background: var(--accent-bg); }

  .hero-right { opacity: 0; animation: fadeLeft 0.9s var(--ease) 0.35s forwards; }
  .hero-photo-wrap { width: 100%; aspect-ratio: 4/5; border-radius: 24px; overflow: hidden; border: 1px solid var(--border); position: relative; }
  .hero-photo-img { width: 100%; height: 100%; object-fit: cover; object-position: center top; }
  .hero-photo-badge { position: absolute; bottom: 20px; left: 16px; right: 16px; background: var(--card); backdrop-filter: blur(12px); border: 1px solid var(--border); border-radius: 14px; padding: 14px 16px; display: flex; align-items: center; gap: 12px; }
  .badge-text { font-family: var(--font-head); font-size: 13px; font-weight: 700; }
  .badge-sub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }

  .section { max-width: 1200px; margin: 0 auto; padding: 100px 48px; }
  .section-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
  .section-title { font-family: var(--font-head); font-size: clamp(28px,4vw,48px); font-weight: 800; letter-spacing: -1.5px; line-height: 1.05; color: var(--text); }

  .about-strip { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .about-strip-inner { max-width: 1200px; margin: 0 auto; padding: 48px; display: flex; align-items: center; gap: 48px; flex-wrap: wrap; }
  .about-stat { display: flex; flex-direction: column; gap: 4px; padding-right: 48px; border-right: 1px solid var(--border); }
  .about-stat:last-of-type { border-right: none; }
  .about-stat-num { font-family: var(--font-head); font-size: 32px; font-weight: 800; letter-spacing: -1px; color: var(--text); }
  .about-stat-label { font-size: 13px; color: var(--text-muted); }
  .about-bio-text { flex: 1; min-width: 260px; font-size: 15px; line-height: 1.75; color: var(--text-muted); font-weight: 300; }

  .projects-head { margin-bottom: 48px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; }
  .projects-list { display: flex; flex-direction: column; gap: 20px; }
  .project-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; overflow: hidden; display: grid; grid-template-columns: 300px 1fr; transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s; cursor: pointer; }
  .project-card:hover { box-shadow: 0 12px 48px var(--shadow); transform: translateY(-2px); border-color: var(--accent); }
  .project-thumb { display: flex; align-items: center; justify-content: center; font-size: 72px; border-right: 1px solid var(--border); min-height: 240px; overflow: hidden; padding: 32px; }
  .project-thumb img { max-width: 80%; max-height: 160px; width: auto; height: auto; object-fit: contain; }
  .project-thumb.has-logo { padding: 32px; }
  .project-body { padding: 36px; display: flex; flex-direction: column; justify-content: space-between; }
  .project-meta { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px; }
  .project-tag { font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; background: var(--bg2); color: var(--text-muted); border: 1px solid var(--border); }
  .project-duration { font-size: 11px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; padding: 4px 10px; border-radius: 6px; background: var(--accent-bg); color: var(--accent); border: 1px solid rgba(0,170,255,0.2); }
  .project-name { font-family: var(--font-head); font-size: 24px; font-weight: 800; letter-spacing: -0.6px; margin-bottom: 12px; line-height: 1.15; color: var(--text); }
  .project-desc { font-size: 15px; line-height: 1.7; color: var(--text-muted); font-weight: 300; }
  .project-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border); }
  .project-cta { font-family: var(--font-head); font-size: 13px; font-weight: 600; color: var(--accent); }
  .project-audience { font-size: 12px; color: var(--text-muted); background: var(--bg2); padding: 5px 12px; border-radius: 100px; border: 1px solid var(--border); }

  /* MODAL */
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 500; display: flex; align-items: center; justify-content: center; padding: 24px; backdrop-filter: blur(6px); animation: fadeIn 0.25s ease; }
  .modal-box { background: var(--card); border-radius: 24px; max-width: 760px; width: 100%; max-height: 88vh; overflow-y: auto; box-shadow: 0 32px 80px rgba(0,0,0,0.4); animation: scaleUp 0.35s var(--ease); }
  .modal-hero { height: 200px; display: flex; align-items: center; justify-content: center; font-size: 90px; border-radius: 24px 24px 0 0; overflow: hidden; padding: 32px; }
  .modal-hero img { max-width: 60%; max-height: 140px; width: auto; height: auto; object-fit: contain; }
  .modal-body { padding: 36px; }
  .modal-close { float: right; background: var(--bg2); border: 1px solid var(--border); border-radius: 8px; padding: 8px 14px; font-size: 18px; cursor: pointer; color: var(--text); transition: all 0.2s; }
  .modal-close:hover { background: var(--accent-bg); border-color: var(--accent); color: var(--accent); }
  .modal-title { font-family: var(--font-head); font-size: 28px; font-weight: 800; letter-spacing: -1px; margin: 20px 0 8px; color: var(--text); }
  .modal-section-label { font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); margin: 24px 0 8px; }
  .modal-text { font-size: 15px; line-height: 1.75; color: var(--text-muted); font-weight: 300; }
  .modal-steps { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }
  .modal-step { font-size: 12px; font-weight: 600; padding: 5px 12px; border-radius: 8px; background: var(--bg2); border: 1px solid var(--border); color: var(--text-muted); }
  .modal-step.active { background: var(--accent-bg); color: var(--accent); border-color: rgba(0,170,255,0.25); }
  .modal-features { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
  .modal-feature { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text-muted); font-weight: 300; line-height: 1.6; }
  .modal-feature::before { content: '→'; color: var(--accent); font-weight: 700; flex-shrink: 0; margin-top: 2px; }
  .modal-figma { display: inline-flex; align-items: center; gap: 8px; margin-top: 20px; padding: 12px 20px; background: var(--text); color: var(--bg); border-radius: 10px; font-family: var(--font-head); font-size: 13px; font-weight: 600; text-decoration: none; transition: opacity 0.2s; }
  .modal-figma:hover { opacity: 0.82; }

  .fresher-banner { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 48px; display: flex; align-items: center; gap: 40px; flex-wrap: wrap; }
  .fb-icon { font-size: 56px; flex-shrink: 0; }
  .fb-content { flex: 1; min-width: 240px; }
  .fb-title { font-family: var(--font-head); font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin-bottom: 10px; color: var(--text); }
  .fb-desc { font-size: 15px; line-height: 1.7; color: var(--text-muted); font-weight: 300; }
  .fb-badges { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 18px; }
  .fb-badge { font-size: 12px; font-weight: 600; padding: 6px 14px; border-radius: 100px; background: var(--bg2); border: 1px solid var(--border); color: var(--text-muted); }
  .fb-badge.accent { background: var(--accent-bg); color: var(--accent); border-color: rgba(0,170,255,0.25); }

  .skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 48px; }
  .skill-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 24px 20px; transition: box-shadow 0.25s, transform 0.25s; color: var(--text); }
  .skill-card:hover { box-shadow: 0 6px 28px var(--shadow); transform: translateY(-2px); }
  .skill-card-icon { font-size: 26px; margin-bottom: 12px; }
  .skill-card-name { font-family: var(--font-head); font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .skill-card-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .skill-mini-tag { font-size: 11px; padding: 3px 9px; border-radius: 5px; background: var(--bg2); color: var(--text-muted); border: 1px solid var(--border); }

  .contact-wrap { background: #111110; border-radius: 28px; padding: 72px; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
  [data-theme="dark"] .contact-wrap { background: #1a1a1f; border: 1px solid var(--border); }
  .contact-left .section-eyebrow { color: rgba(255,255,255,0.5); }
  .contact-left .section-title { color: #ffffff; }
  .contact-tagline { font-family: var(--font-serif); font-style: italic; font-size: 18px; color: rgba(255,255,255,0.5); margin-top: 10px; }
  .c-links { display: flex; flex-direction: column; gap: 10px; margin-top: 36px; }
  .c-link { display: flex; align-items: center; gap: 14px; padding: 15px 16px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; text-decoration: none; color: #ffffff; transition: all 0.2s; }
  .c-link:hover { background: rgba(255,255,255,0.15); border-color: var(--accent); }
  .c-icon { font-size: 18px; width: 32px; text-align: center; }
  .c-label { font-family: var(--font-head); font-size: 13px; font-weight: 600; color: #ffffff; }
  .c-val { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }
  .c-arrow { margin-left: auto; color: rgba(255,255,255,0.4); font-size: 14px; }
  .cf { display: flex; flex-direction: column; gap: 14px; }
  .cf-group { display: flex; flex-direction: column; gap: 7px; }
  .cf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .cf-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.5); }
  .cf-input, .cf-textarea { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 10px; color: #ffffff; font-family: var(--font-body); font-size: 14px; font-weight: 300; padding: 12px 14px; outline: none; transition: border-color 0.2s, background 0.2s; resize: none; width: 100%; }
  .cf-input::placeholder, .cf-textarea::placeholder { color: rgba(255,255,255,0.35); }
  .cf-input:focus, .cf-textarea:focus { border-color: var(--accent); background: rgba(255,255,255,0.12); }
  .cf-textarea { min-height: 120px; }
  .cf-btn { font-family: var(--font-head); font-size: 14px; font-weight: 700; background: var(--accent); color: #fff; border: none; padding: 13px 26px; border-radius: 12px; cursor: pointer; align-self: flex-start; transition: opacity 0.2s, transform 0.2s; }
  .cf-btn:hover { opacity: 0.88; transform: translateY(-1px); }
  .cf-success { display: flex; align-items: center; gap: 10px; color: #22c55e; background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3); padding: 12px 16px; border-radius: 10px; font-size: 14px; font-weight: 500; }

  footer { max-width: 1200px; margin: 0 auto; padding: 32px 48px; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border); background: var(--bg); }
  .footer-name { font-family: var(--font-head); font-weight: 700; font-size: 15px; }
  .footer-copy { font-size: 13px; color: var(--text-muted); }

  /* ── MONOGRAM TAG CURSOR ── */
  * { cursor: none !important; }
  .cursor-dot {
    position: fixed; z-index: 99999; pointer-events: none;
    transform: translate(-4px, -4px);
    transition: transform 0.15s cubic-bezier(0.16,1,0.3,1);
  }
  .cursor-tag {
    position: fixed; z-index: 99998; pointer-events: none;
    transform: translate(6px, -18px);
    transition: left 0.1s linear, top 0.1s linear, transform 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s;
    display: flex; align-items: center; gap: 5px;
    background: var(--accent);
    color: #fff;
    font-family: var(--font-head);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.04em;
    padding: 5px 10px;
    border-radius: 8px 8px 8px 2px;
    white-space: nowrap;
    box-shadow: 0 4px 14px rgba(0,170,255,0.35);
    opacity: 1;
  }
  .cursor-tag::after {
    content: '';
    position: absolute;
    bottom: -5px; left: 0;
    width: 0; height: 0;
    border-left: 5px solid var(--accent);
    border-bottom: 5px solid transparent;
  }
  .cursor-dot-inner {
    width: 6px; height: 6px; border-radius: 50%;
    background: #fff; flex-shrink: 0;
    transition: transform 0.2s;
  }
  .cursor-tag.hover {
    transform: translate(8px, -22px) scale(1.1);
    box-shadow: 0 6px 20px rgba(0,170,255,0.5);
  }
  .cursor-tag.click {
    transform: translate(6px, -16px) scale(0.92);
    box-shadow: 0 2px 8px rgba(0,170,255,0.4);
  }
  @media (hover: none) { * { cursor: auto !important; } .cursor-dot,.cursor-tag { display: none; } }

  /* ── SCROLL PROGRESS ── */
  .scroll-progress {
    position: fixed; top: 0; left: 0; z-index: 200;
    height: 3px; background: linear-gradient(90deg, #00aaff, #66d4ff, #00aaff);
    background-size: 200% 100%;
    animation: progressShimmer 2s linear infinite;
    transition: width 0.1s linear;
    box-shadow: 0 0 8px rgba(0,170,255,0.6);
    border-radius: 0 2px 2px 0;
  }
  @keyframes progressShimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* ── TYPING CURSOR ── */
  .typing-cursor {
    display: inline-block; width: 2px; height: 1em;
    background: var(--accent); margin-left: 3px;
    vertical-align: middle;
    animation: blink 0.75s step-end infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

  /* ── BACK TO TOP ── */
  .back-top {
    position: fixed; bottom: 32px; right: 32px; z-index: 300;
    width: 44px; height: 44px; border-radius: 12px;
    background: var(--text); color: var(--bg);
    border: none; cursor: pointer; font-size: 18px;
    display: flex; align-items: center; justify-content: center;
    box-shadow: 0 4px 20px var(--shadow);
    transition: all 0.3s var(--ease);
    opacity: 0; transform: translateY(16px) scale(0.9); pointer-events: none;
  }
  .back-top.visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }
  .back-top:hover { background: var(--accent); transform: translateY(-3px) scale(1.05); box-shadow: 0 8px 28px rgba(0,170,255,0.35); }

  /* ── INTRO LOADER ── */
  .loader-wrap {
    position: fixed; inset: 0; z-index: 9999;
    background: #0a0a0b;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 20px;
    transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1);
  }
  .loader-wrap.exit {
    opacity: 0;
    transform: scale(1.04);
    pointer-events: none;
  }
  .loader-monogram {
    width: 72px; height: 72px; border-radius: 18px;
    background: #00aaff;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800; font-size: 32px; color: #fff;
    opacity: 0;
    animation: loaderPop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.1s forwards;
    box-shadow: 0 0 60px rgba(0,170,255,0.4);
  }
  .loader-name {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 800;
    letter-spacing: -2px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    max-width: 0;
    opacity: 0;
  }
  .loader-name.show {
    animation: typeIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
  }
  .loader-tagline {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.45);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .loader-tagline.show {
    opacity: 1;
    transform: translateY(0);
  }
  .loader-bar-wrap {
    width: 160px; height: 2px;
    background: rgba(255,255,255,0.1);
    border-radius: 2px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .loader-bar-wrap.show { opacity: 1; }
  .loader-bar {
    height: 100%; width: 0;
    background: linear-gradient(90deg, #00aaff, #66d4ff);
    border-radius: 2px;
    transition: width 1.4s cubic-bezier(0.4,0,0.2,1);
  }
  .loader-bar.fill { width: 100%; }
  @keyframes loaderPop {
    from { opacity:0; transform: scale(0.5) rotate(-10deg); }
    to   { opacity:1; transform: scale(1) rotate(0deg); }
  }
  @keyframes typeIn {
    from { max-width: 0; opacity:0; }
    to   { max-width: 600px; opacity:1; }
  }
  /* ── END LOADER ── */

  @keyframes fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeLeft { from { opacity:0; transform:translateX(32px); } to { opacity:1; transform:translateX(0); } }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes slideUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
  .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.9s var(--ease), transform 0.9s var(--ease); }
  .reveal.in { opacity: 1; transform: translateY(0); }
  .reveal-left { opacity: 0; transform: translateX(-36px); transition: opacity 0.9s var(--ease), transform 0.9s var(--ease); }
  .reveal-left.in { opacity: 1; transform: translateX(0); }
  .reveal-scale { opacity: 0; transform: scale(0.92); transition: opacity 0.8s var(--ease), transform 0.8s var(--ease); }
  .reveal-scale.in { opacity: 1; transform: scale(1); }

  @media (max-width: 900px) {
    .nav { padding: 0 20px; }
    .nav-links { display: none; }
    .hero { grid-template-columns: 1fr; padding: 100px 24px 60px; }
    .hero-right { order: -1; max-width: 280px; }
    .section { padding: 72px 24px; }
    .project-card { grid-template-columns: 1fr; }
    .project-thumb { border-right: none; border-bottom: 1px solid var(--border); min-height: 180px; }
    .skills-grid { grid-template-columns: 1fr 1fr; }
    .about-strip-inner { padding: 36px 24px; gap: 28px; }
    .about-stat { border-right: none; padding-right: 0; }
    .contact-wrap { grid-template-columns: 1fr; padding: 36px 24px; gap: 40px; border-radius: 20px; }
    .cf-row { grid-template-columns: 1fr; }
    footer { padding: 24px; flex-direction: column; gap: 8px; text-align: center; }
    .fresher-banner { padding: 32px 24px; }
    .modal-overlay { padding: 12px; }
    .modal-body { padding: 24px; }
  }
  @media (max-width: 600px) { .skills-grid { grid-template-columns: 1fr; } }
`;

const projects = [
  {
    emoji: "🍔",
    logo: LOGO_QB,
    bg: "linear-gradient(135deg,#0d0d0d,#1a1008)",
    name: "QuickBite – Food Delivery App Redesign",
    desc: "Redesigned a food delivery mobile app to improve the ordering experience by introducing a Quick Reorder feature — one-tap repeat orders, reducing friction for frequent users.",
    tags: ["UI Design", "UX Design", "Prototyping", "User Flow", "Mobile App"],
    duration: "1 week",
    audience: "Students & Professionals",
    figma: "https://www.figma.com/proto/wfnyGmP5DMHzp5y3tevTuj/QuickBite-Food-Delivery-App?node-id=0-1&t=RZ4vaxT5z9ntBI7M-1",
    problem: "Users frequently order the same food but existing apps require them to search and select items repeatedly, making the process time-consuming and inefficient.",
    role: "Designed the complete UI/UX for a mobile food delivery app, including user flows, wireframes, and high-fidelity screens. Focused on improving repeat ordering experience through a simplified interaction model.",
    process: ["Research", "Problem Definition", "User Flow", "Wireframing", "UI Design", "Prototyping"],
    features: [
      "Quick Reorder feature for one-tap repeat orders",
      "Home dashboard with personalised suggestions",
      "Restaurant browsing and menu interface",
      "Food details and cart management screen",
      "Order confirmation and real-time tracking",
      "Order history with inline reorder options"
    ],
    outcome: "Improved understanding of user behaviour in food delivery apps and learned how to design for speed and convenience. Gained hands-on experience in building end-to-end mobile UX flows and interactive prototypes in Figma."
  },
  {
    emoji: "🎓",
    logo: LOGO_AC,
    bg: "linear-gradient(135deg,#0d1017,#111827)",
    name: "CampusFlow – Student Academic Management",
    desc: "Designed a student productivity web app to manage assignments, view timetables, and calculate attendance — bringing academic chaos into a clean, organised dashboard.",
    tags: ["UI Design", "UX Design", "Dashboard", "Wireframing", "Prototyping"],
    duration: "1 week",
    audience: "College & University Students",
    figma: "https://www.figma.com/proto/mL8chfSqcpunpkgZbHLNPe/CAMPUSFLOW?t=RZ4vaxT5z9ntBI7M-1",
    problem: "Students struggle to manage assignments, track deadlines, and calculate attendance due to the lack of a centralised and user-friendly platform.",
    role: "Designed a web-based dashboard experience integrating assignment tracking, timetable viewing, and attendance calculation into a single platform. Created structured layouts and intuitive navigation for student productivity.",
    process: ["Research", "Problem Definition", "Information Architecture", "Wireframing", "UI Design", "Prototyping"],
    features: [
      "Student dashboard with academic overview",
      "Assignment management system with deadlines",
      "Weekly timetable interface",
      "Attendance calculator with percentage output",
      "Notification system for upcoming deadlines",
      "Profile and settings management"
    ],
    outcome: "Learned to design dashboard-based web interfaces and handle information-heavy layouts. Improved skills in structuring complex features into simple user flows and designing for real student needs."
  }
];

const skillGroups = [
  { icon: "🎨", name: "Design Tools", tags: ["Figma", "Wireframing", "Prototyping", "UI Design"] },
  { icon: "🧠", name: "UX Methods", tags: ["User Research", "User Flows", "Usability Testing", "Information Architecture"] },
  { icon: "💻", name: "Tech & Dev", tags: ["HTML", "CSS", "Python", "AI & ML (CSE)"] },
  { icon: "📐", name: "Visual Design", tags: ["Typography", "Color Theory", "Responsive Design", "Dashboard Design"] },
  { icon: "⚙️", name: "Workflow", tags: ["Agile Basics", "Problem Solving", "Attention to Detail"] },
  { icon: "🌱", name: "Currently Learning", tags: ["Advanced Figma", "Design Systems", "Motion Design"] }
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-scale");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.08 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const [sent, setSent] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loaderPhase, setLoaderPhase] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);
  const [cursorClick, setCursorClick] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [typeIndex, setTypeIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showBack, setShowBack] = useState(false);
  useReveal();

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
      setShowBack(window.scrollY > 400);
      const el = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollPct(Math.min(pct, 100));
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Custom cursor
  useEffect(() => {
    const move = e => setCursor({ x: e.clientX, y: e.clientY });
    const down = () => setCursorClick(true);
    const up   = () => setCursorClick(false);
    const over = e => {
      const t = e.target;
      setCursorHover(!!(t.closest('a,button,.project-card,.skill-card,.c-link,.nav-cta')));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  // Typing animation
  const roles = ['UI/UX Designer', 'Problem Solver', 'CSE Student', 'Creative Thinker'];
  useEffect(() => {
    if (loading) return;
    const current = roles[typeIndex];
    let timeout;
    if (!isDeleting) {
      if (typedText.length < current.length) {
        timeout = setTimeout(() => setTypedText(current.slice(0, typedText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => setTypedText(typedText.slice(0, -1)), 45);
      } else {
        setIsDeleting(false);
        setTypeIndex(i => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, typeIndex, loading]);

  useEffect(() => {
    // Phase 0 → name types in, Phase 1 → tagline, Phase 2 → fade out
    const t1 = setTimeout(() => setLoaderPhase(1), 900);
    const t2 = setTimeout(() => setLoaderPhase(2), 1900);
    const t3 = setTimeout(() => setLoading(false), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (activeProject !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [activeProject]);

  const onSubmit = e => { e.preventDefault(); setSent(true); setForm({ name:"",email:"",subject:"",message:"" }); };
  const p = activeProject !== null ? projects[activeProject] : null;

  return (
    <>
      <style>{css}</style>

      {/* MONOGRAM TAG CURSOR */}
      <div className="cursor-dot" style={{left: cursor.x, top: cursor.y, position:'fixed'}}/>
      <div className={`cursor-tag${cursorHover?' hover':''}${cursorClick?' click':''}`}
        style={{left: cursor.x, top: cursor.y, position:'fixed'}}>
        <span className="cursor-dot-inner"/>
        VK
      </div>

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" style={{width: `${scrollPct}%`}}/>

      {/* BACK TO TOP */}
      <button className={`back-top${showBack?' visible':''}`}
        onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>↑</button>

      {/* INTRO LOADER */}
      {loading && (
        <div className={`loader-wrap${loaderPhase >= 2 ? ' exit' : ''}`}>
          <div className="loader-monogram">V</div>
          <div className={`loader-name${loaderPhase >= 0 ? ' show' : ''}`}>
            Varun Kumar .M
          </div>
          <div className={`loader-tagline${loaderPhase >= 1 ? ' show' : ''}`}>
            UI/UX Designer · Hyderabad
          </div>
          <div className={`loader-bar-wrap${loaderPhase >= 1 ? ' show' : ''}`}>
            <div className={`loader-bar${loaderPhase >= 1 ? ' fill' : ''}`}/>
          </div>
        </div>
      )}

      {/* MODAL */}
      {p && (
        <div className="modal-overlay" onClick={e => { if(e.target.className === "modal-overlay") setActiveProject(null); }}>
          <div className="modal-box">
            <div className="modal-hero" style={{background: p.bg}}>
              {p.logo ? <img src={p.logo} alt={p.name}/> : <span>{p.emoji}</span>}
            </div>
            <div className="modal-body">
              <button className="modal-close" onClick={() => setActiveProject(null)}>✕</button>
              <div className="project-meta" style={{marginTop:4}}>
                <span className="project-duration">{p.duration}</span>
                {p.tags.slice(0,3).map(t => <span className="project-tag" key={t}>{t}</span>)}
              </div>
              <div className="modal-title">{p.name}</div>
              <div className="modal-section-label">Problem Statement</div>
              <div className="modal-text">{p.problem}</div>
              <div className="modal-section-label">My Role</div>
              <div className="modal-text">{p.role}</div>
              <div className="modal-section-label">Design Process</div>
              <div className="modal-steps">
                {p.process.map((s,i) => <span className={`modal-step${i===0||i===p.process.length-1?' active':''}`} key={s}>{s}</span>)}
              </div>
              <div className="modal-section-label">Key Features</div>
              <div className="modal-features">
                {p.features.map(f => <div className="modal-feature" key={f}>{f}</div>)}
              </div>
              <div className="modal-section-label">Outcome & Learning</div>
              <div className="modal-text">{p.outcome}</div>
              <a href={p.figma} target="_blank" rel="noreferrer" className="modal-figma">View Figma Prototype →</a>
            </div>
          </div>
        </div>
      )}

      {/* RESUME MODAL */}
      {showResume && (
        <div className="resume-overlay" onClick={e => { if(e.target.className==="resume-overlay") setShowResume(false); }}>
          <div className="resume-box">
            <div className="resume-header">
              <span className="resume-title">📄 Varun Kumar .M — Resume</span>
              <div className="resume-actions">
                <a href={RESUME} download="Varun_Kumar_Resume.pdf" className="resume-download">⬇ Download PDF</a>
                <button className="resume-close" onClick={() => setShowResume(false)}>✕</button>
              </div>
            </div>
            <object className="resume-iframe" data={RESUME} type="application/pdf" style={{width:"100%",flex:1,border:"none"}}><div style={{padding:40,textAlign:"center",color:"var(--text-muted)",fontFamily:"var(--font-body)"}}><p style={{fontSize:18,marginBottom:16}}>📄 PDF preview not available in this browser.</p><a href={RESUME} download="Varun_Kumar_Resume.pdf" style={{background:"var(--accent)",color:"#fff",padding:"12px 24px",borderRadius:10,textDecoration:"none",fontWeight:600,fontFamily:"var(--font-head)"}}>⬇ Download Resume</a></div></object>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className={`nav${scrolled?" raised":""}`}>
        <a href="#" className="nav-logo">
          <div className="nav-logo-mark">V</div>
          <span className="nav-logo-name">Varun Kumar .M</span>
        </a>
        <ul className="nav-links">
          <li><a href="#projects" onClick={e=>{e.preventDefault();document.getElementById('projects').scrollIntoView({behavior:'smooth'})}}>Work</a></li>
          <li><a href="#skills" onClick={e=>{e.preventDefault();document.getElementById('skills').scrollIntoView({behavior:'smooth'})}}>Skills</a></li>
          <li><a href="#contact" onClick={e=>{e.preventDefault();document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>Contact</a></li>
        </ul>
        <div className="nav-right">
          <button className="dark-toggle" onClick={() => setDarkMode(d => !d)} title="Toggle dark mode">
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="nav-cta outline" onClick={() => setShowResume(true)}>Resume 📄</button>
          <a href="mailto:megavathvarunkumar@gmail.com" className="nav-cta">Hire Me →</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <div className="hero-available"><span className="avail-dot"/>Open to Work · Fresher</div>
          <h1 className="hero-name">
            Varun<br/>Kumar .M
          </h1>
          <div className="hero-role">
            <span className="hero-role-text">
              {typedText}<span className="typing-cursor"/>
            </span>
            <span className="hero-role-badge">Hyderabad, IN</span>
          </div>
          <p className="hero-bio">UI/UX enthusiast and CSE (AI & ML) student passionate about crafting meaningful and user-friendly digital experiences. I focus on combining creativity with usability to design solutions that solve real-world problems.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-dark" onClick={e=>{e.preventDefault();document.getElementById("projects").scrollIntoView({behavior:"smooth"})}}>View My Work →</a>
            <button className="btn btn-outline" onClick={() => setShowResume(true)}>View Resume 📄</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo-wrap">
            <img src={PHOTO} alt="Varun Kumar .M" className="hero-photo-img"/>
            <div className="hero-photo-badge">
              <div>
                <div className="badge-text">UI/UX Designer & CSE Student</div>
                <div className="badge-sub">UI/UX Designer · AI & ML</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT STRIP */}
      <div className="about-strip">
        <div className="about-strip-inner reveal-left">
          <div className="about-stat"><span className="about-stat-num">2</span><span className="about-stat-label">Projects Completed</span></div>
          <div className="about-stat"><span className="about-stat-num">10+</span><span className="about-stat-label">Screens Designed</span></div>
          <div className="about-stat"><span className="about-stat-num">Figma</span><span className="about-stat-label">Primary Tool</span></div>
          <p className="about-bio-text">A CSE student specialising in AI & ML, blending technical knowledge with a sharp eye for design. I believe great UX is invisible — it just works. Currently seeking my first opportunity to contribute and grow.</p>
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="projects-head reveal">
          <div><div className="section-eyebrow">Selected Work</div><h2 className="section-title">Handpicked Projects For You</h2></div>
        </div>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div className="project-card reveal" key={i} style={{transitionDelay:`${i*0.08}s`}} onClick={() => setActiveProject(i)}>
              <div className={`project-thumb${p.logo ? ' has-logo' : ''}`} style={{background: p.bg}}>
                {p.logo ? <img src={p.logo} alt={p.name}/> : <span>{p.emoji}</span>}
              </div>
              <div className="project-body">
                <div>
                  <div className="project-meta">
                    <span className="project-duration">{p.duration}</span>
                    {p.tags.slice(0,3).map(t => <span className="project-tag" key={t}>{t}</span>)}
                  </div>
                  <div className="project-name">{p.name}</div>
                  <p className="project-desc">{p.desc}</p>
                </div>
                <div className="project-footer">
                  <span className="project-cta">View Case Study →</span>
                  <span className="project-audience">{p.audience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEEKING BANNER */}
      <section className="section" style={{paddingTop:0}}>
        <div className="fresher-banner reveal">
          <div className="fb-icon">🚀</div>
          <div className="fb-content">
            <div className="fb-title">Actively Seeking My First UX Role</div>
            <p className="fb-desc">I'm a fresher ready to bring energy, curiosity, and a design-first mindset to a team. My academic background in AI & ML gives me a unique technical perspective that I carry into every design decision.</p>
            <div className="fb-badges">
              <span className="fb-badge accent">Open to Work</span>
              <span className="fb-badge">Full Time</span>
              <span className="fb-badge">Internship</span>
              <span className="fb-badge">Freelance</span>
              <span className="fb-badge">Remote / Hyderabad</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section" style={{paddingTop:0}}>
        <div className="reveal"><div className="section-eyebrow">Capabilities</div><h2 className="section-title">Skills & Tools</h2></div>
        <div className="skills-grid">
          {skillGroups.map((s, i) => (
            <div className="skill-card reveal-scale" key={i} style={{transitionDelay:`${i*0.07}s`}}>
              <div className="skill-card-icon">{s.icon}</div>
              <div className="skill-card-name">{s.name}</div>
              <div className="skill-card-tags">{s.tags.map(t => <span className="skill-mini-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" style={{paddingTop:0}}>
        <div className="contact-wrap reveal">
          <div className="contact-left">
            <div className="section-eyebrow">Get In Touch</div>
            <h2 className="section-title">Let's build something great together</h2>
            <p className="contact-tagline">or just say hi, whichever is easier</p>
            <div className="c-links">
              <a href="mailto:megavathvarunkumar@gmail.com" className="c-link" target="_blank" rel="noreferrer">
                <span className="c-icon">✉️</span>
                <div><div className="c-label">Email</div><div className="c-val">megavathvarunkumar@gmail.com</div></div>
                <span className="c-arrow">→</span>
              </a>
              <a href="https://www.linkedin.com/in/varun-kumar7" target="_blank" rel="noreferrer" className="c-link">
                <span className="c-icon">💼</span>
                <div><div className="c-label">LinkedIn</div><div className="c-val">linkedin.com/in/varun-kumar7</div></div>
                <span className="c-arrow">→</span>
              </a>
              <a href="https://github.com/varunkumar0702" target="_blank" rel="noreferrer" className="c-link">
                <span className="c-icon">🐙</span>
                <div><div className="c-label">GitHub</div><div className="c-val">github.com/varunkumar0702</div></div>
                <span className="c-arrow">→</span>
              </a>
            </div>
          </div>
          <form className="cf" onSubmit={onSubmit}>
            <div className="cf-row">
              <div className="cf-group"><label className="cf-label">Name</label><input className="cf-input" placeholder="Your Name" value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} required/></div>
              <div className="cf-group"><label className="cf-label">Email</label><input className="cf-input" type="email" placeholder="your@email.com" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} required/></div>
            </div>
            <div className="cf-group"><label className="cf-label">Subject</label><input className="cf-input" placeholder="Internship, Freelance, Collaboration..." value={form.subject} onChange={e=>setForm(p=>({...p,subject:e.target.value}))} required/></div>
            <div className="cf-group"><label className="cf-label">Message</label><textarea className="cf-textarea" placeholder="Tell me about the opportunity..." value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} required/></div>
            {sent ? <div className="cf-success">✓ Sent! I'll get back to you soon.</div> : <button className="cf-btn" type="submit">Send Message →</button>}
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-name">Varun Kumar .M</div>
        <div className="footer-copy">© 2026 · UI/UX Designer · Hyderabad, IN</div>
      </footer>
    </>
  );
}

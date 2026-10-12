import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// global styles FIRST, so component CSS (loaded by App) can override them
import './index.css';
import App from './App.jsx';

// register GSAP plugins once, for the whole app
gsap.registerPlugin(ScrollTrigger, useGSAP);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
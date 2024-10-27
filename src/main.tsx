import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ComingSoon from "./comingsoon/ComingSoon";

import Maintanace from './maintanace/Maintanace';


const showComingSoon = import.meta.env.VITE_SHOW_COMING_SOON === "true";
const showMaintenance = import.meta.env.VITE_SHOW_MAINTENANCE === "true";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {showMaintenance ? (
      <Maintanace />
    ) : showComingSoon ? (
      <ComingSoon />
    ) : (
      <App />
    )}
  </StrictMode>,
)

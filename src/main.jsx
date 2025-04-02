import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleInterestCalculator from './SimpleInterestCalculator';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleInterestCalculator />
  </StrictMode>,
)
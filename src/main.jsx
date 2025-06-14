import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyCardBox from './MyCardBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyCardBox />
  </StrictMode>,
)

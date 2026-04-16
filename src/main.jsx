import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './routers/Router'
import TimelineProvider from './context/TimelineProvider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
       <RouterProvider router={router}></RouterProvider>
    </TimelineProvider>
  </StrictMode>,
)

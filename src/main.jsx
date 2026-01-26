import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from "./context/productContext.jsx"
import { FilterProvider } from './context/filterContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <FilterProvider>
        <App/>
      </FilterProvider>
    </AppProvider>
  </StrictMode>
)

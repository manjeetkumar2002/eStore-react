import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {AppProvider} from "./context/productContext.jsx"
import { FilterProvider } from './context/filterContext.jsx'
import { CartContextProvider } from './context/cartContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <CartContextProvider>
      <FilterProvider>
        <App/>
      </FilterProvider>
      </CartContextProvider>
    </AppProvider>
  </StrictMode>
)

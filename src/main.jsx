import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/productContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";
import { CartProvider } from "./context/cartContext.jsx";
import { ThemeProvider } from "./context/themeContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AppProvider>
      <CartProvider>
        <FilterProvider>
          <App  />
        </FilterProvider>
      </CartProvider>
    </AppProvider>
    </ThemeProvider>
  </StrictMode>
);

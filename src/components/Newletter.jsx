import React from "react";
import { useTheme } from "../context/themeContext";

function Newsletter() {
  const theme = useTheme()
  return (
    <div id="newsletter-section" style={{backgroundColor: theme.background}}>
      <div className="container-lg py-5">
        <div className="row my-5">
          <div className="col col-sm-7 d-flex flex-column align-items-center mx-auto">
            <h2>Join Our Newsletter</h2>
            <p className="text-center">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="search-container rounded-5 p-1 position-relative overflow-hidden bg-white w-100" style={{boxShadow: `2px 2px 10px ${theme.shadow}`}}>
              <input id="search-bar" className="border-0 bg-transparent fs-6 shadow-none form-control" type="text" placeholder="Your email address"/>
              <div style={{backgroundColor: theme.primary}} className="text-white d-flex justify-content-center align-items-center fs-6 m-1 px-3 py-0 rounded-5 position-absolute top-0 bottom-0 end-0">
                Subscribe
              </div>        
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
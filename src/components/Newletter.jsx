import React from "react";

function Newsletter() {
  return (
    <div id="newsletter-section" style={{backgroundColor: "#f5f8fc"}}>
      <div className="container-lg py-5">
        <div className="row my-5">
          <div className="col col-sm-7 d-flex flex-column align-items-center mx-auto">
            <h2>Join Our Newsletter</h2>
            <p className="text-center">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="search-container rounded-5 p-1 position-relative overflow-hidden bg-white w-100" style={{boxShadow: "2px 2px 10px rgba(0,0,0,0.1)"}}>
              <input id="search-bar" className="border-0 bg-transparent fs-6 shadow-none form-control" type="text" placeholder="Your email address"/>
              <div style={{backgroundColor: "#0a4db8"}} className="text-white d-flex justify-content-center align-items-center fs-6 m-1 px-3 py-0 rounded-5 position-absolute top-0 bottom-0 end-0">
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
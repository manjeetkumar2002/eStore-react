import PageNavigation from './components/PageNavigation'
import Testinomials from './components/Testinomials'

const About = () => {
  return (
    <div>
        <PageNavigation pageName="About"/>
        <div className='container-lg'>
                  <div className="px-3 py-2 fs-6 fw-semibold rounded-5 d-inline-block my-4 mt-5" style={{color: "#0a4db8", backgroundColor: "#ebf2fa"}}><i className="bi bi-info-circle"></i> About Us</div>
          {/* row1 */}
          <div className="row">
            <div className="col-md-6">
              <h2>Your Trusted Online Shopping Destination Since 2015</h2>
              <p>At eStore, we believe that everyone deserves access to quality products at affordable prices. What started as a small online boutique has grown into a comprehensive marketplace connecting thousands of customers with exceptional products from verified sellers worldwide.</p>
            </div>
            <div className="col-md-6">
              <p>Our mission is simple: to make online shopping effortless, secure, and enjoyable. We carefully curate our collections, ensuring every product meets our standards for quality, value, and customer satisfaction.</p>
              <p>With over 100,000 satisfied customers and growing, we've built our reputation on transparency, reliable delivery, and outstanding customer support. Whether you're shopping for electronics, fashion, home essentials, or unique gifts, eStore is here to serve your needs.</p>
            </div>
          </div>
          {/* row2 */}
          <div className="row mt-5">
            <div className="col-md-4">
              <i className="bi bi-bullseye fs-2 px-3 py-2 rounded-3 " style={{color:"#0a4db8", backgroundColor:"#ebf2fa"}}></i>
              <h4 className='mt-4 fs-5 text-muted'>Our Mission</h4>
              <p>To revolutionize online shopping by providing exceptional value, unparalleled selection, and a seamless customer experience that exceeds expectations at every touchpoint.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-person-fill-check fs-2  px-3 py-2 rounded-3" style={{color:"#0a4db8", backgroundColor:"#ebf2fa"}}></i>
              <h4 className='mt-4 fs-5 text-muted'>Quality Guarantee</h4>
              <p>Every product in our store undergoes rigorous quality checks. We stand behind everything we sell with a 30-day satisfaction guarantee and easy returns.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-clipboard-data fs-2  px-3 py-2 rounded-3" style={{color:"#0a4db8", backgroundColor:"#ebf2fa"}}></i>
              <h4 className='mt-4 fs-5 text-muted'>Fast & Reliable</h4>
              <p>We partner with trusted logistics providers to ensure your orders reach you quickly and safely, with real-time tracking from warehouse to doorstep.</p>
            </div>
          </div>
          {/* row3 */}
          <div className="row my-5">
            <div className="col">
              <img className='img-fluid w-full rounded-4' src="https://bootstrapmade.com/content/demo/eStore/assets/img/about/about-wide-1.webp"  alt="Our Modern Warehouse Facility"></img>
            </div>
          </div>
          {/* testinomials */}
          <Testinomials/>
        </div>
    </div>
  )
}

export default About
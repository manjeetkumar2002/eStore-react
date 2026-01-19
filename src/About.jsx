import React from 'react'
import Header from './components/Header'
import PageNavigation from './components/PageNavigation'
import Testinomials from './components/Testinomials'

const About = () => {
  return (
    <div>
        <PageNavigation pageName="About"/>
        <div className='container-lg'>
                  <div className="px-3 py-2 fs-6 fw-semibold rounded-5 d-inline-block my-4 mt-5" style={{color: "#0a4db8", backgroundColor: "#ebf2fa"}}><i class="bi bi-info-circle"></i> About Us</div>
          {/* row1 */}
          <div className="row">
            <div className="col-md-6">
              <h2>Nemo enim ipsam voluptatem quia voluptas aspernatur</h2>
              <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
            </div>
            <div className="col-md-6">
              <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
              <p>Amet eos ut. Officiis soluta ab id dolor non sint. Corporis omnis consequatur quisquam ex consequuntur quo omnis. Quo eligendi cum. Amet mollitia qui quidem dolores praesentium quasi ut et.</p>
            </div>
          </div>
          {/* row2 */}
          <div className="row mt-5">
            <div className="col-md-4">
              <i class="bi bi-bullseye fs-2 px-3 py-2 rounded-3 " style={{color:"#0a4db8", backgroundColor:"#ebf2fa"}}></i>
              <h4 className='mt-4 fs-5 text-muted'>At vero eos</h4>
              <p>
Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
            </div>
            <div className="col-md-4">
              <i class="bi bi-person-fill-check fs-2  px-3 py-2 rounded-3" style={{color:"#0a4db8", backgroundColor:"#ebf2fa"}}></i>
              <h4 className='mt-4 fs-5 text-muted'>Sed ut perspiciatis</h4>
              <p>Lorem ipsum dolrum non accusamus. Vel id esse facere cupiditate nobis nostrum iste, aperiam officiis sit?</p>
            </div>
            <div className="col-md-4">
              <i class="bi bi-clipboard-data fs-2  px-3 py-2 rounded-3" style={{color:"#0a4db8", backgroundColor:"#ebf2fa"}}></i>
              <h4 className='mt-4 fs-5 text-muted'>Nemo enim ipsam</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem minima dolor veritatis distinctio at soluta, corrupti debitis fugit ex sed!</p>
            </div>
          </div>
          {/* row3 */}
          <div className="row my-5">
            <div className="col">
              <img className='img-fluid w-full rounded-4' src="https://bootstrapmade.com/content/demo/eStore/assets/img/about/about-wide-1.webp"  alt="Video Thumbnail"></img>
              {/* <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" class="glightbox pulsating-play-btn"></a> */}
            </div>
          </div>
          {/* testinomials */}
          <Testinomials/>
        </div>
    </div>
  )
}

export default About
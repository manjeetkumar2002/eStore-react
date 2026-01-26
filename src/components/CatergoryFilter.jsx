import React from 'react'

const CatergoryFilter = () => {
  return (
    <div className='shadow rounded-3 p-4'>
        <h3 className='fs-5'>Categories</h3>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Clothing
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  {/* sublist */}
                  <ul className='list-unstyled d-flex gap-3 flex-column'>
                    <li>Men's Wear</li>
                    <li>Women's Wen</li>
                    <li>Kid's Wear</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Electronics
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <ul className='list-unstyled d-flex gap-3 flex-column'>
                    <li>Smartphones</li>
                    <li>Laptops</li>
                    <li>Tablets</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Home & Kitchen
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <ul className='list-unstyled d-flex gap-3 flex-column'>
                    <li>Furniture</li>
                    <li>Kitchen Appliances</li>
                    <li>Home Decor</li>
                    <li>Bedding</li>
                  </ul>  
                </div>
              </div>
            </div>
        </div>


         <h3 className='fs-5 mt-4'>Price Range</h3>
         <div className='d-flex justify-content-between'>
            <span>$270</span>
            <span>$760</span>
         </div>
         <div>
          <input type="range" name="" id=""  min={270} max={760} className='w-100 mt-3'/>
         </div>
         <div className='my-3 row row-cols-2'>
          <div className='d-flex col'>
            <div className='p-2' style={{backgroundColor:"#ebf2fa"}}>$</div>
            <input type="number" className='w-75'  />
          </div>
          <div className='d-flex col'>
            <div className='p-2' style={{backgroundColor:"#ebf2fa"}}>$</div>
            <input type="number" className='w-75'   />
          </div>
         </div>
         <div>
          <button className='btn w-100' style={{backgroundColor:"#0a4db8",color:"white"}}>Apply Filter</button>
         </div>



         <h3 className='fs-4 mt-4'>Filter by Brand</h3>
         <h4 className='fs-5 mt-4'>Filter by Color</h4>
         <div>
          {/* colors btns */}
         </div>
         <div className='d-flex justify-content-between'>
          <button className="btn btn-sm btn-outline-secondary">Clear All</button>
          <button className="btn btn-sm" style={{backgroundColor:"#0a4db8",color:"white"}}>Apply Filter</button>
         </div>

          <h3 className='fs-5 mt-4'>Filter by Brand</h3>
          
          <div className='border rounded-2 p-2'>
            <input type="text" className='border-0' placeholder='Search brands...'  />
            <i className="bi bi-search float-end text-secondary"></i>
          </div>

          <div className='mt-2 d-flex justify-content-between'>
            <div>
            <input className='me-2' type="checkbox" name="" id="" />
            <span>Nike</span>
            </div>
            <div className='text-secondary'>(24)</div>
          </div>
          <div className='mt-2 d-flex justify-content-between'>
            <div>
            <input className='me-2' type="checkbox" name="" id="" />
            <span>Adidas</span>
            </div>
            <div className='text-secondary'>(21)</div>
          </div>
          <div className='mt-2 d-flex justify-content-between'>
            <div>
            <input className='me-2' type="checkbox" name="" id="" />
            <span>Puma</span>
            </div>
            <div className='text-secondary'>(34)</div>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <button className='btn btn-sm btn-outline-primary'>Apply Filter</button>
            <button className='btn btn-sm'>Clear All</button>
          </div>
    </div>
  )
}

export default CatergoryFilter
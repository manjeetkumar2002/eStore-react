import React from 'react'
import { useState } from 'react'

const MyImage = ({ images = [] }) => { // ✅ Default empty array
    const [Mainimage, setMainimage] = useState(images[0] || "") // ✅ Default empty string
    
    // Agar images empty hai toh return null
    if (images.length === 0) {
        return <div>No images available</div>
    }

    return (
        <div>
            <div>
                <img  className='img-fluid'
                    src={Mainimage || images[0]} 
                    alt="Main product" 
                    style={{ height: "450px", width: "100%", objectFit: "cover", objectPosition:"center" }}
                />
            </div>
            <div className='d-flex position-relative overflow-hidden ' style={{ width:"100%", gap: "10px", marginTop: "20px" , marginBottom:"20px"}}>
                {
                    images.map((image, index) => {
                        return (
                            <img 
                                key={index} // ✅ Always add key prop
                                onClick={() => setMainimage(image)} 
                                height="140px" 
                                width="150px" 
                                src={image} 
                                alt="product thumbnail" 
                                style={{
                                    cursor: "pointer",
                                    border: image === Mainimage ? "2px solid blue" : "1px solid gray",
                                    objectFit: "cover",
                                    borderRadius: "5px"
                                }}
                            />
                        )
                    })
                }
                <div className="position-absolute px-2 w-100" style={{ zIndex: 100, top: '35%' }}>
                    <i className=" bi bi-chevron-left border-0 fs-3 fw-semibold rounded-circle px-1 py-0 shadow-sm bg-white" style={{ color: '#0a4db8' ,cursor: "pointer",      }}></i>
                    <i className=" bi bi-chevron-right border-0 fs-3 fw-semibold rounded-circle px-1 py-0 shadow-sm bg-white float-end" style={{ color: '#0a4db8',cursor: "pointer",         }}></i>
                </div>
            </div>
        </div>
    )
}

export default MyImage
import React from 'react'
import { useState } from 'react'
import { BiBorderBottom } from 'react-icons/bi'
import { useCartContext } from '../context/cartContext'
const CartCard = ({data}) => {
    const {id,name,image,price,amount,color,size,stock} = data
    const {incrementQuantity,decrementQuantity,removeCartItem} = useCartContext()
    return (
        <div className='row p-3 rounded-3 mt-2 cart-card'>
            <div className="col">
                <div  className='d-flex gap-3'>
                    <div className='image-container border rounded-2 overflow-hidden d-inline-block border'>
                        <img className='' height={"100%"} width={85} src={image} alt="" />
                    </div>
                    <div>
                        <h5 className='fs-6'>{name}</h5>
                        <div className='d-flex gap-2'>
                            {color&&<span style={{fontSize:"0.89rem"}} className='border p-1 rounded-2 text-secondary' >Color : {color.name}</span>}
                           {size&&<span style={{fontSize:"0.89rem"}} className='border p-1 rounded-2 text-secondary' >Size : {size}</span>} 
                        </div>
                        <button onClick={()=>removeCartItem(id)} style={{fontSize:"0.89rem"}}  className='cart-remove-btn border-0 btn-sm bg-transparent mt-2'><i className="bi bi-trash"></i> Remove</button>
                    </div>
                </div>
            </div>
            <div className="col align-items-center justify-content-end d-flex gap-5">
                <div>
                    <h6 className='fs-6 fw-semibold'>${price}</h6>
                </div>
                <div>
                    <div className="d-inline-flex overflow-hidden border  rounded-5">
                <button
                  className="p-1 bg-light bg-transparent  rounded-start"
                  onClick={()=>decrementQuantity(id)}
                  style={{
                    width: "30px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  -
                </button>

                <div
                  className="p-1 px-4   d-flex align-items-center justify-content-center"
                  style={{
                    width: "20px",
                  }}
                >
                  {amount}
                </div>

                <button
                  className="p-1 bg-light  bg-transparent rounded-end"
                  onClick={()=>incrementQuantity(id)}
                  style={{
                    width: "30px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  +
                </button>
              </div>
                </div>
                <div style={{borderBottom:"2px solid blue"}}>
                    <h6 className='fs-6 fw-semibold'>${(price*amount).toFixed(2)}</h6>
                </div>
            </div>
        </div>
    )
}

export default CartCard
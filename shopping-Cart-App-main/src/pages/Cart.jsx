import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import CartItem from "../components/CartItem";




const Cart = () =>{

  const {cart} = useSelector((state)=> state)
  const [totalAmount,setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) =>acc+curr.price,0));

  },[cart])
   return(

    <div>
      {

        cart.length > 0 ?
        (<div>

          <div className ="flex justify-center   ">
            <div className ="flex flex-col  justify-center items-center m-w-24  space-y-10  min-h-[80vh] mt-10">
            {
              cart.map((item,index) => {

                return<CartItem key ={item.id} item = {item} itemIndex ={index}/>
              })

            }                        
            </div>
            <div className ="flex flex-col justify-between items-center min-h-[50vh] space-x-10 mt-20   ">
            
              <div className="h-full ">
              <div className="text-green-700 font-semibold text-lg text-left  w-40 mt-1">
              Your Cart
              </div>
              <div className="text-green-700 font-semibold text-5xl text-left w-40 mt-1 uppercase">Summary</div>
                <p className="mt-1 tex-lg font-semibold text-gray-700">
                <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div className="h-full">
                <p className="text-gray-600 font-semibold">Total Amount:  <span className="text-gray-600 font-bold ">${totalAmount}</span> </p>
                <button
                className="text-white-100 border-2  font-semibold
                  text-[12px] p-1 p-x-3 uppercase w-full  bg-green-600 w-48 rounded-md
                  hover:bg-green-700
                  hover:text-white transition duration-300 ease-in"
                >
                  Checkout Now
                </button>
              
              </div>
          
            </div>
          
          
          </div>

           
            


          </div>):
        (<div>
          <div className="flex flex-col h-[100vh]  justify-center items-center">
            <h1 className="text-grey-700 font-bold text-3xl p-2 mb-2">Cart Empty</h1>
            <NavLink to ={"/"}>
              <button
              className="text-white-100 border-2 border-white-700  font-semibold
              text-[12px]  uppercase w-full  bg-green-100 p-2
              hover:bg-green-700
              hover:text-white transition duration-300 ease-in"
              >
              
                Shop now
              </button>
            
            </NavLink>
          </div>
          
          
        </div>)
      }
    </div>
  )
}

export default Cart

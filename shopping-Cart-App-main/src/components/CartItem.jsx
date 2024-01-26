import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";
const CartItem = ({item,itemIndex}) => {

  const dispatch = useDispatch();
  
  const removeFromCart = () =>{
       dispatch(remove(item.id));
       toast.success("Item removed");

  }

  return (

    <div>
     <div className="flex  border-b border-gray-700  justify-center items-center  p-5 gap-x-10">
      <div className="h-[180px] w-[180px]">
        <img src ={item.image} className="h-full w-full"/>
      </div>
      <div className="flex flex-col ">
        <h1  className="text-gray-700 font-semibold text-lg text-left  w-80 mt-1">{item.title}</h1>
        <h1 className ="w-80 text-gray-400 font-normal text-[15px]  text-left">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>

        <div className="flex justify-between mt-5">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div onClick={removeFromCart}
          className="text-gray-700 border-2 border-red-100  rounded-full bg-red-300 font-semibold
           p-2 p-x-3 uppercase
          hover:bg-red-500
          hover:text-white transition duration-300 ease-in"
          >
            <MdDelete/>
          </div>
        </div>
      </div>
      
         
     </div>


     
     
    
    </div>
  )
};

export default CartItem;

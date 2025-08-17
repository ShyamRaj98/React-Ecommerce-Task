import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Quantity({updateQty, item}) {
    return (
        <div className='flex flex-row gap-2'>
            <button className='p-3 rounded-lg shadow-xl bg-purple-500 text-white hover:bg-purple-700' onClick={() => updateQty(item.id, item.qty - 1)}><FaMinus size={14} /></button>
            <span className='min-w-[60px] min-h-[30px] border-2 border-purple-500 text-lg font-semibold rounded-lg flex justify-center items-center'>{item.qty}</span>
            <button className='p-3 rounded-lg shadow-xl bg-purple-500 text-white hover:bg-purple-700' onClick={() => updateQty(item.id, item.qty + 1)}><FaPlus size={14} /></button>
        </div>
    )
}

export default Quantity
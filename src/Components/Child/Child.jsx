import React from 'react'

export default function Child({pro,del,inc,dec,idx}) {
  return (
   <div className='w-[100%] flex flex-wrap flex-row'>
       <div className='w-1/2 mx-auto p-5 bg-slate-200 rounded-md shadow-lg relative'>
        <h2>Name: {pro.name}</h2>
        <h2>Price: {pro.price}</h2>
        <h2>Category: {pro.category}</h2>
        <h2>Count: {pro.Count}</h2>
        {pro.onSale==true?<div className='bg-red-500 absolute top-0 right-0 p-3 rounded'>Sale</div>:null}
        <button onClick={function(){del(pro.id)}} className='text-red-600 border-red-600 border-2 rounded-md w-full py-2 mt-3'>Delete</button>
        <button onClick={function(){inc(idx)}} className='text-sky-600 border-sky-600 border-2 rounded-md w-full py-2 mt-3'>+</button>
        <button onClick={function(){dec(idx)}} className='text-yellow-600 border-yellow-600 border-2 rounded-md w-full py-2 mt-3'>-</button>

    </div>
   </div>
  )
}

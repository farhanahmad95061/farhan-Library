import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4'>
    <div className="card bg-base-100 w-80 h-80 mx-4 mt-2 mb-2 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white ">
  <figure>
    <img
      src={item.image}
      alt="book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">Rs {item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 text-white duration-100">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards

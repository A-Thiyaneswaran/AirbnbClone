import React from 'react'


const display = () =>{
    console.log("clicked")
}

function Category(props) {
  return (
    <div className={`category-container min-w-fit py-4 cursor-pointer border-black ${props.isActive && "border-b-[0.15rem]"} hover:border-gray-300 hover:border-b-[0.15rem]`}>
        <div className="category relative min-w-[3.5rem] cursor-pointer">
            <input type="radio" name="category" onChange={display} className="focusing z-10 absolute w-full h-full appearance-none" />
            <div className="category-content text-gray-500 w-full h-full flex items-center justify-center">
                <span className='flex flex-col items-center justify-center gap-1'>
                    <img src={props.imageUrl} alt="" className='w-6 aspect-[24/24]' />
                    <span className={`text-sm md:text-[0.7rem] lg:text-[0.75rem] font-semibold ${props.isActive && "text-black"}`}>{props.name}</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Category

import React, { useState } from 'react'
import Category from './Category/Category'

function Categories() {

  const [checked, setChecked] = useState(false)

  const toggleClick = () =>{
    setChecked(!checked);
  }

  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = (e) =>{
    if(e.target.scrollLeft > 20) setIsScrolled(true)
    else setIsScrolled(false)
  }
  

  return (
    <div className='bg-[#fff] w-full h-[4.5rem] md:h-[6.4rem] lg:h-[5.5rem] flex items-center justify-between sticky top-[4.4rem] md:top-[4.5rem] z-20 px-6 md:px-[2.5rem] lg:px-[5rem] pt-[0.6rem]'>
      
{/* ......................Categories...................... */}
      <div className="w-[62.8rem] h-full categories-container relative flex items-center">

        <div className="categories w-full h-full flex gap-4 md:gap-8 lg:gap-8 overflow-x-scroll no-scrollbar" onScroll={handleScroll}>
          <Category isActive="true" name='Countryside' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Amazing views' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <Category name='Farms' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <Category name='Amazing pools' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='OMG!' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Rooms' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Beachfront' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Amazing views' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <Category name='Farms' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <Category name='Amazing pools' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='OMG!' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Rooms' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Beachfront' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Amazing views' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <Category name='Farms' imageUrl='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'/>
          <Category name='Amazing pools' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='OMG!' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
          <Category name='Rooms' imageUrl='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'/>
        </div>

        {/* Previous Button */}
        <div className={`categories page bg-[#333] h-full w-[2rem] absolute left-0 flex items-center justify-start shadow-[1px_0_10px_13px_#fff] ${!isScrolled && "hidden" }`}>
          <span className='h-full flex items-center justify-center'>
            <i className="h-[1.7rem] w-[1.7rem] text-[0.7rem] fa-solid fa-chevron-left bg-white border-[0.05rem] border-[#a7a7a7] rounded-full grid place-content-center"></i>
          </span>
        </div>

        {/* Next Button */}
        <div className='categories page bg-[#fff] h-full w-[2rem] absolute right-0 flex items-center justify-end shadow-[-3px_0_10px_13px_#fff] '>
          <span className='h-full flex items-center justify-center'>
            <i className="h-[1.7rem] w-[1.7rem] text-[0.7rem] fa-solid fa-chevron-right bg-white border-[0.05rem] border-[#a7a7a7] rounded-full grid place-content-center"></i>
          </span>
        </div>
      </div>

{/*..................... filter button................ */}

      <div className="filter-container hidden md:flex lg:flex h-full items-center justify-end pl-6">
        <div className="filterbtn w-[5.8rem] h-[3rem]">
          <button className="filter w-full h-full rounded-xl border border-[#dcdcdc] text-[0.8rem] flex items-center justify-around px-3">
            <span className=''>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height='1rem'>
                <path d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
              </svg>
            </span>
            <span className='font-bold'>Filters</span>
          </button>
        </div>
      </div>

{/* Display total before taxes - toggle button */}
      <div className="total-toggle-container hidden md:flex lg:flex h-full items-center justify-end pl-4">
        <button className="filterbtn w-[13.8rem] h-[3rem] rounded-xl border border-[#dcdcdc] text-[0.75rem] flex items-center justify-between px-4" onClick={()=>toggleClick()}>
          <span className='font-semibold'>Display total before taxes</span>
          <div className={`toggle-slot w-[2.2rem] h-[1.6rem] rounded-full p-[0.1rem] flex items-center justify-start ${checked ? "justify-end bg-[#222222]": "bg-[#b0b0b0]"}`}>
            <div className="circle h-full aspect-square bg-white rounded-full grid place-content-center">
              {checked && <i className='fa-solid fa-check'></i>}
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Categories

// Farms - https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg
// Beach front - https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg
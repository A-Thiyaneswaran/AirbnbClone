import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer b-0 w-full h-[auto] z-40 bg-[#f7f7f7] mt-[2rem] lg:mt-[3rem]'>
        <div className="flex flex-col gap-2 px-6 md:px-[2.5rem] lg:px-[5.5rem] 2xl:px-[5rem] py-[2.8rem] 2xl:py-[3rem] border-b-2 border-gray-200">
            <span className='text-2xl font-medium mb-3'>Inspiration for future getaways</span>
            <div className="h-[2.5rem] flex items-center mb-[1.5rem] border-b-2">
                <ul className="h-full flex gap-[1.9rem] lg:gap-[1.3rem] overflow-x-scroll text-[0.85rem] lg:text-base whitespace-nowrap">
                    <li className='cursor-pointer border-b-2 border-gray-700'>Popular</li>
                    <li className='cursor-pointer'>Arts & Culture</li>
                    <li className='cursor-pointer'>Outdoors</li>
                    <li className='cursor-pointer'>Mountains</li>
                    <li className='cursor-pointer'>Beach</li>
                    <li className='cursor-pointer'>Unique stays</li>
                    <li className='cursor-pointer'>Categories</li>
                    <li className='cursor-pointer'>Things to do</li>
                </ul>
            </div>

            <div className="grid-items-list grid grid-cols-2 lg:grid-cols-6 gap-4">
                <div className="flex flex-col">
                    <span>Canmore</span>
                    <span>Pet-friendly rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Benalmadena</span>
                    <span>Flat rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Marbella</span>
                    <span>Flat rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Mijas</span>
                    <span>Flat rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Prescott</span>
                    <span>Cabin rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Scottsdale</span>
                    <span>Holiday rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Tucson</span>
                    <span>House rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Jasper</span>
                    <span>Holiday rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Mountain View</span>
                    <span>Holiday rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Devonport</span>
                    <span>Holiday rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Mallacoota</span>
                    <span>Holiday rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Ibiza</span>
                    <span>Holiday rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Anaheim</span>
                    <span>House rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Monterey</span>
                    <span>Bungalow rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Paso Robles</span>
                    <span>Cottage rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Santa Barbara</span>
                    <span>Flat rentals</span>
                </div>
                <div className="flex flex-col">
                    <span>Sonoma</span>
                    <span>Holiday rentals</span>
                </div>
            </div>
        </div>


        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-0 lg:gap-2 px-6 md:px-[2.5rem] lg:px-[5.5rem] 2xl:px-[5rem]">
            <div className="py-[1.4rem] 2xl:py-[3rem] flex flex-col gap-3 lg:gap-2 text-[0.85rem] lg:text-base">
                <span className="font-semibold">Support</span>
                <ul className="flex flex-col gap-3 lg:gap-2">
                    <li>Help Centre</li>
                    <li>AirCover</li>
                    <li>Anti-discrimination</li>
                    <li>Disability support</li>
                    <li>Cancellation options</li>
                    <li>Report neighbourhood concern</li>
                </ul>
            </div>
            <div className="py-[1.4rem] 2xl:py-[3rem] flex flex-col gap-3 lg:gap-2 text-[0.85rem] lg:text-base">
                <span className="font-semibold">Hosting</span>
                <ul className="flex flex-col gap-3 lg:gap-2">
                    <li>Airbnb your home</li>
                    <li>AirCover for Hosts</li>
                    <li>Hosting resources</li>
                    <li>Community forum</li>
                    <li>Hosting resonsibly</li>
                </ul>
            </div>
            <div className="py-[1.4rem] 2xl:py-[3rem] flex flex-col gap-3 lg:gap-2 text-[0.85rem] lg:text-base">
                <span className="font-semibold">Airbnb</span>
                <ul className="flex flex-col gap-3 lg:gap-2">
                    <li>Newsroom</li>
                    <li>New features</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Airbnb.org disaster relief</li>
                </ul>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse xl:justify-between gap-4 mx-6 md:mx-[2.5rem] lg:mx-[5.5rem] 2xl:mx-[5rem] py-[1.1rem] border-t-2 border-gray-200">
            <div className="font-semibold flex items-center gap-4">
                <span className='flex items-center gap-1'>
                    <span className='h-full transition duration-100 hover:bg-[#ebebeb] grid items-center rounded-full'>
                        <svg width="1.4rem" height="1.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <g id="Navigation / Globe"> <path id="Vector" d="M3 12H8M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M8 12H16M8 12C8 16.9706 9.79086 21 12 21M8 12C8 7.02944 9.79086 3 12 3M16 12H21M16 12C16 7.02944 14.2091 3 12 3M16 12C16 16.9706 14.2091 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 16.9706 16.9706 21 12 21" stroke="#000000" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round" /> </g> </g>

                        </svg>
                    </span>
                    <span>English (IN)</span>
                </span>
                <span>&#8377; INR</span>
                <ul className='hidden xl:flex items-center gap-3 ml-[1rem]'>
                    <li className='text-[1.3rem]'><i className='fa-brands fa-square-facebook'></i></li>
                    <li className='text-[1.3rem]'><i className='fa-brands fa-square-twitter'></i></li>
                    <li className='text-[1.3rem]'><i className='fa-brands fa-square-instagram'></i></li>
                </ul>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
                <div className="">
                    <span>&copy; 2023 Airbnb, Inc.</span>
                </div>
                <div className="flex items-center gap-4">
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Site map</span>
                    <span>Company details</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
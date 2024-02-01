import React, { useEffect } from 'react'
import { useState } from 'react'
import Skeleton from '../../Skeleton'

function RowCards() {

  let details = [
    {imageUrl: "https://a0.muscache.com/im/pictures/458e3fa3-3b67-4dc5-87b3-65178557429b.jpg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-994173166305934113/original/ca38db23-df90-4aef-8b86-70f794761327.jpeg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/f24e8a32-fad6-43cf-851a-b5ad8b696b44.jpg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/224efbf0-afec-4a26-b084-771371252a21.jpg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/cddcb5cb-a9e2-43d4-a3de-b1f3e0da0b70.jpg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/airflow/Hosting-775279365592138606/original/36009a96-1857-4139-ada0-b846cd809c2b.jpg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/4e19e09a-58b8-416c-91ae-7bc9fa915f4b.jpg?im_w=720"},
    {imageUrl: "https://a0.muscache.com/im/pictures/miso/Hosting-906874945711491424/original/1822bf2e-ee30-4c68-b570-18d447160837.jpeg?im_w=720"},
  ]

  const [loading, setLoading] = useState(true)
  //const [likebtnColor, setlikebtnColor] = useState("#555");
  const [likedCards, setLikedCards] = useState(Array(details.length).fill("#555"));

  const handleLike = (index) => {
    // Create a copy of likedCards
    const updatedLikedCards = [...likedCards];
    // Toggle the liked state of the clicked card
    if (updatedLikedCards[index] != "#555")
      updatedLikedCards[index]="#555";
    else
    updatedLikedCards[index] = "#ffc0cb";
    // Update the state
    setLikedCards(updatedLikedCards);
  };

    // const changeStyle = () => {
    //     if (likebtnColor !== "#555") setlikebtnColor("#555");
    //     else setlikebtnColor("#ffc0cb");
    // }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  return (
    <div className='w-full pt-4 flex flex-col lg:grid lg:grid-cols-4 gap-8 md:gap-6 lg:gap-6 px-6 md:px-[2.5rem] lg:px-[5.5rem] 2xl:px-[5rem]'>
      {
        details.map((data, index) => (
          loading ? <Skeleton key={index}/> : (
            <div key={index} className="w-full md:w-[20rem] lg:w-[20rem] rounded-t-xl overflow-hidden">
              <a href="#">
                <div className=" w-full h-[19.5rem] lg:h-[19rem] slider rounded-xl overflow-hidden relative">
                  
                  {/* like button div */}
                  <div className="w-[1.4rem] h-[1.4rem] likebtn absolute right-4 top-4 z-10">
                    <span className="like text-xl">
                      <svg width="100%" height="100%" viewBox="0 -3.71 75.17 75.17" xmlns="http://www.w3.org/2000/svg">
                        <path id="Path_1" data-name="Path 1" d="M117.606,280.375s22.263-15.459,31.959-30.318c9.6-14.708.354-31.054-10.533-33.8-14.457-3.65-21.426,10.478-21.426,10.478s-6.968-14.128-21.425-10.478c-10.888,2.748-20.132,19.094-10.534,33.8C95.343,264.916,117.606,280.375,117.606,280.375Z" transform="translate(-80.021 -214.131)"
                         fill = {likedCards[index]} stroke="#fff" strokeLinejoin="round" strokeWidth="5" onClick={() => handleLike(index)}/>
                      </svg>
                    </span>
                  </div>

                  {/* Image slider */}
                  <div className="image-slider absolute overflow-x-scroll no-scrollbar w-full h-full flex">
                    <img className="w-full h-full object-cover " src={data.imageUrl} alt="" />
                    <img className="w-full h-full object-cover " src={data.imageUrl} alt="" />
                    <img className="w-full h-full object-cover " src={data.imageUrl} alt="" />
                  </div>
                </div>

                {/* Description */}
                <div className="pt-2 text-left">
                  <div className="flex justify-between">
                    <h5 className="text-md font-medium text-gray-900 dark:text-black">Tamil Nadu, India</h5>
                    <h5 className="text-md font-light text-gray-900 dark:text-black flex items-center justify-center gap-1"><i className='fa-solid fa-star text-[0.7rem]'></i>4.93</h5>
                  </div>
                  <p className="font-normal text-gray-700 dark:text-gray-500">200 KMs</p>
                  <p className="font-normal text-gray-700 dark:text-gray-500">6-10 Mar</p>
                  <p className="font-normal text-gray-900 dark:text-black mt-1">&#8377;<span className='text-md font-medium'>15000</span> night</p>
                </div>

              </a>
            </div>
          )
        ))
      }
      <div className="w-full mt-5 lg:mt-10 col-span-4 text-center">
        <div className='w-full flex items-center justify-center'>
          <span className='text-lg font-semibold'>Continue exploring OMG! homes</span>
        </div>
        <div className='mt-3'>
          <button className='w-[8.2rem] lg:[8rem] h-[3rem] bg-slate-900 text-slate-200 rounded-lg font-bold'>Show more</button>
        </div>
      </div>
    </div>
  )
}

export default RowCards
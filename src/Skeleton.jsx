import React from 'react'

function Skeleton() {
  return (
    <div className="w-full md:w-[20rem] lg:w-[20rem] overflow-hidden">
      <a href="#">
        <div className="skeleton-loading skeleton-image w-full h-[20rem] lg:h-[20rem] rounded-xl">

        </div>
        <div className="pt-2 text-left flex flex-col gap-[0.1rem]">
          <div className="flex justify-between">
            <h5 className="skeleton-loading skeleton-text w-[11rem]"></h5>
            <h5 className="skeleton-loading skeleton-text w-[3rem]"></h5>
          </div>
          <p className="skeleton-loading skeleton-text w-[8rem]"></p>
          <p className="skeleton-loading skeleton-text w-[5.5rem]"></p>
          <p className="skeleton-loading skeleton-text w-[5rem] mt-1"></p>
        </div>
      </a>
    </div>
  )
}

export default Skeleton
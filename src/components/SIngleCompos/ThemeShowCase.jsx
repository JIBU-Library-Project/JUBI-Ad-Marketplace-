import React from 'react'
import SearchBar from '../SearchBar'
import Phone1 from '../../assets/Phone1.jpg'




const ThemeShowCase = () => {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-20 py-10 items-center lg:-mt-10 sm:mt-40 min-h-screen">
      {/* Text + Search */}
      <div>
        <h2 className="text-3xl sm:text-2xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Power Your Brand with Jubi Marketplace
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-6">
          Discover thousands of easy to customize themes, templates & CMS products, 
          made by world-class developers.
        </p>
        <SearchBar className="bg-[#0a0606] p-2 w-full max-w-lg" />
      </div>

      {/* Image */}
      <div className=" flex justify-center">
        {/* <img src={Phone1} alt=""  className=' sm:w-auto sm:h-auto'/> */}
      </div>
    </div>
  )
}

export default ThemeShowCase
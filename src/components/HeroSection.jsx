import React from 'react'

function HeroSection(){
    return(
        <div className="flex items-center justify-center flex-col py-20">
            <div className="text-center">
               <h1 className="text-xl md:text-4xl mb-1 md:mb-3
                text-pink-600 font-semibold dark:text-pink-500">Hi, I'm Eric Lombo</h1>
               <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">i'm a full-stack web developer based in Nairobi,Kenya.<span>I have developed many types of web applications from well known dj applications to Ecommerce booking platforms
                 i'm passionate about cutting-edge, pixel-perfect,beautiful interfeces.</span>
               </p>
               <a href="#" className='inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-pink-700 md:text-md'>My Works</a>
            </div>
        </div>
    )
}
export default HeroSection
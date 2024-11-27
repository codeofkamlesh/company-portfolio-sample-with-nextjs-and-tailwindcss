import React from 'react'
import Image from "next/image"; 
const Hero2 = () => {
  return (
    <div className="bg-black flex flex-co lg:flex-row justify-between items-center">
      <div className="py-12 px-8 md:py-20 md:px-16 lg:py-28 lg:px-32">
        <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">Use as</h1>
        <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">Extension</h1>
        <p className="text-white mt-4 md:mt-5">
       Use the web clipper extension, available on Chrome and Firefox, to save Web 
       Pages or tasks screenshoots as notes.
        </p>
        <button className="bg-[#d72307] flex items-center justify-center py-2 px-4 rounded-lg mt-6 shadow-black">Let&apos;s Go</button>
      </div>

      <div className="py-8 px-8 md:py-16 md:px-20 lg:py-20 lg:px-28">
      <Image
          src="/img2.png"  
          alt="Project Management"
          width={800}  
          height={600} 
          className="w-[800px] md:w-[250px] lg:w-[700px]"  
        />
      </div>
    </div>
  )
}

export default Hero2
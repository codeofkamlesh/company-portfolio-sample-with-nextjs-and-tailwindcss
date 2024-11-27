import React from "react";
import Image from "next/image"; 

const Hero1: React.FC = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row justify-between">
      <div className="py-12 px-8 md:py-20 md:px-16 lg:py-28 lg:px-32">
        <h1 className="text-green-400 font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">
          Get More Done with
        </h1>
        <h1 className="text-green-400 font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">
          Whitepace
        </h1>
        <p className="text-white mt-4 md:mt-5">
          Project Management software that enables your teams to collaborate,
          plan, analyze, and manage everyday tasks.
        </p>
        <button className="bg-[#d72307] flex items-center justify-center py-2 px-4 rounded-lg mt-6">
          Try Writepace Free 
        </button>
      </div>
      <div className="py-8 px-8 md:py-16 md:px-20 lg:py-20 lg:px-28">
        <Image
          src="/img1.png"  
          alt="Task Management"
          width={800}  
          height={600}  
          className="w-[800px] md:w-[250px] lg:w-[400px]"  
        />
      </div>
    </div>
  );
};

export default Hero1;

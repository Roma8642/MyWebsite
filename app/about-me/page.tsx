import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-600 to-gray-950 flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 relative overflow-hidden py-12 md:py-24'>
            {/* Text Content */}
            <div className='md:flex-1 max-w-3xl z-10 md:pr-12 mb-12 md:mb-0'>
                <div className='space-y-4 md:space-y-6 md:translate-y-[-5%]'>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold text-center md:text-left">
                        My Skills<span className="text-blue-600">.</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-[500px] mx-auto md:mx-0 text-center md:text-left">
                        In addition to my technical expertise, I possess strong leadership and organizational skills.
                        I am adept at applying a wide range of technologies and tailor my approach to each project,
                        ensuring the best results and seamless collaboration across teams.
                    </p>
                </div>
            </div>

            {/* Service Slider Container */}
            <div className='w-full md:w-[55%] lg:w-[50%] xl:w-[45%] h-[500px] relative z-10 md:translate-y-[-3%]'>
                <ServiceSlider />
            </div>

            {/* Decorative Elements */}
            <div className='hidden md:block absolute -left-36 bottom-20 rotate-12 animate-pulse'>
                <Image
                    src="/assets/bulb.png"
                    alt='bulb'
                    width={260}
                    height={260}
                    className='opacity-50 hover:opacity-75 transition-opacity duration-300'
                />
            </div>
        </div>
    )
}

export default Page
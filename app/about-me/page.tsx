import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='flex items-center bg-gradient-to-b from-gray-600 to-gray-950 h-screen overflow-hidden'>
        <div className='pl-20 md:pl-60 flex flex-col gap-3 pb-60 md:pb-0'>
        <h1 className="text-[50px] text-white font-semibold">
          My Skills<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-[350px] text-[16px] text-gray-200 md:text-gray-400">
            In addition to my technical expertise, I possess strong leadership and organizational skills. I am adept at applying a wide range of technologies and tailor my approach to each project, ensuring the best results and seamless collaboration across teams.
        </p>
        </div>
        <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
      <Image
      src="/assets/bulb.png"
      alt='bulb'
      width={260}
      height={260}
      className='w-full h-full hidden md:block'
      />
        </div>
        <ServiceSlider />
    </div>
  )
}

export default Page
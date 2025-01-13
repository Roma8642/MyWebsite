import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex items-center h-screen relative bg-gradient-to-b from-gray-800 to-black">
          <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
              <Particle/>
          </div>

          <div className="flex flex-col gap-3 z-[10] pl-5 pt-20 sm:pl-40">
              <h1 className="text-[50px] text-green-500 max-w-[500px]">
                  Full-Stack Developer
                  <p>Team Lead</p>
              </h1>
              <p className="text-[16px] text-gray-200 md:text-gray-400 mb-10 md:pb-2 max-w-[400px]">
                  With over 2 years of experience in building cutting-edge solutions, I am always at the forefront of technology. I am passionate about turning your ideas into reality while helping automate and optimize your business processes in the most effective way possible.
              </p>
          </div>
      </main>
  );
}

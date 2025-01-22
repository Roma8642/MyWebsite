import Particle from "@/components/Particle";

export default function Home() {
    return (
        <main className="flex items-center min-h-screen relative bg-gradient-to-b from-gray-800 to-black">
            {/* Particle Background */}
            <div className="absolute right-0 top-0 h-full w-full md:w-[70%] lg:w-[60%] z-[2]">
                <Particle />
            </div>

            {/* Content Container */}
            <div className="relative z-[10] w-full pl-5 pt-20 sm:pl-10 md:pl-20 lg:pl-32 xl:pl-40 2xl:pl-52">
                <div className="flex flex-col gap-3 max-w-[90%] md:max-w-[80%]">
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl text-green-500 leading-tight">
                        Full-Stack Developer
                        <span className="block mt-2 text-2xl xs:text-3xl sm:text-4xl font-light text-gray-300">
              Team Lead
            </span>
                    </h1>

                    <p className="text-base xs:text-[17px] sm:text-lg text-gray-300 md:text-gray-400 pr-4
            max-w-[500px] sm:max-w-[600px] leading-relaxed">
                        With over 2 years of experience in building cutting-edge solutions, I am always at the forefront of technology. I am passionate about turning your ideas into reality while helping automate and optimize your business processes in the most effective way possible.
                    </p>
                </div>
            </div>
        </main>
    );
}
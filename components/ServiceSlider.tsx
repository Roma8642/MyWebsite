"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { ServiceData } from "@/constants";
import { useMediaQuery } from "react-responsive";

const ServiceSlider = () => {
    const isLaptop = useMediaQuery({ minWidth: 1024, maxWidth: 1440 });

    return (
        <Swiper
            breakpoints={{
                320: { slidesPerView: 1.2, spaceBetween: 12 },
                480: { slidesPerView: 1.5, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2.5, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 28 },
                1280: { slidesPerView: 3.5, spaceBetween: 32 },
                1440: { slidesPerView: 4, spaceBetween: 32 }
            }}
            freeMode={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="!pb-12"
        >
            {ServiceData.map((item) => (
                <SwiperSlide key={item.title}>
                    <div className={`group relative flex flex-col gap-3 overflow-hidden rounded-xl bg-gray-900 px-4 py-4 shadow-lg transition-all duration-300 hover:shadow-xl 
            ${isLaptop ? 'h-[360px] max-w-[300px]' : 'h-[320px] max-w-[280px]'}`}>
                        <div className="absolute inset-0 bg-gray-800 opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
                        <div className="relative z-10 flex flex-1 flex-col gap-3">
                            <item.icon className={`${isLaptop ? 'h-9 w-9' : 'h-8 w-8'} text-blue-600 transition-colors duration-300 group-hover:text-blue-400`} />
                            <h2 className={`${isLaptop ? 'text-2xl' : 'text-xl'} font-semibold`}>
                                {item.title}
                            </h2>
                            <p className={`${isLaptop ? 'text-sm' : 'text-xs'} leading-relaxed text-gray-300`}>
                                {item.content}
                            </p>
                        </div>
                        <div className="absolute inset-0 rounded-xl border border-gray-800/50 transition-all duration-300 group-hover:border-gray-800/70" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ServiceSlider;
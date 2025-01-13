"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { ProImages, ProImages2, ServiceData } from "@/constants";
import Image from "next/image";

const ServiceSlider = () => {
    return (
        <div className="absolute bottom-0 right-20 md:bottom-40 md:right-30 w-[65%] md:w-[60%]">
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 15,

                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 7000, // 7 секунд
                    disableOnInteraction: false, // Позволяет продолжить автопрокрутку при взаимодействии с слайдером
                }}
                modules={[FreeMode, Pagination, Autoplay]} // Добавляем Autoplay
            >
                {ServiceData.map((item) => (
                    <SwiperSlide key={item.title}>
                        <div className="rounded-md cursor-pointer flex flex-col gap-6 mb-10 group relative text-white shadow-lg px-6 py-8 h-[300px] w-[250px] overflow-hidden bg-gray-900">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-50"

                            />
                            <div className="absolute inset-0 bg-gray-800 opacity-60 group-hover:opacity-70" />
                            <div className="relative flex flex-col gap-3">
                                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                                <p className="lg:text-[18px]">{item.content}</p>
                            </div>
                            <div className="absolute inset-0 border border-gray-800 rounded-md shadow-2xl group-hover:shadow-lg" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ServiceSlider;

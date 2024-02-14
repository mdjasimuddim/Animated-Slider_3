import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {RxArrowRight} from 'react-icons/rx';
import { ServiceData1, ServiceData2 } from './data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const ProjectSlider = () => {
  return (
    <div className='h-screen flex flex-col md:flex-row gap-5 items-center justify-center bg-[#331854]'>
        <div className='w-[70%] md:w-[40%]'>
            <Swiper
                breakpoints={
                    {
                        340:{
                            slidesPerView:1,
                            spaceBetween:15,
                        },
                        700:{
                            slidesPerView:1,
                            spaceBetween:15,  
                        }
                    }
                }
                freeMode = {true}
                pagination = {
                    {
                        clickable:true,
                    }
                }
                modules={[FreeMode, Pagination]}
            >

                <SwiperSlide className='mb-14'>
                    <div className='grid grid-cols-2 gap-4 px-10'>
                    {
                        ServiceData1.map((image) => (
                        <div className="relative group" key={image.src}>
                        <img
                            src={image.backgroundImage}
                            alt="purple image"
                            className="rounded-md h-[240px] w-[240px] object-cover"
                        />
                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r max-w-[240px] rounded-md from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70" />
                        <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                            View Project
                            <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                        </div>
                        </div>
                     ))
                    }
                    </div>
                </SwiperSlide>
                <SwiperSlide className='mb-14'>
                    <div className='grid grid-cols-2 gap-4 px-10'>
                    {
                        ServiceData2.map((image) => (
                        <div className="relative group" key={image.src}>
                        <img
                            src={image.backgroundImage}
                            alt="purple image"
                            className="rounded-md h-[240px] w-[240px] object-cover"
                        />
                        <div className="cursor-pointer absolute inset-0 bg-gradient-to-r max-w-[240px] rounded-md from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70" />
                        <div className="absolute text-white inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all">
                            View Project
                            <RxArrowRight className="ml-2 w-[24px] h-[24px]" />
                        </div>
                        </div>
                     ))
                    }
                    </div>
                </SwiperSlide>

            </Swiper>

        </div>
    </div>
  )
}

export default ProjectSlider
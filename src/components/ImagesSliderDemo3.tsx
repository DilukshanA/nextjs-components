"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";

export function ImagesSliderDemo3() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
            <div className='flex flex-col lg:flex-row h-full  text-white w-full mt-10 lg:mt-20 px-3 sm:px-10 lg:px-20 xl:px-40 lg:gap-20'>
                {/* left content - image slider */}
                <div className='flex flex-col items-center justify-center lg:w-1/2 '>
                    <h1 className="block text-xl lg:text-2xl lg:hidden font-semibold mb-6">Lorem Ipsum</h1>
                    <ImagesSlider className="w-full aspect-square sm:w-96 lg:w-full" images={images} overlay={false} showArrows={true}>
                        <motion.div
                            initial={{
                            opacity: 0,
                            y: -80,
                            }}
                            animate={{
                            opacity: 1,
                            y: 0,
                            }}
                            transition={{
                            duration: 0.6,
                            }}
                            className="z-50 flex flex-col justify-center items-center"
                        >
                        </motion.div>
                    </ImagesSlider>
                </div>
                {/* right content */}
                <div className='flex flex-col lg:justify-center text-left gap-y-4 lg:w-1/2 mt-6 lg:mt-0'>
                <h1 className="hidden lg:block text-xl lg:text-2xl font-semibold mb-6">Lorem Ipsum</h1>
                    <p className='text-sm text-justify'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
  );
}

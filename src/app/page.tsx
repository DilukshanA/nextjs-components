"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    router.push(path);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          {/* <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent" /> */}
          <div className="flex space-x-2">
            <span className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:0s]" />
            <span className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:0.1s]" />
            <span className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:0.2s]" />
            <span className="h-3 w-3 rounded-full bg-white animate-bounce [animation-delay:0.3s]" />
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-y-6">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => handleNavigation(`/images-slider-1`)}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Image Slider - 1
        </span>
      </button>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => handleNavigation(`/images-slider-2`)}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Image Slider - 2
        </span>
      </button>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => handleNavigation(`/images-slider-3`)}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Image Slider - 3
        </span>
      </button>
      </div>
    </div>
  );
}

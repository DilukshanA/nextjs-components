"use client";
import { ImagesSliderDemo2 } from "@/components/ImagesSliderDemo2";
import { ImagesSliderDemo3 } from "@/components/ImagesSliderDemo3";
import { useRouter } from 'next/navigation';

export default function Home() {

  const router = useRouter();

  return (
    <div>
      <div className="my-10">
        <h1>Images Slider 3</h1>
      </div>
      <ImagesSliderDemo3/>

      <div className="flex justify-center items-center">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => router.push('/images-slider-1')}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Image Slider - 1
        </span>
      </button>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={() => router.push('/images-slider-2')}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Image Slider - 2
        </span>
      </button>
      </div>
    </div>
  );
}

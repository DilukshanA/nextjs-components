import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { ImagesSliderDemo2 } from "@/components/ImagesSliderDemo2";
import { ImagesSliderDemo3 } from "@/components/ImagesSliderDemo3";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      Next js components
      <ImagesSliderDemo/>
      <div className="my-10">
        <h1>Images Slider 2</h1>
      </div>
      <ImagesSliderDemo2/>
      <div className="my-10">
        <h1>Images Slider 3</h1>
      </div>
      <ImagesSliderDemo3/>
    </div>
  );
}

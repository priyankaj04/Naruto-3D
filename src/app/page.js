import Image from "next/image";
import bg from "../../public/background/bg1.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Naruto = dynamic(() => import("@/components/models/Naruto"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-96"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Naruto />
        </RenderModel>
      </div>
    </main>
  );
}

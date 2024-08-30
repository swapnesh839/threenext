
import Background from "@/components/globalbackground/Background";
import Herosection from "@/components/Home/Herosection";
import Technologies from "@/components/Home/Technologies/Technologies";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Background/>
      <Herosection/>
      <Technologies/>
    </>
  );
}

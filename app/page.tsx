import Background from "@/components/globalbackground/Background";
import Herosection from "@/components/Home/Herosection";
import Technologies from "@/components/Home/Technologies/Technologies";
import Notfound from "./not-found";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Background/>
      <Herosection/>
      <Technologies/>
      <Footer/>
    </>
  );
}

import Image from "next/image";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import CameraLaunch from "./component/CameraLaunch";
import VisionCameras from "./component/VisionCameras";
import SignatureCollection from "./component/SignatureCollection";
import Testimonial from "./component/Testimonial";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Banner />
        <CameraLaunch />
        <VisionCameras />
        <SignatureCollection />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

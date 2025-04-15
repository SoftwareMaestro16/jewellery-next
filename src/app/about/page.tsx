import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <div className="w-[88%] sm:w-[74%] md:w-[73%] lg:w-[65%] mx-auto mt-22 sm:mt-27 flex flex-col justify-center">
        <div className="text-left flex flex-col items-start gap-4">
          <h1 className="text-3xl sm:text-3.5xl font-extrabold">About Us</h1>
          <h2 className="text-2xl sm:text-2.5xl font-medium">
            Vera is a premium jewelry boutique where every piece tells its own story. We don’t just create jewelry — we craft works of art that become part of your most cherished moments.
          </h2>
          <h2 className="text-2xl sm:text-2.5xl font-medium">
            Our story began with a simple idea — to create jewelry that could be passed down through generations. Today, we continue this tradition, blending classic jewelry-making techniques with modern design.
          </h2>
        </div>

        <Image
          src="/about-img.jpg"
          alt="about"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full mb-10 rounded-xl object-cover mt-5 sm:mt-7
          max-h-[180px] sm:max-h-[230px] md:max-h-[270px] lg:max-h-[370px]"
        />

        <div className="text-left flex flex-col items-start gap-4">
          <h2 className="text-2xl sm:text-2.5xl font-medium">
            Vera jewelry adds special meaning to every moment, turning it into a memory that lasts a lifetime.
          </h2>
          <h2 className="text-2xl sm:text-2.5xl font-medium">
            We take pride in creating pieces that become a part of your stories — of love, success, and life’s unforgettable milestones.
          </h2>
        </div>
      </div>
      <Footer />
    </>
  );
}
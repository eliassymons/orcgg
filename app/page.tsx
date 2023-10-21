import Image from "next/image";
import Header from "./pages/header/page";
import Hero from "./pages/hero/page";
import { Montserrat } from "next/font/google";
import NextSteps from "./pages/next-steps/page";
import About from "./pages/about-us/page";
import Contact from "./pages/contact/page";
const mont = Montserrat({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className={mont.className}>
      <Header />
      <Hero />
      <NextSteps />
      <About />
      <Contact />
    </div>
  );
}

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
      <div className="main-bg">
        <Header />
        <Hero /> <img className="church-bg" src="church-bg.jpg" />
      </div>
      <NextSteps />

      <About />
      <Contact />
    </div>
  );
}

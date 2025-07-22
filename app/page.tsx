import Image from "next/image";
import Link from "next/link";
import Info from "./Info/page";
import About from "./About/page";
import Intro from "./Intro";
import Contact from "./Contact/page";
import ReachMe from "./ReachMe/page";

export default function Home() {
  return (
    <div >
    <div className="relative h-full w-fit bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      <nav>
        
      </nav>
      <Info/>
      <About/>
      <Intro/>
      
      <ReachMe/>
      
    </div>
  );
}

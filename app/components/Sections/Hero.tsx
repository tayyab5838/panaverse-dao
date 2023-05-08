import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import HeroPoster from "../assets/images/hero-poster.png"
import { Button } from "../shared/Button"

const Hero = () => {
  return (
    <section>
      <Wrapper>
      <div className="flex flex-col md:flex-row items-center">
        {/* left side */}
        <div className="flex-1">
          <h4 className="text-teal-800 font-semibold text-xs">Presidential initiative for Artificial Intelligence and Computing (PIAC)</h4>
          <h1 className="text-2xl md:text-3xl font-bold">Certifiend Web 3.0 and Metaverse Developer</h1>
          <p className="mt-4 text-lg text-slate-600">
            A one and Quarter Years Penaverse DAO Earn as you Learn Program getting ready for 
            the Next Generation of the Internet
          </p>
          <p className="mt-5 text-lg text-slate-600">
           Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud,
           Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
          </p>
          <div className="mt-5">
          <Button text={"Enroll Now"}/>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <Image src={HeroPoster} alt="Hero Poster"/>
        </div>
      </div>
    </Wrapper>
    </section>
  )
}

export default Hero
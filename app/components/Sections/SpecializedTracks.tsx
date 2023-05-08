"use client"
import QuarterBox from "../shared/QuarterBox"
import Wrapper from "../shared/Wrapper"
import metaImg from "../../../public/metaverse.webp"
import aiImg from "../../../public/ai.webp"
import cloudImg from "../../../public/cloud.webp"
import genomImg from "../../../public/genomics.webp"
import networkImg from "../../../public/network.webp"
import ambientImg from "../../../public/ambient.webp"
import Image from "next/image"
import { useState } from "react"

export const programData = [
  {
    slug:"wmd",
    header:"Web 3.0 (Blockchain) and Metaverse Specialization",
    description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: metaImg,
    quarters:[
      {
        header:"Quarter IV",
        description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number:4
      },
      {
        header:"Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number:5
      },
    ]
  },
  {
    slug:"ai",
    header:"Artificial Intelligence (AI) and Deep Learning Specialization",
    description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image:aiImg,
    quarters:[
      {
        header:"Quarter IV",
        description:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number:4
      },
      {
        header:"Quarter V",
        description:"AI-361: Deep Learning and MLOps",
        number:5
      },
    ]
  },
  {
    slug:"cnc",
    header:"Cloud-Native Computing Specialization",
    description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cloudImg,
    quarters:[
      {
        header:"Quarter IV",
        description:"CN-351: Certified Kubernetes Application Developer (CKAD)",
        number:4
      },
      {
        header:"Quarter V",
        description:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number:5
      },
    ]
  },
  { 
    slug:"iot",
    header:"Ambient Computing and IoT Specialization",
    description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image:ambientImg,
    quarters:[
      {
        header:"Quarter IV",
        description:"AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number:4
      },
      {
        header:"Quarter V",
        description:"AC-361: Embedded Programming using C and Rust",
        number:5
      },
    ]
  },
  {
    slug:"gbs",
    header:"Genomics and Bioinformatics Specialization",
    description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image:genomImg,
    quarters:[
      {
        header:"Quarter IV",
        description:"Bio-351: Python for Biologists",
        number:4
      },
      {
        header:"Quarter V",
        description:"Bio-361: Bioinformatics with Python",
        number:5
      },
    ]
  },
  {
    slug:"npa",
    header:"Network Programmability and Automation Specialization",
    description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image:networkImg,
    quarters:[
      {
        header:"Quarter IV",
        description:"NPA-351: CCNA 200-301 Certification",
        number:4
      },
      {
        header:"Quarter V",
        description:"NPA-361: Network Programmability and Automation",
        number:5
      },
    ]
  },
]


const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("ai");
  const itemdata = programData.find((item)=> item.slug === selectedItem);
  console.log(selectedItem);
  console.log(itemdata);
  return (
    <section>
      <Wrapper>
        {/* Header */}
      <div>
        <h2 className="text-xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
        <p className="max-w-screen-sm mt-2 text-lg text-slate-600">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
      </div>

    <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-8 ">
        {/* Left Side */}
        <div className="sticky top-28 border self-start basis-8/12 rounded-xl shodow-xl px-6 py-6 shadow-cyan-500/50">

        <h4 className="text-teal-800 text-lg">Specialized Program</h4>
        <h3 className="text-xl font-semibold">{itemdata?.header}</h3>
        <p className="max-w-screen-sm mt-2 text-lg text-slate-600">{itemdata?.description}</p>
        <button className="text-teal-800 underline text-semibold text-xl flex gap-x-1 items-end">Learn More
        <svg className="mb-1.5" width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
         </svg>
        </button>

        <div className="mt-6 flex flex-col md:flex-row">
          
          {
            itemdata?.quarters.map((item)=>(
              <QuarterBox 
              key={item.number}
              header={item.header} 
              description={item.description} 
              number={item.number}
              haveBorder={false}/>
            ))
          }
        </div>
      </div>


      {/* Right Side */}
      <div className="px-2 space-y-4 py- basis-4/12 ">
      {
      programData.map((item,i)=>(
        <div onClick={()=> setSelectedItem(item.slug)} key={item.slug} className="flex space-x-2 items-center cursor-pointer border-bottom border-gray-700">
            <div className="flex-shrink-0 h-16 w-24">  
               <Image src={item.image} alt={item.header} className={"object-cover h-16 w-48 rounded"}/>
            </div>
          <div>
              <h4 className="text-teal-700 font-base">Specialized Program</h4>
              <h3 className="text-sm font-medium">{item.header}</h3>
          </div>
        </div>    
          ))
    }
          
      </div>
    </div>
      </Wrapper>
    </section>
  )
}

export default SpecializedTracks
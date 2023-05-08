import { Button } from "../shared/Button"
import QuarterBox from "../shared/QuarterBox"
import Wrapper from "../shared/Wrapper"

export const CoreTracks = () => {
    const header = "Core Courses \n (Common in All Specializaion)"
    const CoreTrackData = [
        {
            quarter:"Quarter I",
            discription:"Every participent of the program will start by completing the follwing three core courses"
        },
        {
            quarter:"Quarter II ",
            discription:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
        },
        {
            quarter:"Quarter III",
            discription:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
        }
    ]
  return (
    <section className="mt-16 lg:mt-28">
        <Wrapper>
            {/* content */}
            <div className="max-w-screen-sm">
                <h4 className="text-teal-800 font-semibold text-xs">PROGRAM OF STUDIES</h4>
                <h2 className="text-lg font-bold whitespace-pre-line">{header}</h2>
                <p className="mt-2 text-lg text-slate-600">Every participent of the program will start by completing the follwing three core courses</p>
                <div className="mt-3">
                <Button text={"Learn More"}/>
                </div>
            </div>

            {/* Boxes */}
            <div className="my-20 flex gap-x-4 gap-y-5 md:flex-row flex-col">
            {
            CoreTrackData.map((item,i)=>{
                return(
                    <QuarterBox header={item.quarter} description={item.discription} number={i + 1}/>
                )
            })
        }
            </div>
        </Wrapper>
    </section>
  )
}

export default CoreTracks
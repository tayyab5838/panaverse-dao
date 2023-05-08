import { FC } from "react"

interface IProps{
    header: string,
    description: string,
    number: number,
    haveBorder?: boolean // ? is for making it optional 
}

const QuarterBox:FC<IProps> = ({header,description,number,haveBorder=true}) => {
  return (
    <div className={`rounded-md flex-1 px-4 py-5 relative justify-center ${haveBorder && "border"}`}>
    <h4 className="font-bold text-lg">{header}</h4>
    <p className="mt-2 text-slate-600 z-0">{description}</p>
    <div className="text-gray-200 absolute top-0 right-10 -z-10 font-bold text-9xl">{number}</div>
</div>
  )
}

export default QuarterBox
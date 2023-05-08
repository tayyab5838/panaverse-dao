import { FC } from "react"

export const Button:FC<{text:string}> = ({text}) => {
  return (
    <button className="bg-teal-800 rounded-full px-7 py-2 text-white font-semibold 
    hover:shadow-lg hover:scale-105">{text}</button>
  )
}

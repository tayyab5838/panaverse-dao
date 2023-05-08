import { FC } from "react"

const wrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="max-w-screen-xl mx-auto px-6">
        {children}
    </div>
  )
}

export default wrapper
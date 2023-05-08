import Image from "next/image"
import Link from "next/link"
import Wrapper from "../shared/Wrapper"
import panaverse from "../../../public/panaverse-logo.svg"


function Header() {
  return (
    <header className="sticky top-0 bg-white">
    <Wrapper>
    <div className=" flex justify-between items-center py-5">
        {/* header log */}
        <div>
       <Image src={panaverse} alt="Header Logo"/>
        </div>

        <ul className="flex space-x-8 text-sm font-semibold">
            <li>
                <Link href={"/"}>
                 Home
                </Link>
            </li>
            <li>
                <Link href={"/courses"}>
                Courses
                </Link>
            </li>
            {/* <li>
                <Link href={"/courses"}>
                Courses
                </Link>
            </li> */}
        </ul>
    </div>
    </Wrapper>
    </header>
  )
}

export default Header
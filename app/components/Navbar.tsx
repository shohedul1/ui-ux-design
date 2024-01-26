import Image from "next/image";
import Logo from "@/public/assets/Logo.svg"
import User from "@/public/assets/User.svg";
import Menu from "@/public/assets/Menu.svg";



const navLink = [
    {name: 'Features'},
    {name: 'Pricing'},
    {name: 'Enterprise'},
    {name: 'Careers'}
]



export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
        <div className="flex items-center">
            <Image src={Logo} alt="logo"/>
            <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                {navLink.map((item,index)=>(
                    <p key={index} className="text-[#36485C] font-medium">{item.name}</p>
                ))}
            </div>
        </div>
        <div className="flex gap-5">
            <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">Open an Account</p>
            <div className="flex items-center gap-x-2">
                <Image src={User} alt="User Profile"/>
            <span className="hidden font-medium text-[#36485C] lg:block">Sign in</span>
            </div>
             <Image src={Menu} alt="Menu" className="lg:hidden"/>
        </div>

    </nav>
  )
}

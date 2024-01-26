import Image from 'next/image';
import Logo from '@/public/assets/Logo.svg';
import Facebook from '@/public/assets/Facebook.svg';
import Twitter from '@/public/assets/X.svg';
import Feed from '@/public/assets/Feed.svg';


export default function Footer() {
  return (
    <div className='pt-[80px] pb-[40px]'>
        <div className='flex items-center justify-center gap-x-[12px]'>
            <Image src={Logo} alt='logo'/>
            <p className='font-bold text-[#36485C] text-[17px]'>Shohidul Pramanik</p> 
        </div>
        <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 ms:pt-5'> 
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprice</li>
        <li>Careers</li>
        </ul>
        <p className='pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5'>@ Coppyright 2024, Your site. All rights reserved.</p>
        <div className='flex items-center justify-center gap-x-[56px] mt-[40px]'>
            <Image src={Facebook} alt='facebook'/>
            <Image src={Twitter} alt='twitter'/>
            <Image src={Feed} alt='Feed'/>
        </div>
        
    </div>
  )
}

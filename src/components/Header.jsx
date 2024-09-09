import React from 'react'
import { CiLocationOn , CiMail } from "react-icons/ci";
import { GrInstagram,GrTwitter,GrGooglePlus  } from "react-icons/gr";
import { FaFacebookF  } from "react-icons/fa";

function Header() {
  return (
    <div className='hidden lg:flex justify-between px-28 items-center bg-black text-white font-semibold min-h-[50px]'>
        <ul className='flex space-x-4'>
            <li className='flex space-x-2'>
                <CiLocationOn className='text-white text-2xl'/>
                
                    <h4>465 NT Road. North West, England</h4>
                
            </li>
            <li className='flex space-x-2'> 
                <div><CiMail className='text-white text-2xl'/></div>
                <div>
                    <p><a href="mailto:needhelpbondor@gmail.com">needhelpbondor@gmail.com</a>
                    </p>
                </div>
            </li>
        </ul>
        <div className='flex justify-end '>
                <div className='flex font-medium space-x-4'>
                    <h4 className='text-lg'>Follow us:</h4>
                    <div className='flex gap-6 items-center'>
                        <a href="#" className='text-white text-xl'><FaFacebookF  /></a>
                        <a href="#" className='text-white text-xl'><GrInstagram/></a>
                        <a href="#" className='text-white text-xl'><GrTwitter /></a>
                        <a href="#" className='text-white text-xl'>< GrGooglePlus /></a>
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header






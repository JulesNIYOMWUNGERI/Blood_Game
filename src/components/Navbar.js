import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logos/Logo .png'
import {AiOutlineMenu,AiOutlineTwitter} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
import whitePaper from '../assets/logos/Whitepaper.png'
import vector from '../assets/logos/Vector.png'


const Navbar = () => {

  const [show, setShow] = useState(false)

  const handleHide = () => {
    setShow(false);
  }

    return (
      <div className='w-full h-auto flex justify-center  font-sans absolute top-0 z-[1000000000]'>
        <div className='bg-[#000000cb] w-full h-[50px] flex flex-row justify-between items-center px-6 py-7'>
          <div className='text-white cursor-pointer w-[100px]'>
              <Link to='/'><img className='bg-black' src={Logo} alt='/'/></Link>
          </div>
          <div className='text-white lg:text-[16px] md:text-[16px] sm:text-[10px] text-[10px] hidden sm:block'>
              <ul className='flex flex-row gap-6'>
                  <a href='/#home'><li className='cursor-pointer hover:text-red-500 hover:ease-in ease-out duration-[0.40s]'>Home</li></a>
                  <a href='/#about'><li className='cursor-pointer hover:text-red-500 hover:ease-in ease-out duration-[0.40s]'>About</li></a>
                  <a href='/#token'><li className='cursor-pointer hover:text-red-500 hover:ease-in ease-out duration-[0.40s]'>Token</li></a>
                  <a href='/#character'><li className='cursor-pointer hover:text-red-500 hover:ease-in ease-out duration-[0.40s]'>Character</li></a>
                  <a href='/#teams'><li className='cursor-pointer hover:text-red-500 hover:ease-in ease-out duration-[0.40s]'>Team</li></a>
              </ul>
          </div>
          <div className='text-white flex flex-row md:gap-[40px] gap-2'>
              <div className='flex justify-center items-center md:gap-5 gap-3'>
                <FaDiscord className='cursor-pointer'/>
                <AiOutlineTwitter className='cursor-pointer'/>
              </div>
              <button className='bg-red-600 px-4 py-[4px] flex justify-center items-center font-semibold rounded-[20px] cursor-pointer'>
                <img className='w-[30px]' src={vector} alt=''/>
                WHITEPAPER
              </button>
          </div>
          <div className='text-white block sm:hidden '>
            <button>
              {!show && <AiOutlineMenu size={25} onClick={()=>{setShow(true)}}/>}
            </button>
          </div>
        </div>
        {show && <div className='bg-red-700 sm:hidden w-[200px] p-[20px] flex flex-col gap-[10px]'>
                    <div className='text-white font-extrabold'>
                      <IoMdClose size={25} onClick={()=>{setShow(false)}}/>
                    </div>
                    <ul className='text-white flex flex-col gap-5'>
                        <a href='/#home'><li onClick={handleHide} className='cursor-pointer hover:bg-[#ffffff1a] border-b-[2px] border-b-gray-400'>Home</li></a>
                        <a href='/#about'><li onClick={handleHide} className='cursor-pointer hover:bg-[#ffffff1a] border-b-[2px] border-b-gray-400'>About</li></a>
                        <a href='/#token'><li onClick={handleHide} className='cursor-pointer hover:bg-[#ffffff1a] border-b-[2px] border-b-gray-400'>Token</li></a>
                        <a href='/#character'><li onClick={handleHide} className='cursor-pointer hover:bg-[#ffffff1a] border-b-[2px] border-b-gray-400'>Character</li></a>
                        <a href='/#teams'><li onClick={handleHide} className='cursor-pointer hover:bg-[#ffffff1a] border-b-[2px] border-b-gray-400'>Team</li></a>
                    </ul>
                 </div>
         }
      </div>
    )
  }
  
  export default Navbar
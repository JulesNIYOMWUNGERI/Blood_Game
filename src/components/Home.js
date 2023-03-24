import React, { useState,useRef } from 'react';
import blood from '../assets/logos/Group (11).png'

import image11111 from '../assets/images/003.png'
import freddy from '../assets/Gifs/Freddy_pose1 3.gif'
import PinHead from '../assets/Gifs/Pinhead_pose1 2.gif'
import mike from '../assets/Gifs/mike-myers_pose1 2.gif'
import Chucky from '../assets/Gifs/Chucky_Pose3 3.gif'
import zombie from '../assets/Gifs/Leather-face_pose3 1.gif'
import Pennywise from '../assets/Gifs/Pennywise_pose2 1.gif'
import pennywise3 from '../assets/Gifs/Pennywise_pose1 2.gif'
import rectangle from '../assets/images/001.png'
import rectangle26 from '../assets/images/Rectangle 26.png'
import image2 from '../assets/images/image.png'
import Group1 from '../assets/images/Group (1).png'
import GhostFace from '../assets/Gifs/Ghostface_Gif3 1.gif'
import {AiFillYoutube,AiOutlineInstagram,AiOutlineTwitter,AiOutlineDown} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import {BsPlayFill,BsFillPlayFill,BsFillPauseFill} from 'react-icons/bs'

import image2222 from '../assets/images/002.png'
import jason from '../assets/Gifs/Jason_pose2 2.gif'


import group1 from '../assets/images/Group 233962.png'
import group2 from '../assets/images/Group 233963.png'
import group3 from '../assets/images/Group 233964.png'
import group4 from '../assets/images/Group 233965.png'
import group5 from '../assets/images/Group 233966.png'


import Group13333 from '../assets/images/Group (2).png'
import image13333 from '../assets/images/image_2022_09_28T02_47_04_124Z.png'
import image23333 from '../assets/images/image_2022_09_28T02_48_47_293Z.png'
import image33333 from '../assets/images/image_2022_09_28T02_49_10_084Z.png'
import image43333 from '../assets/images/image_2022_09_28T02_48_11_965Z.png'
import image53333 from '../assets/images/image_2022_09_28T02_47_35_309Z.png'
import { Link } from 'react-router-dom';
import vector from '../assets/logos/Vector.png'
import topVideo from '../assets/videos/original-B02893CB-0F04-4411-9B9C-A12F6ADB9937.mp4'
import jvsc from '../assets/videos/jvsc.00002.mp4'


const Home = () => {
  const [play, setPlay] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);


  const onVideoPress = () => {
    if(isPlaying){
      videoRef?.current?.pause();
      setIsPlaying(false);
    }else{
      videoRef?.current?.play();
      setIsPlaying(true);
    }
  }

    return (
        <div>
            <div>
              <video className='w-[100%] object-[cover]' src={topVideo} loop muted autoplay="autoplay"/>
            </div>
            <div className='bg-black text-white w-full pt-[100px] h-auto relative flex justify-end flex-row flex-wrap' id='about'>
        <div className='bg-transparent lg:w-[49%] md:w-[49%] sm:w-[100%] w-[100%] flex flex-col pl-[0px]'>
          <div className='bg-transparent pl-[50px] pb-[20px] flex relative'>
            <h1 className='text-[60px] font-bold z-[10000] font-[RoadRage]'>ABOUT</h1>
            <img className='absolute left-[-30px] top-[-70px]' src={blood} alt=''/>
          </div>
          <div className='pl-[55px] flex flex-col gap-5 font-[Montserrat]'>
            <p>
              Welcome to the bloodiest Player Versus Player death-match in Defi! BloodBath is a DAO driven ecosystem
              built from the ground up. Pick your favorite serial killer and slash your way to victory.
            </p>
            <h1>
              Key Features:<br/>
              - &emsp;Bank your $BLOOD with high yield staking<br/>
              - &emsp;"Winner-take-all"death matches<br/>
              - &emsp;Hosted tournaments<br/>
              - &emsp;SLAY TO EARN!<br/>
            </h1>
          </div>
          <div className='flex justify-center items-center'>
            <img className='h-[400px] w-[100%]' src={Pennywise} alt=''/>
          </div>
        </div>
        <div className='h-auto lg:w-[50%] md:w-[50%] sm:w-[100%]'>
           <div className='h-[600px] w-full flex flex-col justify-center items-center relative'>
             <img className='w-full h-full' src={image11111} alt=''/>
             <div className='bg-transparent text-white text-[30px] w-full h-full flex justify-center items-center absolute z-[100000]'>
               <div className='mb-[220px] w-[95%] h-[50%]'>
                   <img className='h-full w-full' src={freddy} alt=''/>
               </div>
             </div>
           </div>
           <div className='flex flex-col'>
            <div className='flex justify-center md:justify-start'>
              <h1 className='text-[50px] font-[RoadRage]'>Sneak Preview</h1>
            </div>
            <div className='text-center md:text-start pb-[50px] font-[Montserrat]'>
              <p>
                Take a look at the carnage of the bloodBath Arena. Let the blood flow!
              </p>
            </div>
           </div>
        </div>
        <div className='lg:w-[60%] md:w-[60%] sm:w-[100%] w-[100%] pb-[10px] px-[40px] flex flex-wrap flex-row justify-center gap-[40px]'>
          <button className='border-[2px] border-gray-500 py-[10px] px-[20px] rounded-[10px] font-[RoadRage]'>
            WATCH TRAILER
          </button>
          <div className='px-5 flex gap-[20px] justify-center items-center'>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center cursor-pointer'>
              <AiFillYoutube/>
            </div>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center cursor-pointer'>
              <RiFacebookFill/>
            </div>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center cursor-pointer'>
              <AiOutlineInstagram/>
            </div>
            <div className='bg-gray-700 w-[30px] h-[30px] rounded-[50%] flex justify-center items-center cursor-pointer'>
              <AiOutlineTwitter/>
            </div>
          </div>
          <div className='flex justify-center items-center font-[Montserrat]'>
            <h1>JOIN THE CONVERSATION</h1>
          </div>
        </div>
        <div className='w-full h-auto bg-black flex flex-col justify-center items-center'>
          <div className='w-full flex flex-col items-center justify-center py-[50px] relative'>
            <img className='lg:w-[50%] md:w-[70%] sm:w-full lg:h-[750px] md:h-[1000px] sm:h-[1300px] h-[1000px]' src={rectangle} alt=''/>
            <div className='flex flex-wrap flex-row justify-center items-center absolute top-4 w-full'>
                <div
                 onMouseEnter={() => {
                    setPlay(true)
                }}
                 onMouseLeave={() =>{ 
                  if(isPlaying){
                    setPlay(false)
                  }else{
                    setPlay(true)
                  }
                }}
                 className='lg:w-[42%] md:w-[600px] sm:w-screen relative flex justify-center items-center'>
                  <video src={jvsc} loop ref={videoRef} />
                  {play && <div onClick={onVideoPress} className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute md:top-[120px] top[100px] flex justify-center items-center'>
                                 {isPlaying ? (
                                  <BsFillPauseFill size={20}/>
                                 ) : (
                                  <BsFillPlayFill size={20}/> 
                                 )}
                              </div>}
                </div>
                <div className='lg:w-[45%] md:w-[600px] sm:w-screen relative flex justify-center items-center'>
                  <img src={rectangle26} alt=''/>
                  <div className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute md:top-[120px] top[100px] flex justify-center items-center'><BsPlayFill size={20}/></div>
                </div>
            </div>
            <img className='absolute left-0 top-[60px] w-[200px] hidden lg:block' src={Group1} alt=''/>
            <img className='absolute right-0 lg:w-[400px] h-[300px] md:w-[200px] mt-[70px] hidden md:block' src={GhostFace} alt=''/>
            <div className=' flex justify-center items-center flex-col lg:w-[50%] md:w-[70%] sm:w-full w-full absolute lg:mt-[50px] md:mt-[200px] sm:mt-[100px] mt-[10px]'>
               <div className='flex relative z-[1000]'>
                 <h1 className='text-[50px] font-[700] pb-[20px] z-[10000] font-[RoadRage]'>HOW TO PLAY</h1>
                 <img className='absolute left-[-90px] top-[-70px]' src={blood} alt=''/>
               </div>
               <p className='text-center font-[Montserrat]'>
                 Join the BloodBath community! Connect your wallet, buy your $BLOOD tokens.
                 find a challenger, set the wager, and let the blood blow!
               </p>
            </div>
            <div className='flex flex-wrap flex-row justify-center items-center gap-10'>
               <div className='lg:w-[450px] md:w-[450px] sm:w-[90%] w-[90%]'>
                 <img  src={image2} alt=''/>
               </div>
               <div className='flex flex-col gap-5 justify-center lg:w-[450px] md:w-[450px] sm:w-[90%] w-[90%] h-[300px] md:h-[250px]'>
                 <div>
                   <h1  className='font-[RoadRage]'>
                    <strong>1.Download</strong>
                  </h1>
                   <p className='font-[Montserrat]'>iOS and Windows compatible.</p>
                 </div>
                 <div>
                   <h1 className='font-[RoadRage]'>
                    <strong>2.Select seiral killer & Arena</strong>
                  </h1>
                   <p className='font-[Montserrat]'>Choose your villain and set your wager.</p>
                 </div>
                 <div>
                   <h1 className='font-[RoadRage]'>
                    <strong>3.Play</strong>
                   </h1>
                   <p className='font-[Montserrat]'>Go head-to-head in bloody combat in a winner take all<br/> battle.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
    </div>
    <div className='bg-black w-full text-white' id='token'>
        <div className='w-full flex flex-wrap flex-row justify-center gap-[200px] relative '>
            <div className='w-full lg:w-[45%] flex md:mb-[100px]'>
                <img className='w-full' src={jason} alt=''/>
            </div>
            <div className='absolute w-full flex justify-center mt-[500px] lg:mt-[150px] items-center'>
                <div className='lg:ml-[120px] w-[500px] mt-10 flex flex-col gap-2'>
                   <h1 className='ml-1'>
                       <h1 className='text-[50px] font-bold font-[RoadRage]' >$BLOOD TOKEN</h1>
                   </h1>
                   <ul className='ml-4 list-disc font-[Montserrat]'>
                       <li>Bank your $BLOOD with staking</li>
                       <li>Slay to Earn</li>
                       <li>BLOODY DAO</li>
                       <li>Tokenomics</li>
                   </ul>
                   <Link to='/token'><button className='cursor-pointer flex justify-center items-center gap-[3px] flex-row mt-[10px] bg-red-600 font-bold px-4 py-[8px] rounded-[25px] font-[RoadRage]'>
                   <img className='w-[25px]' src={vector} alt=''/>
                    $BLOOD ANALYSIS
                    </button></Link>
                </div>
            </div>
            <div className='h-[500px]'>
              <img className='lg:w-[450px] w-screen h-full' src={image2222} alt=''/>
            </div>         
        </div>
    </div>
    <div className='bg-black' id='character'>
       <div className='flex flex-col gap-[30px] py-[50px]'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center items-center relative'>
              <h1 className='text-[45px] text-white mb-[10px] font-bold z-[1000] font-[RoadRage]'>GAME CHARACTERS</h1>
              <img className='absolute left-[-80px] top-[-70px]' src={blood} alt=''/>
            </div> 
            <p className='text-[18px] text-white font-[Montserrat]'>
              Start with your favorite Serial Killers as you stab and<br/>
              slash your way to victory. Challengethe computer to <br/>
              unlock new levels and new Killers.
            </p>
          </div>
          <div className='flex flex-row flex-wrap justify-center items-center gap-[0px] w-full'>
            <div className='relative w-[155px] flex flex-col justify-center items-center overflow-x-hidden'>
              <img className='image' src={GhostFace} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] flex flex-col justify-center items-center overflow-x-hidden'>
              <img className='image' src={freddy} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] flex flex-col justify-center items-center '>
              <img className='image' src={pennywise3} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] flex flex-col justify-center items-center overflow-x-hidden'>
              <img className='image' src={PinHead} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] flex flex-col justify-center items-center overflow-x-hidden'>
              <img className='image' src={zombie} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] flex flex-col justify-center items-center overflow-x-hidden'>
              <img className='image' src={mike} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] md:mb-[72px] mb-[28px] flex flex-col justify-center items-center'>
              <img className='image7' src={jason} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
            <div className='relative w-[155px] flex flex-col justify-center items-center overflow-x-hidden'>
              <img className='image' src={Chucky} alt=''/>
              <img className='md:w-[120px] w-[40%] absolute bottom-0' src={Group13333} alt=''/>
            </div>
          </div>
          <div className='flex flex-row justify-end px-[100px] gap-[20px]'>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowLeft/>
            </button>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowRight/>
            </button>
          </div>
       </div>
       <div className='w-full relative bg-transparent'>
        <div className='z-[1000000000000]'>
          <div className='flex justify-center items-center mb-5'>
           <h1 className='flex justify-center items-center relative w-[400px]'>
            <img className='absolute left-0 mb-[30px]' src={blood} alt=''/>
            <h1 className='text-[45px] text-white mb-[20px] font-bold z-[10000] font-[RoadRage]'>GAME PLAY</h1>
           </h1>
          </div>
          
          <div className='flex justify-center items-center relative pt-[150px] pb-[120px]'>
            <div className='absolute top-8 left-[100px] z-[100] flex justify-center items-center '>
              <img className='w-[250px]' src={image13333} alt=''/>
              <div className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute top-[55px] text-white flex justify-center items-center'><BsPlayFill size={20}/></div>
            </div>
            <div className='absolute top-4 left-[250px] z-[10000] flex justify-center items-center'>
              <img className='w-[300px]' src={image33333} alt=''/>
              <div className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute top-[70px] text-white flex justify-center items-center'><BsPlayFill size={20}/></div>
            </div>
            <div className='absolute top-0 z-[100000] flex justify-center items-center'>
              <img className='w-[350px]' src={image23333} alt=''/>
              <div className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute top-[85px] text-white flex justify-center items-center'><BsPlayFill size={20}/></div>
            </div>
            <div className='absolute top-4 right-[250px] z-[10000] flex justify-center items-center'>
              <img className='w-[300px]' src={image43333} alt=''/>
              <div className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute top-[70px] text-white flex justify-center items-center'><BsPlayFill size={20}/></div>
            </div>
            <div className='absolute top-8 right-[100px] z-[100] flex justify-center items-center'>
              <img className='w-[250px]' src={image53333} alt=''/>
              <div className='w-[40px] h-[40px] rounded-[50%] border-[2px] absolute top-[55px] text-white flex justify-center items-center'><BsPlayFill size={20}/></div>
            </div>
          </div>
          <div className='flex flex-row justify-end px-[100px] gap-[20px]'>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowLeft/>
            </button>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center'>
              <BsArrowRight/>
            </button>
          </div>
        </div>
        <div className='absolute top-[160px] md:left-[70px] left-0 md:w-[550px] w-full h-[650px] z-[1] bgContainer2'></div>
        <div className='w-full h-auto'>
          <div className='z-[1000] flex flex-col items-center justify-center'>
            <h1 className='flex justify-center items-center relative w-[400px]'>
              <h1 className='text-[45px] text-white mb-[20px] font-bold z-[10000] font-[RoadRage]'>ROADMAP</h1>
              <img className='absolute left-0 mb-[30px] z-[100]' src={blood} alt=''/>
            </h1>
            <div className='z-[1000] relative'>
              <div className='flex flex-row flex-wrap justify-center gap-[200px] py-5'>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mb-[-100px] md:ml-[1px]'>
                     <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q2 2022</h1>
                     <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                       <li className='cursor-pointer'>Game concept Establishment</li>
                       <li className='cursor-pointer'>Pitch Deck</li>
                       <li className='cursor-pointer'>Detailed Documentation</li>
                       <li className='cursor-pointer'>Game Design Storyboard</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mb-[-100px]'>
                     <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q3 2022</h1>
                     <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                       <li className='cursor-pointer'>Game Development outlined</li>
                       <li className='cursor-pointer'>Ecosystem Design</li>
                       <li className='cursor-pointer'>Character Metamorphosis</li>
                       <li className='cursor-pointer'>Private Seed Round</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mb-[50px] md:mb-[-100px]'>
                     <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q4 2022</h1>
                     <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                       <li className='cursor-pointer'>Full game production (Beta)</li>
                       <li className='cursor-pointer'>Team Expansion. 8 additional IT and marketing specialists</li>
                       <li className='cursor-pointer'>OG character reveal for base levels</li>
                     </ul>
                  </div>
                <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mt-[-100px]'>
                     <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q1 2023</h1>
                     <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                       <li className='cursor-pointer'>Website Development</li>
                       <li className='cursor-pointer'>On-chain migration</li>
                       <li className='cursor-pointer'>Smart contract development</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mt-[-90px] md:mt-[-100px]'>
                     <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q2 2023</h1>
                     <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                       <li className='cursor-pointer'>Public Round GameFi.org & Seedify Launchpad</li>
                       <li className='cursor-pointer'>Internal Beta Launch to Public</li>
                       <li className='cursor-pointer'>User Dashboard Release</li>
                       <li className='cursor-pointer'>$BLOOD Token Launch Party</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-center items-center  z-[100000] mt-[-100px] md:mr-[100px]'>
                    <div>
                       <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q3 2023</h1>
                       <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                         <li className='cursor-pointer'>Alpha Launch to Public</li>
                         <li className='cursor-pointer'>Slay-to-Earn Program Launch</li>
                         <li className='cursor-pointer'>Battle Arena Dashboard Live</li>
                         <li className='cursor-pointer'>Social Media Growth Competition</li>
                       </ul>
                    </div>
                    <div>
                        <h1 className='z-[100000] text-white w-full font-[RoadRage]'>Q4 2023</h1>
                        <ul className='text-white text-[13px] z-[100000] font-[Montserrat]'>
                           <li className='cursor-pointer'>Grand Opening $100k Tournament</li>
                           <li className='cursor-pointer'>PVP Real Time challenging</li>
                           <li className='cursor-pointer'>player Avatar Integration</li>
                         </ul>
                    </div>
                  </div>
              </div>
              <div className='bgContainer absolute top-0 lg:right-5 right-0'></div>
            </div>
          </div>
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center' id='teams'>
          <h1 className='flex justify-center items-center z-[100000] relative w-[400px]'>
             <h1 className='text-[45px] text-white mb-[20px] font-bold z-[10000] font-[RoadRage]'>OUR TEAM</h1>
              <img className='absolute left-0 mb-[30px] z-[100]' src={blood} alt=''/>
          </h1>
          <div className='flex flex-row flex-wrap gap-3 justify-center items-center'>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group1} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group2} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group3} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group4} alt=''/>
            </div>
            <div className='z-[100000000000000]'>
              <img className='w-[200px]' src={group5} alt=''/>
            </div>
          </div>
          <div className='flex flex-row justify-end px-[100px] gap-[20px]'>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center z-[100000000]'>
              <BsArrowLeft/>
            </button>
            <button className='w-[40px] h-[40px] rounded-[50%] border bg-gray-200 flex justify-center items-center z-[100000000]'>
              <BsArrowRight/>
            </button>
          </div>
        </div>
        <div className='flex flex-row flex-wrap justify-between items-center py-[100px]'>
          <div className='flex justify-start mb-[200px]'>
            <img className='w-[400px] h-[300px]' src={freddy} alt=''/>
          </div>
          <div className='flex flex-col gap-5 justify-center items-center md:w-[530px] w-screen'>
            <h1 className='w-[350px] md:w-[550px] flex relative Z-[10000] bg-red-200'>
              <h1 className='text-[35px] md:text-[45px] text-white mb-[20px] font-bold text-center font-[RoadRage]'>FREQUENTLY ASKED QUESTIONS</h1>
            </h1>
            <form className='flex flex-col gap-[10px] text-white font-[Montserrat]'>
              <div className='flex flex-row border-b justify-center items-center'>
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>When is BloodBath launching?</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>Can I play BloodBath for free?</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>Where can I buy $BLOOD??</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>How do tournments work?</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
            </form>
          </div>
          <div className='flex justify-end h-[600px] pt-[290px]'>
            <img className='w-[320px] h-[280px]' src={Chucky} alt=''/>
          </div>
        </div>
       </div>
    </div>
        </div>
        
    )
}

export default Home;
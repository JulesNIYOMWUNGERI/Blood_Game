import React, { useState,useRef } from 'react';
import image from '../assets/images/Background Image.jpg'
import logo from '../assets/logos/Logo-1.png'

import image11111 from '../assets/images/003.png'
import freddy from '../assets/Gifs/Freddy_pose1 3.gif'
import PinHead from '../assets/Gifs/Pinhead_pose1 2.gif'
import mike from '../assets/Gifs/mike-myers_pose1 2.gif'
import Chucky from '../assets/Gifs/Chucky_Pose3 3.gif'
import zombie from '../assets/Gifs/Leather-face_pose3 1.gif'
import AboutLogo from '../assets/logos/About.png'
import Pennywise from '../assets/Gifs/Pennywise_pose2 1.gif'
import pennywise3 from '../assets/Gifs/Pennywise_pose1 2.gif'
import Pennywise2 from '../assets/images/Pennywise.png'
import rectangle from '../assets/images/001.png'
import rectangle5 from '../assets/images/Rectangle 5 (1).png'
import rectangle26 from '../assets/images/Rectangle 26.png'
import HowToPlay from '../assets/logos/how to play.png'
import image2 from '../assets/images/image.png'
import Group1 from '../assets/images/Group (1).png'
import GhostFace from '../assets/Gifs/Ghostface_Gif3 1.gif'
import {AiFillYoutube,AiOutlineInstagram,AiOutlineTwitter,AiOutlineDown} from 'react-icons/ai'
import {RiFacebookFill} from 'react-icons/ri'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'
import {BsPlayFill,BsFillPlayFill,BsFillPauseFill} from 'react-icons/bs'

import image2222 from '../assets/images/002.png'
import jason from '../assets/Gifs/Jason_pose2 2.gif'
import Token from '../assets/images/$blood TOKEN_ (2).png'

import OurTeam from '../assets/logos/Our Team.png'
import group1 from '../assets/images/Group 233962.png'
import group2 from '../assets/images/Group 233963.png'
import group3 from '../assets/images/Group 233964.png'
import group4 from '../assets/images/Group 233965.png'
import group5 from '../assets/images/Group 233966.png'
import Logo2 from '../assets/logos/Group 233960.png'

import Logo3333 from '../assets/logos/Game Characters.png'
import Group13333 from '../assets/images/Group (2).png'
import GamePlayLogo from '../assets/logos/game play.png'
import LoadMap from '../assets/logos/game play (1).png'
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
  const [isVideoMuted, setIsVideoMuted] = useState(false);
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
            <div className='w-full h-screen relative top-0' id='home'>
              <img src={image} alt="/" className='w-full h-full object-cover absolute mix-blend-overlay'/>
              <div className='text-[30px] h-screen font-extrabold flex justify-center items-center pt-[170px] relative'>
                  <div className='h-[360px] w-[300px]'>
                    <img className='bg-[#00000000] h-full w-full' src={Pennywise2} alt=''/>
                  </div>
                  <div className='text-[30px] font-extrabold pt-[100px] absolute  z-[10000]'>
                      <img className='w-[550px]' src={logo} alt=''/>
                  </div>
              </div>
            </div>
            <div className='bg-black text-white w-full pt-[100px] h-auto relative flex justify-end flex-row flex-wrap' id='about'>
        <div className='bg-transparent lg:w-[49%] md:w-[49%] sm:w-[100%] w-[100%] flex flex-col pl-[0px]'>
          <div className='bg-transparent'>
            <img src={AboutLogo} alt=''/>
          </div>
          <div className='pl-[55px] flex flex-col gap-5'>
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
              <h1 className='text-[50px]'>Sneak Preview</h1>
            </div>
            <div className='text-center md:text-start'>
              <p>
                Take a look at the carnage of the bloodBath Arena. Let the blood flow!
              </p>
            </div>
           </div>
        </div>
        <div className='lg:w-[60%] md:w-[60%] sm:w-[100%] w-[100%] pb-[10px] px-[40px] flex flex-wrap flex-row justify-center gap-[40px]'>
          <button className='border-[2px] border-gray-500 py-[10px] px-[20px] rounded-[10px]'>
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
          <div className='flex justify-center items-center'>
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
               <h1>
                 <img src={HowToPlay} alt=''/>
               </h1>
               <p className='text-center'>
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
                   <h1>
                    {/* <img className='w-[150px]' src={Download} alt=''/> */}
                    <strong>1.Download</strong>
                  </h1>
                   <p>iOS and Windows compatible.</p>
                 </div>
                 <div>
                   <h1>
                    {/* <img className='w-[300px]' src={SelectAvatar} alt=''/> */}
                    <strong>2.Select seiral killer & Arena</strong>
                  </h1>
                   <p>Choose your villain and set your wager.</p>
                 </div>
                 <div>
                   <h1>
                    {/* <img className='w-[100px]' src={Play} alt=''/> */}
                    <strong>3.Play</strong>
                   </h1>
                   <p>Go head-to-head in bloody combat in a winner take all<br/> battle.</p>
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
                       <img className='h-[50px]' src={Token} alt=''/>
                   </h1>
                   <ul className='ml-4 list-disc'>
                       <li>Bank your $BLOOD with staking</li>
                       <li>Slay to Earn</li>
                       <li>BLOODY DAO</li>
                       <li>Tokenomics</li>
                   </ul>
                   <Link to='/token'><button className='cursor-pointer flex flex-row mt-[10px] bg-red-600 font-bold px-4 py-[8px] rounded-[25px]'>
                   <img className='w-[30px]' src={vector} alt=''/>
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
            <img className='w-[500px] lg:mr-[30px]' src={Logo3333} alt=''/>
            <p className='text-[18px] text-white'>
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
          <h1 className='flex justify-center items-center'>
            <img className='w-[400px] h-[170px]' src={GamePlayLogo} alt=''/>
          </h1>
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
          <div className='z-[1000]'>
            <h1 className='flex justify-center items-center'>
              <img className='w-[400px] h-[170px] z-[100000]' src={LoadMap} alt=''/>
            </h1>
            <div className='z-[1000] relative'>
              <div className='flex flex-row flex-wrap justify-center gap-[200px] py-5'>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mb-[-100px] md:ml-[1px]'>
                     {/* <img className='z-[100000] h-[70px]' src={Text1} alt=''/> */}
                     {/* <img src={line} alt=''/> */}
                     <h1 className='z-[100000] text-white w-full'>Q2 2022</h1>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>Game concept Establishment</li>
                       <li className='cursor-pointer'>Pitch Deck</li>
                       <li className='cursor-pointer'>Detailed Documentation</li>
                       <li className='cursor-pointer'>Game Design Storyboard</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mb-[-100px]'>
                     {/* <img className='z-[100000] h-[70px]' src={Text2} alt=''/> */}
                     {/* <img src={line} alt=''/> */}
                     <h1 className='z-[100000] text-white w-full'>Q3 2022</h1>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>Game Development outlined</li>
                       <li className='cursor-pointer'>Ecosystem Design</li>
                       <li className='cursor-pointer'>Character Metamorphosis</li>
                       <li className='cursor-pointer'>Private Seed Round</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mb-[50px] md:mb-[-100px]'>
                     {/* <img className='z-[100000] h-[70px]' src={Text3} alt=''/> */}
                     {/* <img src={line} alt=''/> */}
                     <h1 className='z-[100000] text-white w-full'>Q4 2022</h1>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>Full game production (Beta)</li>
                       <li className='cursor-pointer'>Team Expansion. 8 additional IT and marketing specialists</li>
                       <li className='cursor-pointer'>OG character reveal for base levels</li>
                     </ul>
                  </div>
                {/* <div className='z-[1000000] md:flex flex-row gap-0 h-[30px] my-[40px] md:ml-[120px] hidden '>
                    <div className='text-red-900 flex justify-center items-center'><img src={icon} alt='' />------------</div>
                    <div className='text-red-900 flex justify-center items-center'>---------<img src={icon} alt='' />---------</div>
                    <div className='text-red-900 flex justify-center items-center'>---------<img src={icon} alt='' />---------</div>
                    <div className='text-red-900 flex justify-center items-center'>---------<img src={icon} alt='' />---------</div>
                    <div className='text-red-900 flex justify-center items-center'>---------<img src={icon} alt='' />---------</div>
                    <div className='text-red-900 flex justify-center items-center'>---------<img src={icon} alt='' /></div>
                </div> */}
                <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mt-[-100px]'>
                     {/* <img className='z-[100000] h-[70px]' src={Text4} alt=''/> */}
                     {/* <img src={line} alt=''/> */}
                     <h1 className='z-[100000] text-white w-full'>Q1 2023</h1>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>Website Development</li>
                       <li className='cursor-pointer'>On-chain migration</li>
                       <li className='cursor-pointer'>Smart contract development</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[1px] justify-center items-center  z-[100000] mt-[-90px] md:mt-[-100px]'>
                     {/* <img className='z-[100000] h-[70px]' src={Text5} alt=''/> */}
                     {/* <img src={line} alt=''/> */}
                     <h1 className='z-[100000] text-white w-full'>Q2 2023</h1>
                     <ul className='text-white text-[13px] z-[100000]'>
                       <li className='cursor-pointer'>Public Round GameFi.org & Seedify Launchpad</li>
                       <li className='cursor-pointer'>Internal Beta Launch to Public</li>
                       <li className='cursor-pointer'>User Dashboard Release</li>
                       <li className='cursor-pointer'>$BLOOD Token Launch Party</li>
                     </ul>
                  </div>
                  <div className='flex flex-col gap-[10px] justify-center items-center  z-[100000] mt-[-100px] md:mr-[100px]'>
                    <div>
                       {/* <img className='z-[100000] h-[70px]' src={Text6} alt=''/> */}
                       {/* <img src={line} alt=''/> */}
                       <h1 className='z-[100000] text-white w-full'>Q3 2023</h1>
                       <ul className='text-white text-[13px] z-[100000]'>
                         <li className='cursor-pointer'>Alpha Launch to Public</li>
                         <li className='cursor-pointer'>Slay-to-Earn Program Launch</li>
                         <li className='cursor-pointer'>Battle Arena Dashboard Live</li>
                         <li className='cursor-pointer'>Social Media Growth Competition</li>
                       </ul>
                    </div>
                    <div>
                       {/* <img className='z-[100000] h-[70px]' src={Text6} alt=''/> */}
                       {/* <img src={line} alt=''/> */}
                        <h1 className='z-[100000] text-white w-full'>Q4 2023</h1>
                        <ul className='text-white text-[13px] z-[100000]'>
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
        <div className='w-full h-auto' id='teams'>
          <h1 className='flex justify-center items-center z-[100000]'>
            <img className='z-[100000]' src={OurTeam} alt=''/>
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
        <div className='flex flex-row flex-wrap justify-between items-center'>
          <div className='flex justify-start mb-[200px]'>
            <img className='w-[400px] h-[300px]' src={freddy} alt=''/>
          </div>
          <div className='flex flex-col gap-5 justify-center items-center md:w-[530px] w-screen'>
            <h1 className='w-[350px]'>
              <img src={Logo2} alt=''/>
            </h1>
            <form className='flex flex-col gap-[10px] text-white'>
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
              {/* <div className='flex flex-row border-b justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>Where Can I buy ZION?</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div>
              <div className='flex flex-row border-b justify-center items-center'>  
                <div className='bg-transparent border-none outline-none md:w-[500px] w-[90%] p-[10px]'>Why Polygan?</div>
                <AiOutlineDown className='cursor-pointer'/>
              </div> */}
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
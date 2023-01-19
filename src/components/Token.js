import React from 'react'
import BloodToken from '../assets/logos/$blood token.png'
import btn2 from '../assets/logos/Frame 11.png'
import coin from '../assets/Gifs/gif 1.gif'
import status from '../assets/images/Stats.png'
import image62  from '../assets/images/image62 2.png'
import header from '../assets/logos/$blood token ecosystem & revenue.png'
import bloodDash from '../assets/logos/Group (11).png'
import newDash from '../assets/logos/Group (12).png'
import zombie from '../assets/Gifs/Leather-face_pose3 1.gif'
import heading from '../assets/logos/Heading.png'
import meter from '../assets/images/Meter.png'
import meterTitle from '../assets/logos/heading (1).png'
import pig from '../assets/images/Group 234028.png'
import pigHeader from '../assets/logos/Heading (2).png'
import statsTile from '../assets/logos/Heading (3).png'
import stats from '../assets/images/Group 233955.png'
import chart from '../assets/images/Chart.png'
import WatchLogo from '../assets/logos/Watch Trailer.png'
import whitePaper from '../assets/logos/White Paper Button.png'
import Group13333 from '../assets/images/Group (2).png'
import footer from '../assets/logos/footer.PNG'

import {RiFacebookFill} from 'react-icons/ri'
import {AiFillYoutube,AiOutlineRight,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'

const Token = () => {
  return (
    <div className='relative'>
        <div className='WraperContainer w-full h-auto py-[150px] flex flex-row justify-center items-center gap-5'>
            <div className='text-white flex flex-col gap-5 md:w-[40%] w-[95%]'>
                <img src={BloodToken} alt=''/>
                <p className='ml-5'>
                    Laborum laborum nisi quis et do non. Irure excepteur nostrud incididunt aute exercitation irure. 
                    Cillum ea non ullamco laboris dolor nostrud dolore pariatur tempor esse et ex exercitation adipisicing.
                </p>
                <button className='ml-3'>
                    <img src={btn2} alt=''/>
                </button>
            </div>
            <div className='md:w-[30%]'>
                <img src={coin} alt=''/>
            </div>
        </div>
        <div className='bg-black w-full h-auto flex flex-col justify-center items-center'>
            <div className='md:w-[70%] w-[95%]  absolute md:top-[650px] top-[750px]'>
                <img src={status} alt=''/>
            </div>
            <img className='absolute left-0 top-[700px] w-[200px]' src={newDash} alt=''/>
            <div className='w-full flex flex-row flex-wrap justify-between items-center pl-[40px]  mt-[120px]'>
              <div className='md:w-[45%] w-[95%] flex flex-col md:gap-[30px] gap-[80px]'>
                  <h1 className='relative flex flex-row'>
                    <img className='md:w-[200px] w-[100px]' src={bloodDash} alt=''/>
                    <img className='md:w-[450px] w-[300px] md:h-[150px] h-[100px] absolute md:left-[70px] left-[40px] top-[50px]' src={header} alt=''/>
                  </h1>
                  <p className='md:ml-[70px] ml-[40px] text-white'>
                    Laborum laborum nisi quis et do non. Irure excepteur nostrud incididunt aute exercitation irure.
                    Laborum laborum nisi quis et do non. 
                  </p>
                  <button className='text-white border-[2px] border-gray-500 flex justify-center items-center w-[60px] py-1 rounded-[10px] md:ml-[70px] ml-[40px]'>
                    Buy<AiOutlineRight size={15} className='mt-1 flex justify-center items-center'/>
                  </button>
              </div>            
              <div className='middleContainer md:w-[50%] w-[95%] h-[800px] flex justify-center items-center'>
                  <img className='w-[60%] h-[50%]' src={image62} alt=''/>
              </div>
            </div>
        </div>
        <div className='flex flex-row flex-wrap items-center w-full bg-black'>
            <div className='md:w-[40%] w-[95%] relative flex flex-col justify-center items-center mt-[70px] md:ml-[60px]'>
                <img className='z-[10000] absolute bottom-3' src={zombie} alt=''/>
                <img className='' src={Group13333} alt=''/>
            </div>
            <div className='md:w-[35%] w-[95%] flex flex-col'>
                <h1>
                    <img src={heading} alt=''/>
                </h1>
                <p className='text-white md:ml-[70px] ml-[40px] mb-5'>
                    Laborum laborum nisi quis et do non. Irure excepteur nostrud incididunt aute exercitation irure.
                    Laborum laborum nisi quis et do non. 
                </p>
                <button className='text-white border-[2px] border-gray-500 flex justify-center items-center w-[60px] py-1 rounded-[10px] md:ml-[70px] ml-[40px]'>
                    Play<AiOutlineRight size={15} className='mt-1 flex justify-center items-center'/>
                </button>
            </div>
        </div>
        <div className='w-full bg-black flex flex-row flex-wrap justify-center items-center relative'>
            <div className='middleContainer md:w-[60%] w-[95%] md:h-[700px] h-[1000px]'></div>
            <div className='absolute top-[200px] flex flex-row flex-wrap justify-center items-center gap-[100px]'>
                <div className='flex flex-col md:w-[40%] w-[95%]'>
                    <h1>
                        <img src={meterTitle} alt=''/>
                    </h1>
                    <p className='text-white md:ml-[70px] ml-[40px] mb-5'>
                        Laborum laborum nisi quis et do non. Irure excepteur nostrud incididunt aute exercitation irure.
                        Laborum laborum nisi quis et do non. 
                    </p>
                    <button className='text-white border-[2px] border-gray-500 flex justify-center items-center w-[60px] py-1 rounded-[10px] md:ml-[70px] ml-[40px]'>
                        Vote<AiOutlineRight size={15} className='mt-1 flex justify-center items-center'/>
                    </button>
                </div>
                <div>
                    <img className='w-[250px]' src={meter} alt=''/>
                </div>
            </div>
        </div>
        <div className='bg-black w-full flex flex-row flex-wrap justify-center items-center'>
            <div>
                <img className='w-[400px]' src={pig} alt=''/>
            </div>
            <div className='md:w-[45%] w-[95%] flex flex-col gap-4'>
                <h1>
                    <img src={pigHeader} alt=''/>
                </h1>
                <p className='text-white md:ml-[70px] ml-[40px] mb-2'>
                    Laborum laborum nisi quis et do non. Irure excepteur nostrud incididunt aute exercitation irure.
                    Laborum laborum nisi quis et do non. 
                </p>
                <button className='text-white border-[2px] border-gray-500 flex justify-center items-center w-[60px] py-1 rounded-[10px] md:ml-[70px] ml-[40px]'>
                    Stake<AiOutlineRight size={15} className='mt-1 flex justify-center items-center'/>
                </button>
            </div>
        </div>
        <div className='bg-black flex flex-col justify-content items-end w-full relative'>
           <div className='lastContainer md:w-[50%] w-[95%] md:h-[700px] h-[1000px] md:mr-[120px]'></div>
           <div className='flex flex-col justify-center items-center w-full absolute'>
             <img className='w-[300px]' src={statsTile} alt=''/>
             <img className='w-[500px]' src={stats} alt=''/>
           </div>
           <div className='flex flex-col justify-center items-center w-full mb-[80px]'>
            <div className='border-[1px] border-red-700 rounded-[10px] table'>
            <table className='text-white text-[10px]'>
                <tr>

                    <th className='md:py-[12px] md:px-[25px]'>Allocations</th>
                    <th className='md:py-[12px] md:px-[25px]'>Tokens</th>
                    <th className='md:py-[12px] md:px-[25px]'>Share</th>
                    <th className='md:py-[12px] md:px-[25px]'>TGE Release</th>
                    <th className='md:py-[12px] md:px-[25px]'>Cliffs<br/>(Months)</th>
                    <th className='md:py-[12px] md:px-[25px]'>Vesting<br/>(Months)</th>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Speed</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>4.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>7.50%</td>
                    <td className='md:py-[12px] md:px-[25px]'>8</td>
                    <td className='md:py-[12px] md:px-[25px]'>12</td>

                </tr>
                
                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Private-R1</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>3.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>10.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>5</td>
                    <td className='md:py-[12px] md:px-[25px]'>8</td>

                </tr>
                
                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Private-R2</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>6.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>10.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>4</td>
                    <td className='md:py-[12px] md:px-[25px]'>6</td>

                </tr>
                
                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Public</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>2.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>15.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0</td>
                    <td className='md:py-[12px] md:px-[25px]'>3</td>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Teams&<br/>Development</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>17.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>8</td>
                    <td className='md:py-[12px] md:px-[25px]'>24</td>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Advisor</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>5.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>8</td>
                    <td className='md:py-[12px] md:px-[25px]'>24</td>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Bloody Rewards</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>30.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>1.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0</td>
                    <td className='md:py-[12px] md:px-[25px]'>72</td>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Staking</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>10.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0</td>
                    <td className='md:py-[12px] md:px-[25px]'>12</td>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Treasury</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>18.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0</td>
                    <td className='md:py-[12px] md:px-[25px]'>12</td>

                </tr>

                <tr>
                    <td className='md:py-[12px] md:px-[25px]'>Liquidity</td>
                    <td className='md:py-[12px] md:px-[25px]'>37,500,000</td>
                    <td className='md:py-[12px] md:px-[25px]'>5.0%</td>
                    <td className='md:py-[12px] md:px-[25px]'>40.00%</td>
                    <td className='md:py-[12px] md:px-[25px]'>0</td>
                    <td className='md:py-[12px] md:px-[25px]'>3</td>

                </tr>
            </table>
            </div>
           </div>
           <div className='w-full flex justify-center items-center mb-[100px]'>
             <img src={chart} alt=''/>
           </div>
        </div>
        <div>
            <img className='h-[10ppx] w-full' src={footer} alt=''/>
        </div>
        <footer className='footer w-full py-[30px] flex flex-row justify-center items-center'>
          <div className='flex justify-center items-center text-white'>
            <h1>JOIN THE CONVERSATION</h1>
          </div>
          <div className='px-5 flex gap-[20px] justify-center items-center'>
            <div className='bg-[#ffffff4a] text-white cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <AiFillYoutube/>
            </div>
            <div className='bg-[#ffffff4a] text-white cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <RiFacebookFill/>
            </div>
            <div className='bg-[#ffffff4a] text-white cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <AiOutlineInstagram/>
            </div>
            <div className='bg-[#ffffff4a] text-white cursor-pointer w-[30px] h-[30px] rounded-[50%] flex justify-center items-center'>
              <AiOutlineTwitter/>
            </div>
          </div>
          <button className=''>
            <img className='w-[100px]' src={whitePaper} alt=''/>
          </button>
        </footer>
    </div>
  )
}

export default Token
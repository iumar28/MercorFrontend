import {AiOutlineInstagram,AiFillEye} 
from "react-icons/ai"
import {FaGooglePlay} from "react-icons/fa"
import {BsApple} from "react-icons/bs"

 import {BsTwitter} from "react-icons/bs"
 import {BiSolidMessageDetail} from "react-icons/bi"
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col gap-5">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <button className="border inline-flex py-3 px-5 rounded-lg items-center focus:outline-none">
      <BsApple className="text-green-500" size={25}/>
        <span className="ml-4 flex items-start flex-col leading-none">
         
          <span className="title-font font-medium text-white uppercase">App Store</span>
        </span>
      </button>
        
      </a>
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <button className="border inline-flex py-3 px-5 rounded-lg items-center focus:outline-none">
      <FaGooglePlay className="text-green-500" size={25}/>
        <span className="ml-4 flex items-start flex-col leading-none">
         
          <span className="title-font font-medium text-white uppercase">Google play</span>
        </span>
      </button>
        
      </a>
      
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
    
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
     
    </div>
   
  </div>

      
     
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-white">
          <BiSolidMessageDetail size={25}/>
        </a>
        <a className="ml-3 text-white">
        <BsTwitter size={25}/>
        </a>
        <a className="ml-3 text-white">
        <AiOutlineInstagram size={25}/>
        </a>
       
      </span>
    </div>
  </footer>
  )
}

export default Footer
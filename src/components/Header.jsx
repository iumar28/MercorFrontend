import Navlinks from './Navlink'
import {AiFillEye}
 from "react-icons/ai"
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
     
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {Navlinks.map((items)=>(
        <a key={""} className="mr-5 text-white">{items.name}</a>
      ))}
       
      
      </nav>
      <button className="inline-flex items-center bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <AiFillEye size={25} className="text-white"/>
       
      </button>
    </div>
  </header>
  )
}

export default Header
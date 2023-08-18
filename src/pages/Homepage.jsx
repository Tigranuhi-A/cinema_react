import { useNavigate } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


export function Homepage() {

  const navigate = useNavigate();

  return (
    <div className=" h-[800px] flex justify-center items-center flex-col">
      <ul className=" hidden sm:flex text-center text-5xl">
        <li>M</li>
        <li>O</li>
        <li className=" text-orange-700">V</li>
        <li>I</li>
        <li>E</li>
        <li>O</li>
        <li>L</li>
        <li>O</li>
        <li>G</li>
        <li className=" text-orange-700">Y</li>
      </ul>

      <div className=" font-bold text-center text-white text-[2rem] sm:text-[3rem]">
        Ready to watch? Let's Start!</div>

      <button className=" flex justify-center items-center font-bold rounded-full
         text-white bg-red-600 gap-3 p-4" onClick={() => navigate('/shows')}>
        Get Started
        <BsFillArrowRightCircleFill />
      </button>

    </div>
  )
}

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { getShowCast } from "../api";
import { CastList } from "../components/CastList";


export function CastPage() {

  const [cast, setCast] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getShowCast(id).then(data => {
      console.log(data);
      setCast(data);
    })
  }, []);


  return (
    <div className=" p-8 pt-[9rem]">
      <BsFillArrowLeftSquareFill className=" cursor-pointer text-[2rem] text-red-700"
        onClick={() => navigate(-1)} />
      <div className=" text-[2rem] text-center font-bold text-white bg-black/70 my-8">
        <span className=" text-red-700">C</span>ast</div>
      <CastList cast={cast} />
    </div>
  )
}

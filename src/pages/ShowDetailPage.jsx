import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { getShowsById } from "../api";


export function ShowDetailPage() {

  const [show, setShow] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getShowsById(id).then(data => {
      console.log(data);
      setShow(data);
    })
  }, [id]);


  return (
    <div className=" p-8 pt-[9rem]">
      <BsFillArrowLeftSquareFill className=" cursor-pointer text-[2rem] text-red-700"
        onClick={() => navigate(-1)} />
      <div className=" flex justify-center items-center gap-10 flex-col sm:flex-row">

        <img src={show.image?.medium} alt={show.name} />

        <div>
          <div className=" flex justify-between items-center text-white bg-gray-900 p-2">
            Show Name: <span>{show.name}</span>
          </div>
          <div className=" flex justify-between items-center text-white p-2">
            Show Language: <span>{show.language}</span>
          </div>
          <div className=" flex justify-between items-center text-white bg-gray-900 p-2">
            Country: <span>{show.network?.country?.name}</span>
          </div>
          <div className=" flex justify-between items-center text-white p-2">
            Time: <span>{show.schedule?.time}</span>
          </div>
          <div className=" flex justify-between items-center text-white bg-gray-900 p-2">
            Genre: &nbsp; <span> {show.genres?.join(', ')}</span>
          </div>
        </div>

      </div>

      <div className=" text-center px-10 mt-10">

        <div className=" text-white text-[2rem] my-5">About <span className=" text-red-700">
          Show</span> </div>
        <p className=" text-white">{show.summary?.slice(3, -4)}</p>
        <button className=" rounded bg-red-700 p-2 text-white my-5"
          onClick={() => navigate('/shows/' + show.id + '/cast')}>
          See Cast</button>

      </div>
    </div>
  )
}

import { useEffect, useState } from "react";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { getShows } from "../api";
import { ShowsList } from "../components/ShowsList";


export function ShowsPage() {

  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [showFilterIcon, setShowFilterIcon] = useState(false);
  const showAllGenres = [];


  useEffect(() => {
    getShows().then(data => {
      setShows(data);
    })
  }, []);

  const onSelectGenre = (genre) => {
    const selected_genre = shows.filter(el => el.genres.includes(genre));
    setFilteredShows(selected_genre);
    setShowFilterIcon(false);
  }

  for (let i = 0; i < shows.length; i++) {
    const genres = shows[i].genres;
    showAllGenres.push(...genres);
  }

  const genre = Array.from(new Set(showAllGenres));

  return (
    <div className=" p-8 pt-[7rem]">
      <BsFillFilterCircleFill className=" flex md:hidden text-red-700 text-[2rem] cursor-pointer"
        onClick={() => setShowFilterIcon(!showFilterIcon)} />
      {
        showFilterIcon ?

          <div className=" flex gap-4 flex-col bg-black/70 p-4">
            <span className=" text-red-700 font-bold text-[1.3rem] cursor-pointer"
              onClick={() => onSelectGenre(0)}>Clear filter</span>
            {
              genre.map((el, index) => <div key={index}>
                <span className=" text-white cursor-pointer " onClick={() => onSelectGenre(el)}>{el}</span>
              </div>)
            }
          </div>
          :
          <div>
            <button className=" text-center bg-red-700 text-white p-2 my-4 hidden md:flex"
              onClick={() => onSelectGenre(0)}>Clear filter</button>

            <div className=" grid gap-1 md:grid-cols-5 lg:grid-cols-6">
              {
                genre.map((el, index) => <div key={index} className=" hidden md:flex justify-center items-center 
        text-center bg-red-700 p-2 ">
                  <button className=" text-white hover:scale-110 duration-300" onClick={() => onSelectGenre(el)}>{el}</button>
                </div>)
              }
            </div>
          </div>
      }
      <div className=" my-10">
        <ShowsList shows={filteredShows.length ? filteredShows : shows} />
      </div>
    </div>
  )
}

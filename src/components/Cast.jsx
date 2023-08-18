import { Link } from "react-router-dom";


export function Cast({ item }) {

  return (
    <Link className=" flex justify-center items-center flex-col 
    cursor-pointer" to={'https://en.wikipedia.org/wiki/' + item.person?.name} target="blank">
      <img src={item.person.image?.medium} alt="castImg" />
      <div className=" text-center text-white font-bold">{item.person?.name}</div>
    </Link>
  )
}

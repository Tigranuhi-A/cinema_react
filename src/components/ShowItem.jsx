import { useNavigate } from "react-router-dom";

export function ShowItem({ item }) {

  const navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center flex-col cursor-pointer
    border-2 rounded p-2 hover:scale-110 duration-700"
      onClick={() => navigate('/shows/' + item.id)}>
      <img src={item.image.medium} alt={item.name} />
      <div className=" text-white font-bold text-center">{item.name}</div>
    </div>
  )
}

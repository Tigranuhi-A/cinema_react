import { ShowItem } from "./ShowItem";

export function ShowsList({ shows }) {
  return (
    <div className=" grid gap-4 md:grid-cols-6 sm:grid-cols-3">
      {
        shows.map(el => <ShowItem key={el.id} item={el} />)
      }
    </div>
  )
}

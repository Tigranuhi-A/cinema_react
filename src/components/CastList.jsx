import { Cast } from "./Cast";


export function CastList({ cast }) {
  return (
    <div className=" grid gap-4 md:grid-cols-4 sm:grid-cols-2">
      {
        cast.map(el => <Cast key={el.person.id} item={el} />)
      }
    </div>
  )
}

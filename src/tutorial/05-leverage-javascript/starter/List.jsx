import { Person } from './Person';
import { people } from "../../../data"
const List = () => {
    return (
        <div>{people.map((per) => {
            return <Person  key={per.name} {...per}  />
        })} </div>
    )
}
export default List 

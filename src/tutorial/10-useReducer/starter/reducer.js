import { CLEAR_List, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from '../../../data';


//our new state value
const reducer = (state, action) => {
  if (action.type === CLEAR_List) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }

  //dispatching an action i'm not handling
  throw new ERROR(`no matching "${action.type}" - action type `);
};
export default reducer 

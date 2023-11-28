import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)
  const handleClick = () => {
    setTimeout(()=>{
      setValue(value+1);
    },3000)
   /*  setValue((currentState) => {
      const newSate = currentState + 1;
      return newSate
    }); */

  }

  return <div>
    <h2> {value}</h2>
    <button type="button" className="btn" onClick={handleClick}>
      increase </button>

  </div>;
};

export default UseStateGotcha;

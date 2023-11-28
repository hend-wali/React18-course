import { useState } from "react";

const ToggleChallenge = () => {

  const [value, setValue] = useState(true)

  const toggleAlert = () => {
    if(value){
      setValue(false);
      return;
    }setValue(true);
  }
  return <div>
    <button className="btn" type="button" onClick={toggleAlert}> click me </button>
    { value && <Alert />}
  </div>;
};
const Alert = () => {
  return <div className="alert alert-danger">
    heeeelo!!!
  </div>
}
export default ToggleChallenge;

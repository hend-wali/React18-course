import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'books'
  });

  const displayPerson = () => {
    setPerson({ name: 'hend', age: 24, hobby: 'music' })

  }
  return <>
    <h3> {person.name} </h3>
    <h3> {person.age} </h3>
    <h3> {person.hobby} </h3>
    <button className='btn' onClick={displayPerson}> show </button>
  </>;
};

export default UseStateObject;

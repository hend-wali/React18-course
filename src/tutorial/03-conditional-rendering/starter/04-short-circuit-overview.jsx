import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [text, setText] = useState('');
  const [name, setName] = useState("susan");

  return <div>
    {/*   0 ou 1 => 1  */}
    <h4> falsy OR :{text || "hello world"} </h4>
    {/*   0 et 1 => 0 */}
    <h4> falsy AND :{text && "hello world"} </h4>
    {/*   1 ou 2 => 1 */}
    <h4> truthy OR :{name || "hello world"} </h4>
    {/*     1 et 2 => 2 */}
    <h4> truthy AND :{name && "hello world"} </h4>

  </div>;
};
export default ShortCircuitOverview;

import React, { useState, useEffect } from 'react';


const Dynam = () => {
  const [json, setData] = useState({data:[]});

  useEffect(() => {
    async function getData() {
      const result = await fetch('/data');
      const json = await result.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <div>
      <p> Hello Dynam! </p>
      { json.data.map(each => <p key = {each}> { each } </p> )} 
    </div>
  )
}

export default Dynam;

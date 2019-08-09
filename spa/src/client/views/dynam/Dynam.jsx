import React, { useState, useEffect } from 'react';


const Dynam = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(async() => {
    const result = await fetch('/data');
    const json = await result.json();
    setData(result.data);
  }, []);

  return (
    <div>
      <p> Hello Dynam! </p>
      { data.hits.map(each => 
        <p key={each}> {each}</p>
      )}
    </div>
  )
}

export default Dynam;

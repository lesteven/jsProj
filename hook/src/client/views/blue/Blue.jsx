import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { clear, fetch2, fetchData, sayHello } from '../../redux/data';



const Blue = ({ sayHello, fetchData, data, fetch2, clear }) => {
  useEffect(() => {
    fetch2();
    return clear;
  }, []);

  return (
    <div >
      <p> hello blue! </p>
      { data.json.data.map(each => <p key = { each }> { each } </p> ) }
      <button onClick = { sayHello }> Click! </button>
    </div>
  )
}

const mapState = ({ data }) => ({
  data
})

const mapDispatch = {
  fetchData,
  sayHello,
  fetch2,
  clear
}

export default connect(mapState, mapDispatch)(Blue);

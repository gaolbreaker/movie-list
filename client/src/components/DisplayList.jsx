import React from 'react';

const DisplayList = (props) => {


  return (
    <ul>
    {props.movies.map((e) => <li>{e.title}</li>)}
    </ul>
  );
}

export default DisplayList;
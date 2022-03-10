import React from 'react';

const DisplayList = (props) => {
  console.log("curry beef");

  return (
    <ul>
      {props.movies.map((e, i) =>
        <li id={i}>
          {e.title}
          <button style={{
            backgroundColor: props.watched[e.title] ? 'lightgreen' : 'lightpink',
            color: props.watched[e.title] ? 'black' : 'grey',
            backgroundColor: props.watched[e.title] ? 'lightgreen' : 'lightpink',
            textTransform: props.watched[e.title] ? 'uppercase' : 'lowercase'
            }}
            onClick={props.handler}>Watched</button>
          {/* best way to keep track of button state? */}
        </li>
      )}
    </ul>
  );
}

export default DisplayList;


import React from 'react';

const WatchToggler = (props) => {

  var watchedStyle = {
    backgroundColor: props.displayWatched ? 'lightgreen' : 'lightpink',
    color: props.displayWatched ? 'black' : 'grey',
    backgroundColor: props.displayWatched ? 'lightgreen' : 'lightpink',
    textTransform: props.displayWatched ? 'uppercase' : 'lowercase'};
  var toWatchStyle = {
    backgroundColor: props.displayToWatch ? 'lightgreen' : 'lightpink',
    color: props.displayToWatch ? 'black' : 'grey',
    backgroundColor: props.displayToWatch ? 'lightgreen' : 'lightpink',
    textTransform: props.displayToWatch ? 'uppercase' : 'lowercase'};


  return (
    <div>
      <button style={watchedStyle} onClick={props.wdHandler}>Watched</button>
      <button style={toWatchStyle} onClick={props.twHandler}>To Watch</button>
    </div>
  );
}

export default WatchToggler;

// change color of the two buttons depending on the state

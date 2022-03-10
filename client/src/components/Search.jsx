import React from 'react';

const Search = (props) => {
  return (
    <div>
      <form>
        <input type="text" className="text-box" placeholder="Search..." />
        <input type="submit" value="Go!" onClick={props.handler} />
      </form>
    </div>
  );
}

export default Search;


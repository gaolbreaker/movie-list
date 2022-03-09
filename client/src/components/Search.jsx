import React from 'react';

const Search = (props) => {

  // NOTE TO SELF: probably have to put the handler in App.jsx

  var submitClicked = function(e) {
    e.preventDefault();
    var searchString = document.querySelector('.text-box').value;
    console.log(searchString);
    // filter props.movies using String.prototype.includes()
    var movieList = props.movies;
    var filteredMovieList = movieList.filter((e) => e.title.includes(searchString));
    this.setState({listToDisplay: filteredMovieList});
    console.log("Here's the filtered list")
    console.log(filteredMovieList);
    // use filteredMovieList to modify DisplayList

    // clear
    document.querySelector('.text-box').value('');
  }

  return (
    <div>
      <form>
        <input type="text" className="text-box" placeholder="Search..." />
        <input type="submit" value="Go!" onClick={submitClicked} />
      </form>
    </div>
  );
}

export default Search;


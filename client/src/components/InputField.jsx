import React from 'react';

const InputField = (props) => {

  var addBtnClicked = function(e) {
    e.preventDefault();
    var addString = document.querySelector('.add-movie-box').value;
    console.log(addString);
    // filter props.movies using String.prototype.includes()
    var newMovieList = props.movies;
    newMovieList.push({title: addString});
    console.log("Here's the supplemented list")
    console.log(newMovieList);
    // use filteredMovieList to modify DisplayList
  }

  return (
    <div>
      <form>
        <input type="text" className="add-movie-box" placeholder="Add movie title here..." />
        <input type="submit" value="Add!" onClick={addBtnClicked} />
      </form>
    </div>
  );
}

export default InputField;


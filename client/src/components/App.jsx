import React from 'react';
import Search from './Search.jsx';
import DisplayList from './DisplayList.jsx';
import InputField from './InputField.jsx';
import WatchToggler from './WatchToggler.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    var movies = [];
    this.state = {
      originalList: movies,
      listToDisplay: movies,
      currentList: movies,
      watched: {},
      displayWatched: true,
      displayToWatch: true
    };
  }

  searchClicked(e) {
    e.preventDefault();
    var searchString = document.querySelector('.text-box').value;
    var movieList = this.state.currentList;
    var filteredMovieList = movieList.filter((e) => e.title.includes(searchString));
    if (filteredMovieList.length === 0) {
      document.querySelector('.text-box').value = "Can't find anything!";
    } else {
      this.setState({listToDisplay: filteredMovieList});
      document.querySelector('.text-box').value = '';
    }
  }

  addBtnClicked(e) {
    e.preventDefault();
    var addString = document.querySelector('.add-movie-box').value;
    if(!!addString) {
      var newWatched = this.state.watched;
      newWatched[addString] = false;
      var newMovieList = [...this.state.currentList];
      newMovieList.push({title: addString});
      console.log(newMovieList);
      this.setState({currentList: newMovieList, listToDisplay: newMovieList, watched: newWatched});
      document.querySelector('.add-movie-box').value = '';
    }
  }

  watchBtnClicked(e) {
    e.preventDefault();
    console.log(e.target.previousSibling);
    var title = e.target.previousSibling;
    var newWatched = this.state.watched;
    if (newWatched[title.textContent] === undefined) {
      newWatched[title.textContent] = true;
    } else {
      newWatched[title.textContent] = !newWatched[title.textContent];
    }
    this.setState({watched: newWatched});
    console.log(newWatched);
  }

  displayWatchedBtnClicked(e) {
    // toggle this.state.displayWatched and re-render
    this.setState({displayWatched: !this.state.displayWatched});
    // filter currentList -> listToDisplay
    // if both displayWatched and displayToWatch are false
    if (!this.state.displayWatched && !this.state.displayToWatch) {
        // listToDisplay should be empty
        this.setState({listToDisplay: []});
        // else if both displayWatched and displayToWatch are true
    } else if (this.state.displayWatched && this.state.displayToWatch) {
        // listToDisplay should be the same as currentList
        var currentListClone = [...this.state.currentList];

        this.setState({listToDisplay: currentListClone});
        // else if displayWatched is true and displayToWatch is false
    } else if (this.state.displayWatched && !this.state.displayToWatch) {
        // listToDisplay should ONLY display movies in watched
        var currentListClone = [...this.state.currentList];
        // ***** WORK HERE *******
        var filteredMovieList = currentListClone.filter((e) => e.title.includes(searchString));
        this.setState({listToDisplay: currentListClone});
      // else if displayWatched is false and displayToWatch is true
    }
        // listToDisplay should ONLY display movies NOT in watched

  }

  displayToWatchBtnClicked(e) {
    this.setState({displayToWatch: !this.state.displayToWatch});

  }

  render() {
    return (
      <div>

        <div className="page-title">MovieList</div>
        <InputField movies={this.state.currentList} handler={this.addBtnClicked.bind(this)} />

        <Search movies={this.state.currentList} handler={this.searchClicked.bind(this)} />

        <WatchToggler wdHandler={this.displayWatchedBtnClicked.bind(this)} twHandler={this.displayToWatchBtnClicked.bind(this)} displayWatched ={this.state.displayWatched} displayToWatch={this.state.displayToWatch} />

        <DisplayList movies={this.state.listToDisplay} handler={this.watchBtnClicked.bind(this)} watched={this.state.watched}/>

      </div>
    );
  }
}

export default App;

/*
 I needed extra help on
  why do we need className and not class
  why we can't have adjacent elements in render()
  needing to run npm install first
  why can't i use forEach? I have to use map
  why do not need quotation marks around '<li>' tags when returning using map
  remember String.prototype.includes()
  how to clone an array

 */

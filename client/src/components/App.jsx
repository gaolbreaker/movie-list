import React from 'react';
import Search from './Search.jsx';
import DisplayList from './DisplayList.jsx';
import InputField from './InputField.jsx';

// use class based components to handle stateful component

class App extends React.Component {
  constructor(props) {
    super(props);
    var movies = [
      {title: 'Mean Girls'},
      {title: 'Hackers'},
      {title: 'The Grey'},
      {title: 'Sunshine'},
      {title: 'Ex Machina'},
    ];
    this.state = {originalList: movies,listToDisplay: movies, currentList: movies};
  }

  // methods

  render() {


    return (
      <div>
      <div className="page-title">MovieList</div>

      <InputField movies={this.state.currentList} />

      <Search movies={this.state.currentList}/>

      <DisplayList movies={this.state.listToDisplay} />



    </div>

    );
  }
}

// const App = (props) => {

// // deal with state: the original array, the searchFiltered array, and the supplemented array

//   var movies = [
//     {title: 'Mean Girls'},
//     {title: 'Hackers'},
//     {title: 'The Grey'},
//     {title: 'Sunshine'},
//     {title: 'Ex Machina'},
//   ];

//   return (


//     <div>
//       <div className="page-title">MovieList</div>

//       <InputField movies={movies} />

//       <Search movies={movies}/>

//       <DisplayList movies={movies} />



//     </div>
//   )
// };


export default App;

/*
 I needed extra help on
  why do we need className and not class
  why we can't have adjacent elements in render()
  needing to run npm install first
  why can't i use forEach? I have to use map
  why do not need quotation marks around '<li>' tags when returning using map
  remember String.prototype.includes()


 */
import React from 'react';

const InputField = (props) => {
  return (
    <div>
      <form>
        <input type="text" className="add-movie-box" placeholder="Add movie title here..." />
        <input type="submit" value="Add!" onClick={props.handler} />
      </form>
    </div>
  );
}

export default InputField;


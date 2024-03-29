import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search For a Video</label>
          <input
            value={term}
            type="text"
            onChange={event => setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

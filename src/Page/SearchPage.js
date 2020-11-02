import React, { useState } from "react";
import { Search, Mic } from "@material-ui/icons";
import "./Search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionType } from "../reducer";

function SearchPage({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search__input">
        <Search className="search__inputIcon" />
        <input onChange={(e) => setInput(e.target.value)} value={input} />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search__button">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I am Feeling Lucky Now !!</Button>
        </div>
      ) : (
        <div className="search__button">
          <Button
            className="search__buttonHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          ></Button>
          <Button className="search__buttonHidden" variant="outlined"></Button>
        </div>
      )}
    </form>
  );
}

export default SearchPage;

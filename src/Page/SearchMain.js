import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Description,
  Image,
  LocalOffer,
  Room,
  MoreVert,
} from "@material-ui/icons";
import "./SearchMain.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import SearchPage from "./SearchPage";
function SearchMain() {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img className="searchPage__logo" src="./img/logo.png" alt="" />
        </Link>
        <p className="banner">Cari Keperluan mu disini</p>
        <div className="searchPage__headerBody">
          <SearchPage hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <Search />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <Description />
                <Link to="/new">News</Link>
              </div>
              <div className="searchPage__option">
                <Image />
                <Link to="/image">Image</Link>
              </div>
              <div className="searchPage__option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searcgPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPageResults">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds untuk {term})
          </p>
          {data?.items.map((item) => (
            <div className="searchPageResult">
              <a href={item.link} className="searchPage__resultLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={
                        item.pagemap?.cse_image?.length > 0 &&
                        item.pagemap?.cse_image[0]?.src
                      }
                      className="searchPage__resultImage"
                      alt=""
                    />
                  )}
              </a>
              <a className="link" href={item.link}>
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchMain;

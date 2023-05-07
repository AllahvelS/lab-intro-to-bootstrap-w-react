import postData from "./data/posts.json";
import Table from "./Components/Table";
import React, { useState } from "react";
import Posts from "./Components/Posts";

function App() {
  const [search, setSearch] = useState("");


  //allows user to search for desired location simply by pressing enter key 
  //but as a result, post section doesnt immediately update when typing in search bar
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      setSearch(event.target.value);
    }
  }

  // filter posts based on search input
  const filteredPosts = postData.filter((post) => {
    return (
      post.location.toLowerCase().includes(search.toLowerCase()) ||
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  });
  
  return (
    <div className="container-fluid">
      <nav className="navbar">
        <h1>
          Travel<em className="script-font text-warning"> Blog</em>
        </h1>
        <a className="navbar-text" href="About.html">
          About
        </a>
        <a className="navbar-text" href="PopularPosts.html">
          Popular posts
        </a>
      </nav>

      <div className="bg-light border border-dark-border">
        <h3 className="script-font p-4 text-center">
          Travel is the only thing you buy that makes you richer...
        </h3>
      </div>

      <form>
        <div className="form-group d-flex align-items-center">
          <label>Search by location... </label>
          <input
            onKeyDown={handleKeyPress}
            type="text"
            placeholder="Search"
            name="search"
            className="form-control"
          />
          <button className="btn btn-warning p-1 m-2" type="submit">
            Cancel
          </button>
        </div>
      </form>

      <main className="row">
        <div className="col-8">
          {/* filteredPosts is now a prop{posts} */}
          <Posts posts={filteredPosts} />
        </div>
        <div className="col">
          <Table />
        </div>
      </main>
    <div className="bg-warning p-3 d-flex flex-row justify-content-center">
        <ul className="list-unstyled mr-5 m-0">
            <li id="footer-icons"> Contact Me </li>
            <li><a className="text-decoration-none text-dark" href=""> About The Author </a></li>
            <li> Copyright <strong>MyTravelBlog</strong> 2020 </li>
        </ul>
    </div>
    </div>
  );
}

export default App;

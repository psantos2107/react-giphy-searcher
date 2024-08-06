import { useState } from "react";

const SearchBar = ({ setGifs, setPageNumber, searchTerm, setSearchTerm }) => {
  const [inputSearch, setInputSearch] = useState("trending");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${inputSearch}&api_key=${
        import.meta.env.VITE_GIPHY_KEY
      }`
    )
      .then((res) => res.json())
      .then((queriedGifs) => {
        setGifs(queriedGifs.data);
        setPageNumber(1);
        setSearchTerm(inputSearch);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <search className="bg-black text-white mb-4 flex flex-col justify-evenly items-center p-1 md:text-2xl text-xl tracking-wider border-4 border-solid  border-slate-800 md:flex-row">
      <p className="text-center">
        Currently displaying results for "{searchTerm}".
      </p>
      <form
        className="flex items-center md:gap-8 flex-col md:flex-row gap-3"
        onSubmit={handleSubmit}
      >
        <h2>Search: </h2>
        <input
          className="block text-black p-1"
          type="text"
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <input
          className="block bg-gray-300 pt-2 pl-1 pr-1 text-black hover:bg-gray-400 hover:text-white hover:cursor-pointer"
          type="submit"
          value="SUBMIT"
        />
      </form>
    </search>
  );
};

export default SearchBar;

import GifContainer from "./../components/GifContainer";
import SearchBar from "../components/SearchBar";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [gifs, setGifs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchTerm, setSearchTerm] = useState("trending");

  useEffect(() => {
    fetch(
      `http://api.giphy.com/v1/gifs/trending?api_key=${
        import.meta.env.VITE_GIPHY_KEY
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        setGifs(res.data);
      });
  }, []);

  return (
    <main className="min-h-screen p-6">
      <h2 className="text-slate-950 md:text-5xl text-center mt-4 mb-6 text-3xl">
        Looking for the right gif for the perfect situation? Type in the search
        bar below and search for your gif!
      </h2>
      <SearchBar
        setGifs={setGifs}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {gifs.length > 0 ? (
        <GifContainer
          gifs={gifs}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ) : (
        <h2 className="text-slate-950 text-5xl text-center mt-12 mb-6">
          No gifs matched your search. Please search again ☹️
        </h2>
      )}
    </main>
  );
};

export default HomePage;

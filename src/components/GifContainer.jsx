import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const GifContainer = ({ gifs, pageNumber, setPageNumber }) => {
  /*pagination equations:  
  Limit to set number of gifs per page
  Start index and end index to determine how to divvy the main gifs array with slice
  slicedGifs to grab the piece of the array that corresponds to the page number
  */
  const limit = 10;
  let startIndex = (pageNumber - 1) * limit;
  let endIndex =
    pageNumber * limit < gifs.length ? pageNumber * limit : gifs.length;
  let slicedGifs = gifs.slice(startIndex, endIndex);

  return (
    <>
      {/* Pagination component */}
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        numItemStart={(pageNumber - 1) * 10 + 1}
        numItemEnd={endIndex}
        totalNumItems={gifs.length}
        limit={limit}
      />
      {/* Container with all the gifs
      Link attached to each gif for details page navigation */}
      <section className="w-full ml-auto mr-auto max-w-screen-xl columns-4">
        {slicedGifs.map((gif) => {
          return (
            <Link key={gif.id} to={`/giphy/${gif.id}`}>
              <img
                className="m-2 border-solid border-black border-2 hover:border-red-600 hover:border-solid hover:border-8 hover:cursor-pointer hover:opacity-80"
                src={gif.images.original.url}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default GifContainer;

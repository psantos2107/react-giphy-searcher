import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const [gifDetails, setGifDetails] = useState({});

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${
        import.meta.env.VITE_GIPHY_KEY
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        setGifDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="flex md:flex-row flex-col justify-evenly w-11/12 ml-auto mr-auto p-4 mt-8 bg-black text-white border-slate-700 border-solid border-4">
        <figure>
          <img
            className="block border-solid border-2 border-black"
            src={
              gifDetails.images?.downsized.url ||
              gifDetails.images?.original.url
            }
            alt={gifDetails.title}
          />
        </figure>
        <article className="flex flex-col md:mt-0 mt-6 justify-center md:items-center items-start m-2">
          <h2 className="md:text-4xl text-2xl">
            <u>DETAILS OF THIS GIF:</u>
          </h2>
          <p className="md:text-2xl text-xl mt-2">Title: {gifDetails?.title}</p>
          <p className="md:text-2xl text-xl mt-2">
            Rating: {gifDetails.rating}
          </p>
          <p className="md:text-2xl text-xl mt-2">
            Bitly URL: {gifDetails.bitly_url}
          </p>
          <p className="md:text-2xl text-xl mt-2">
            Embed URL: {gifDetails.embed_url}
          </p>
          <p className="md:text-2xl text-xl mt-2">
            User: {gifDetails.user?.display_name || "No information provided"}
          </p>
          <p className="md:text-2xl text-xl mt-2">
            User Description:{" "}
            {gifDetails.user?.description || "No description provided"}
          </p>
          <p className="md:text-2xl text-xl mt-2">
            User Profile URL:{" "}
            {gifDetails.user?.profile_url || "No information provided"}
          </p>
        </article>
      </section>
      <Link to="/">
        <button className="block mt-8 mb-8 bg-white text-4xl p-2 ml-auto mr-auto border-black border-2 border-solid hover:bg-black hover:text-zinc-100 hover:italic">
          Back to Main Page
        </button>
      </Link>
    </>
  );
};

export default DetailsPage;

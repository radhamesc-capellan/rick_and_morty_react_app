import React, { useState, useEffect } from "react";
import Characters from "./components/Characters";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import './components/Bg.css';


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacter(info.prev);
  };

  const onNext = () => {
    fetchCharacter(info.next);
  };

  useEffect(() => {
    fetchCharacter(initUrl);
  }, []);

  return (
    <>
      <NavBar brand="Rick and Morty App" />
      <div className="bg-image">
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
      </div>
    </>
  );
}

export default App;

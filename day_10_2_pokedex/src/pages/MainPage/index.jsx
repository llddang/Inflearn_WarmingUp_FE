import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchPokemon from '../../components/SearchPokemon';
import PokemonCard from '../../components/PokemonCard';

const MainPage = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [displayPokemon, setDisplayPokemon] = useState([]);

  const limitNum = 20;
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=1008&offset=0`;

  useEffect(() => {
    fetchPokeData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterDisplayedPokemonData = (allPokemon) => {
    const limit = displayPokemon.length + limitNum;
    const array = allPokemon.filter((_, index) => index + 1 <= limit);

    setDisplayPokemon(array);
  };

  const fetchPokeData = async () => {
    try {
      const response = await axios.get(url);
      setAllPokemon(response.data.results);
      filterDisplayedPokemonData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article className='mt-[60px] flex flex-col items-center'>
      <div className='py-4 flex justify-center'>
        <SearchPokemon
          allPokemon={allPokemon}
          setDisplayPokemon={setDisplayPokemon}
        />
      </div>
      <section className='flex gap-4 flex-wrap justify-center items-center'>
        {displayPokemon.map((item) => {
          return <PokemonCard key={item.url} url={item.url} />;
        })}
      </section>
      {allPokemon.length > displayPokemon.length &&
        displayPokemon.length >= limitNum && (
          <button
            onClick={() => filterDisplayedPokemonData(allPokemon)}
            className='px-4 py-2 bg-slate-800 text-white rounded my-4'
          >
            더 보기
          </button>
        )}
    </article>
  );
};

export default MainPage;

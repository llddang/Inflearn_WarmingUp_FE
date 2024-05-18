import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import LazyImage from './LazyImage';

const colors = {
  primary: '#ffcb05',
  second: '#3d7dca',
  third: '#003a70',
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#dfbc30',
  grass: '#7AC74C',
  ice: '#97d4d2',
  fighting: '#b83e3a',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
  none: '#BfBfBf',
};

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({ id: '', types: '', name: '' });

  const fetchPokeDetailData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPokemon({
        id: data.id,
        types: data.types[0].type.name,
        name: data.name.toUpperCase(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokeDetailData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`;

  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className='bg-slate-800 rounded-lg flex flex-col'
    >
      <span
        className='text-right px-2 py-1'
        style={{ color: colors[pokemon.types] }}
      >
        #{pokemon.id.toString().padStart(3, '00')}
      </span>
      <div className='w-36 px-4'>
        <LazyImage url={img} alt={pokemon.name} />
      </div>
      <div
        className='p-1 rounded-b-lg text-center text-white'
        style={{ backgroundColor: colors[pokemon.types] }}
      >
        {pokemon.name}
      </div>
    </Link>
  );
};

export default PokemonCard;

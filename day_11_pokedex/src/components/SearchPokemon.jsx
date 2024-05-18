import React, { useState } from 'react';

const SearchPokemon = ({ allPokemon, setDisplayPokemon }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filterTerm = (input) => {
    const value = input.toLowerCase();

    return value ? allPokemon.filter((item) => item.name.includes(value)) : [];
  };

  const checkEqualTerm = (input) => {
    const filteredArray = filterTerm(input);

    return filteredArray[0]?.name === input ? [] : filteredArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let text = searchTerm.trim();
    const pokemon = filterTerm(text);
    setDisplayPokemon(pokemon);
    setSearchTerm('');
  };

  return (
    <div className='w-fit'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          className='w-[200px] sm:w-[400px] bg-slate-500 text-white rounded text-center outline-none'
        />
        <button
          type='submit'
          className='bg-slate-900 text-white px-2 rounded-r absolute translate-x-[-100%]'
        >
          검색
        </button>
      </form>
      {checkEqualTerm(searchTerm).length > 0 && (
        <div className='w-[200px] sm:w-[400px] relative'>
          <div className='w-3 h-3 absolute bg-slate-700 rotate-45 left-[50%] translate-x-[-50%] translate-y-2' />
          <ul className='w-[200px] max-h-[150px] p-2 bg-slate-700 rounded-lg absolute flex flex-col left-[50%] translate-x-[-50%] translate-y-3 overflow-auto scrollbar-hide text-white'>
            {checkEqualTerm(searchTerm).map((item, idx) => {
              return (
                <li
                  key={`li-search-term-${idx}`}
                  className='text-center p-[2px] hover:bg-slate-600'
                >
                  <button onClick={() => setSearchTerm(item.name)}>
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;

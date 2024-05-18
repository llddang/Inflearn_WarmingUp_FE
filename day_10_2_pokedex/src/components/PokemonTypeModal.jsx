import React, { useEffect, useState } from 'react';

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

const PokemonTypeModal = ({ damageRelations, handleModalOpen }) => {
  const [weakRelations, setWeakRelations] = useState([]);
  const [resistantRelations, setResistantRelations] = useState([]);
  const [immuneRelations, setImmuneRelations] = useState([]);

  useEffect(() => {
    const damage = damageRelations[0];
    const weak = damage.double_damage_from.map((item) => item.name);
    const resistant = damage.half_damage_from.map((item) => item.name);
    const immune = damage.no_damage_from.map((item) => item.name);

    setWeakRelations(weak.length === 0 ? ['none'] : weak);
    setResistantRelations(resistant.length === 0 ? ['none'] : resistant);
    setImmuneRelations(immune.length === 0 ? ['none'] : immune);
  }, [damageRelations]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  console.log(damageRelations);
  return (
    <article className='w-full h-[100vh] bg-slate-800 flex justify-center items-center'>
      <section className='w-[450px] bg-white rounded-lg p-2 flex flex-col items-center'>
        <div className='w-full px-2 flex justify-between items-center font-bold'>
          <span className='cursor-default'>데미지 관계</span>
          <span
            onClick={() => handleModalOpen(false)}
            className='cursor-pointer'
          >
            X
          </span>
        </div>
        <span>Weak</span>
        <div className='flex gap-2 mb-2'>
          {weakRelations.map((item) => {
            return (
              <span
                key={`Weak-${item}`}
                className='px-2 rounded-2xl'
                style={{ backgroundColor: colors[item] }}
              >
                {capitalize(item)}
                <span className='text-xs ml-1 px-1 rounded-xl bg-white bg-opacity-30'>
                  2x
                </span>
              </span>
            );
          })}
        </div>
        <span>Resistant</span>
        <div className=' flex gap-2 mb-2'>
          {resistantRelations.map((item) => {
            return (
              <span
                key={`Resistant-${item}`}
                className='px-2  rounded-2xl'
                style={{ backgroundColor: colors[item] }}
              >
                {capitalize(item)}
                <span className='text-xs ml-1 px-1 rounded-xl bg-white bg-opacity-30'>
                  2x
                </span>
              </span>
            );
          })}
        </div>
        <span>Immune</span>
        <div className='flex gap-2 mb-2'>
          {immuneRelations.map((item) => {
            return (
              <span
                key={`Immune-${item}`}
                className='px-2  rounded-2xl'
                style={{ backgroundColor: colors[item] }}
              >
                {capitalize(item)}
                <span className='text-xs ml-1 px-1 rounded-xl bg-white bg-opacity-30'>
                  2x
                </span>
              </span>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default PokemonTypeModal;

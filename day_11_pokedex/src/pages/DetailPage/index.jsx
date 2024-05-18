import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoScaleOutline } from 'react-icons/io5';
import { LiaRulerVerticalSolid } from 'react-icons/lia';
import LazyImage from '../../components/LazyImage';
import PokemonTypeModal from '../../components/PokemonTypeModal';

const stat = [
  { id: 'hp', name: 'Hit Points', basePoint: 255 },
  { id: 'attack', name: 'Attack', basePoint: 255 },
  { id: 'defense', name: 'Defense', basePoint: 255 },
  { id: 'specialAttack', name: 'Special Attack', basePoint: 255 },
  { id: 'specialDefense', name: 'Special Defense', basePoint: 255 },
  { id: 'speed', name: 'Speed', basePoint: 255 },
];

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

const DetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pokeDetail, setPokeDetail] = useState({
    id: '',
    name: '',
    description: '',
    img: '',
    type: '',
    height: 0,
    weight: 0,
    abilities: [],
    images: [],
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
    damageRelations: [],
  });
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetchPokeDetailData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const formatPokeStat = (data, stat) => {
    return data.stats.filter((st) => st.stat.name === stat)[0].base_stat;
  };

  const formatPokeAbilities = (data) => {
    return data.abilities.map((ab) => ab.ability.name.replaceAll('-', ' '));
  };

  const formatPokeImages = (data) => {
    let array = [
      data.sprites.back_default,
      data.sprites.back_female,
      data.sprites.back_shiny,
      data.sprites.back_shiny_female,
      data.sprites.front_default,
      data.sprites.front_female,
      data.sprites.front_shiny,
      data.sprites.front_shiny_female,
    ];

    array = array.filter((item) => item !== null);

    console.log('array: ', array);
    return array;
  };

  const fetchPokeDetailData = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
      const response = await axios.get(url);
      const data = response.data;

      const DamageRelations = await Promise.all(
        data.types.map(async (i) => {
          const type = await axios.get(i.type.url);

          return type.data.damage_relations;
        })
      );

      const formattedDetail = {
        id: data.id,
        name: data.name,
        description: await getPokemonDescription(id),
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        type: data.types[0].type.name,
        height: data.height / 10,
        weight: data.weight / 10,
        abilities: formatPokeAbilities(data),
        images: formatPokeImages(data),
        hp: formatPokeStat(data, 'hp'),
        attack: formatPokeStat(data, 'attack'),
        defense: formatPokeStat(data, 'defense'),
        specialAttack: formatPokeStat(data, 'special-attack'),
        specialDefense: formatPokeStat(data, 'special-defense'),
        speed: formatPokeStat(data, 'speed'),
        damageRelations: DamageRelations,
      };

      setPokeDetail(formattedDetail);
    } catch (error) {
      console.error(error);
    }
  };

  const formatPokeDescription = (data) => {
    const koreanDescriptions = data
      .filter((text) => text.language.name === 'ko')
      .map((text) => text.flavor_text.replace(/\r|\n|\f/g, ' '));

    return koreanDescriptions;
  };

  const getPokemonDescription = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

    const response = await axios.get(url);

    const descriptions = formatPokeDescription(
      response.data.flavor_text_entries
    );

    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };

  return (
    <>
      {modalOpen ? (
        <PokemonTypeModal
          damageRelations={pokeDetail.damageRelations}
          handleModalOpen={setModalOpen}
        />
      ) : (
        <article className='mt-[60px] m-12 md:m-20 relative'>
          <div
            className='absolute w-52 top-2 left-[50%] translate-x-[-50%]'
            onClick={() => setModalOpen(true)}
          >
            <LazyImage url={pokeDetail.img} alt={pokeDetail.name} />
          </div>
          {pokeDetail.id !== 1 && (
            <Link
              to={`/pokemon/${pokeDetail.id - 1}`}
              className='absolute top-[50%] translate-y-[-50%] text-white text-6xl'
            >
              <MdOutlineKeyboardArrowLeft />
            </Link>
          )}
          {pokeDetail.id !== 1008 && (
            <Link
              to={`/pokemon/${pokeDetail.id + 1}`}
              className='absolute right-0 top-[50%] translate-y-[-50%] text-white text-6xl'
            >
              <MdOutlineKeyboardArrowRight />
            </Link>
          )}

          <div
            className='w-full pt-2 pb-24 px-2 flex justify-between items-center text-white'
            style={{ backgroundColor: colors[pokeDetail.type] }}
          >
            <Link to={'/'} className='text-xl'>
              <FaArrowLeft className='inline' /> {pokeDetail.name}
            </Link>
            <span className='text-sm'>
              #{pokeDetail.id.toString().padStart(3, '00')}
            </span>
          </div>
          <div className='w-full bg-slate-800 flex flex-col gap-3 items-center'>
            <span
              className='mt-20 px-2 rounded-lg w-fit'
              style={{ backgroundColor: colors[pokeDetail.type] }}
            >
              {pokeDetail.type}
            </span>
            <span style={{ color: colors[pokeDetail.type] }}>정보</span>
            <section className='w-full max-w-[450px] text-white flex justify-around'>
              <div className='flex flex-col items-center'>
                <span className='text-xs'>Weight</span>
                <span className='text-xl flex items-center gap-1'>
                  <IoScaleOutline /> {pokeDetail.weight}kg
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-xs'>Height</span>
                <span className='text-xl flex items-center'>
                  <LiaRulerVerticalSolid /> {pokeDetail.height}m
                </span>
              </div>
              <div className='flex flex-col items-center'>
                <span className='text-xs'>Abilities</span>
                {pokeDetail?.abilities.map((ability) => {
                  return (
                    <span className='text-xs' key={ability}>
                      {ability}
                    </span>
                  );
                })}
              </div>
            </section>
            <span style={{ color: colors[pokeDetail.type] }}>기본 능력치</span>
            <section className='text-md grid grid-cols-[150px_20px_150px_20px] gap-x-2 text-white'>
              {stat.map((st) => {
                const statPoint = pokeDetail[st.id];
                return (
                  <>
                    <span key={`${st.id}-name`} className='w-40'>
                      {st.name}
                    </span>
                    <span key={`${st.id}-statPoint`}>{statPoint}</span>
                    <span key={`${st.id}-graph`} className='relative'>
                      <span className='w-full h-2 absolute top-[50%] translate-y-[-50%] bg-slate-600 rounded' />
                      <span
                        className='h-2 absolute top-[50%] translate-y-[-50%] rounded'
                        style={{
                          width: `${Math.floor(
                            (statPoint / st.basePoint) * 100
                          )}%`,
                          backgroundColor: colors[pokeDetail.type],
                        }}
                      />
                    </span>
                    <span key={`${st.id}-basePoint`}>{st.basePoint}</span>
                  </>
                );
              })}
            </section>
            <span style={{ color: colors[pokeDetail.type] }}>설명</span>
            <span className='max-w-[500px] text-white text-center text-base'>
              {pokeDetail.description}
            </span>
            <section className='my-6 md:my-16 px-4 flex w-full overflow-hidden justify-center'>
              {pokeDetail.images.map((url, idx) => {
                return (
                  <div key={url} className='w-20 md:w-32'>
                    <LazyImage
                      url={url}
                      alt={`${pokeDetail.name}-img-${idx}`}
                    />
                  </div>
                );
              })}
            </section>
          </div>
        </article>
      )}
    </>
  );
};

export default DetailPage;

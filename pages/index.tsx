import { NextPage, GetStaticProps } from 'next';

import { Grid, Image } from '@nextui-org/react';

import { Layout, PokemonCard } from '../components';
import { pokeApi } from '../api';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage : NextPage<Props> = ({ pokemons }) => {
  // console.log(pokemons);
  return (
    <Layout title='Listado de Pokémons'>

      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={ pokemon } />
          ))
        }
      </Grid.Container>

    </Layout>
  );

};

/**
 * ! Nada de lo contenido en la siguiente función llega al cliente.
 * ! Excepción con las props.
 */

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  // console.log( data );
  const pokemons : SmallPokemon[] = data.results.map( (pokemon, i) => ({
    ...pokemon,
    id : i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`

  }));

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg

  return {
    props: {
      pokemons,
    }
  };

};

export default HomePage;
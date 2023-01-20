import { useState, useEffect } from 'react';
import { Layout, NoFavorites } from '../../components';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/ui/FavoritePokemons';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {

        setFavoritePokemons( localFavorites.pokemons() );

    }, []);

    return (
        <Layout title='Pokémons - Favoritos'>
            
            {
                (favoritePokemons.length === 0)
                    ? <NoFavorites />
                    : <FavoritePokemons pokemons={ favoritePokemons } /> 
            }
            

        </Layout>
    );

};

export default FavoritesPage;
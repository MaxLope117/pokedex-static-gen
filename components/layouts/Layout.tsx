import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface Props {
    children : ReactNode;
    title? : string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout : FC<Props> = ({ children, title }) => {
    // console.log(origin);
    return (
    
        <>
            <Head>
                <title>{ title || 'PokemonApp' }</title>
                <meta name="author" content="Maximiliano Lope" />
                <meta name="description" content={`Información sobre el pokemon ${ title }`} />
                <meta name="keyword" content={`${ title }, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${ title }`} />
                <meta property="og:description" content={`Está es la página sobre ${ title }`} />
                <meta property="og:image" content={ `${ origin }/img/banner.png` } />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>

    );

};

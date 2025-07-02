import { useEffect, useState } from "react";

export function Card({pokemonNames}: {pokemonNames: string[]}) {
    const [pokemonData, setPokemonData] = useState([] as any[]);

    useEffect(() => {
        (async () => {
            const results = await Promise.all(pokemonNames.map(async name => {
                return (await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)).json()
            }));
            setPokemonData(results)
        })()
        
    }, [pokemonNames])

    return (
        <div>
            {pokemonData.map(({name, sprites}) => {
                
                const imgSrc = sprites.front_default;

                return (
                    <div className="flex "> 
                        {name}
                        <img src={imgSrc}>
                        </img>
                    </div>
                )
            })}
        </div>
    )
}
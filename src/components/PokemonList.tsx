import { useEffect, useState } from "react";

export function PokemonList({pokemonData} : {pokemonData: string[]}) {
    const [currentPokemon, setCurrentPokemon] = useState("");
    const [pokemon, setPokemon] = useState();

    const handleChange = (e) => {
        setCurrentPokemon(e.target.value)
    }

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemon}`).then(
            response => response.json()
        ).then(data => {
            setPokemon(data);
            console.log(data)
        })
    }, [currentPokemon])

    return <div className="flex flex-col">
        <select value={currentPokemon} onChange={handleChange}>
            {pokemonData.map(name => (
                <option value={name}>{name}</option>
            ))}
        </select>
        {pokemon && <img src={pokemon.sprites?.front_default}></img>}
    </div>
}
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { NavBar } from "./NavBar";
import { PokemonList } from "./PokemonList";

export function Main() {
    const [tab, setTab] = useState("");
    
    const [pokemonNames, setPokemonNames] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon").then(
        response => response.json()
        ).then(data => {
        setPokemonNames(data["results"].map(({name} : {name: string}) => name))
        })
    }, [])

    return (
        <div className="flex flex-col w-full h-screen">
            <NavBar tabs={["Dropdown", "Card"]} tab={tab} setTab={setTab}/>
            {tab === "Dropdown" && <PokemonList pokemonData={pokemonNames}/>}
            {tab === "Card" && <Card pokemonNames={pokemonNames}/>}
        </div>
    )
}
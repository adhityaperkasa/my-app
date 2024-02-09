import React, { useState } from "react";
import axios from "axios";

export const MyContext = React.createContext({})

export const MyContextProvider = ({children}) => {
    const [pokemonData, setPokemonData] = useState(0);

    const fetchData = async() =>{
    try{
        const response =await axios.get(
            "https://pokeapi.co/api/v2/pokemon/ditto"
        );
        setPokemonData(response.data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
    };

    const global ={
        someValue :'Nilai Dari context',
        secondValue :"kedua",
        pokemonData,
        fetchData,

    };
  
    const provider = {
        ...global,
    }

    return(
        <MyContext.Provider value={provider}>
        {children}
        </MyContext.Provider>
    );
};

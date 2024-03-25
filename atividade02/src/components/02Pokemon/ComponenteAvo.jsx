import React, { createContext, useState } from "react";
import ComponenteFilho from "./ComponenteFilho";

export const ContadorContext = createContext();

const ComponenteAvo = () => {
    const [contador, setContador] = useState(1);

    const incrementarContador = () => {
        setContador(contador + 1);
    };

    return (
        <ContadorContext.Provider value={{ contador, incrementarContador }}>

            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + contador + ".png"}
                alt="Pokémon" />
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <ComponenteFilho />
        </ContadorContext.Provider>
    );
};

export default ComponenteAvo;

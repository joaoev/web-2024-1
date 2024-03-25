import React from "react";
import { ContadorContext } from "./ComponenteAvo";

const ComponenteNeto = () => {
    return (
        <div>
            <h2>Componente Neto</h2>
            <ContadorContext.Consumer>
                {({ contador }) => (
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (contador + 2) + ".png"}
                        alt="Pokémon" />
                )}
            </ContadorContext.Consumer>
        </div>
    );
};

export default ComponenteNeto;
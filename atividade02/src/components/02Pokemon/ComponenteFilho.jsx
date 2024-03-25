import React from "react";
import ComponenteNeto from "./ComponenteNeto";
import { ContadorContext } from "./ComponenteAvo";

const ComponenteFilho = () => {
    return (
        <div>
            <h2>Componente Filho</h2>
            <ContadorContext.Consumer>
                {({ contador }) => (
                    <div>
                        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (contador + 1) + ".png"}
                            alt="Pokémon" />
                    </div>
                )}
            </ContadorContext.Consumer>
            <ComponenteNeto />
        </div>
    );
};

export default ComponenteFilho;
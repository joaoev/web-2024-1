import { Children } from 'react';

function Hero({ name, img }) {
    return (
        <>
            <h2>Hero</h2>
            <h4>{name}</h4>
            <img src={img} alt="Hero" />
        </>
    )
}

function Enemy({ name, img }) {
    return (
        <>
            <h2>Enemy</h2>
            <h4>{name}</h4>
            <img src={img} alt="Enemy" />
        </>
    )
}

function Arena({ name }) {
    return (
        <>
            <h4>Arena: {name}<h4/>
            <Hero name="Batman" img="./batman.png" />
            <Enemy name="Coringa" img="./coringa.png" />
        </>
    )
}

function World({ children }) {
    return (
        <>
            {children}
        </>
    )
}

export { Hero, Enemy, Arena, World }
import { Children } from 'react';

function Hero({ name, img }) {
    console.log(img)
    console.log(typeof img)
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
            <Hero name="Batman" img="./batman.png" />
            <Enemy name="Coringa" img="./coringa.png" />
        </>
    )
}

function World() {
    return (
        <>
            <Arena name="Arena 01" />
            <Arena name="Arena 02" />
            <Arena name="Arena 03" />
        </>
    )
}

export { Hero, Enemy, Arena, World }
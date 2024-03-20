function PlacaMae({ nome, preco }) {
    return (
        <>
            <h2>Placa-mãe: {nome} - R$ {preco}</h2>
        </>
    )
}

function Memoria({ nome, preco }) {
    return (
        <>
            <h2>Memória: {nome} - R$ {preco}</h2>
        </>
    )
}

function PlacaDeVideo({ nome, preco }) {
    return (
        <>
            <h2>Placa de video: {nome} - R$ {preco}</h2>
        </>
    )
}

export { PlacaMae, Memoria, PlacaDeVideo }
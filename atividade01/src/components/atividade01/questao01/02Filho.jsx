export function Filho({ altura, peso }) {

    const calcularIMC = (altura, peso) => {
        return peso / (altura * altura);
    };

    const imc = calcularIMC(altura, peso);

    let mensagem;
    if (imc < 18) {
        mensagem = "Abaixo do peso"
    } else if (imc > 25) {
        mensagem = "Acima do peso"
    } else {
        mensagem = "Peso ideal"
    }
    return (
        <>
            <h3>Altura: {altura} m</h3>
            <h3>Peso: {peso} Kg</h3>
            <h3>IMC: {imc.toFixed(2)}</h3>
            <h3>{mensagem}</h3>
        </>
    )
}
import { Memoria, PlacaDeVideo, PlacaMae } from "./components/atividade01/02MeuPC";
import { World } from "./components/atividade01/03Batalha";
import { Pai } from "./components/atividade01/questao01/01Pai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center><h1>Atividade 01</h1></center>
        <hr />
        <h2>Questão 01</h2>
        <Pai />
        <hr />
        <h2>Questão 02</h2>
        <PlacaMae
          nome="Gigabyte B550M Aorus Elite"
          preco={939.99} />

        <PlacaDeVideo
          nome=" RTX 4060 Ti VENTUS 3X 8G OC MSI NVIDIA GeForce"
          preco={2549.99}
        />

        <Memoria
          nome=" XPG Lancer, RGB, 16GB, 5200MHz, DDR5, CL38"
          preco={499.99}
        />

        <hr />
        <h2>Questão 03</h2>
        <World />
      </header>
    </div>
  );
}

export default App;

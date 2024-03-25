import ComponenteAvo from "./components/02Pokemon/ComponenteAvo";
import ClassA from "./components/ClassContext";
import FunctionContextA from "./components/FunctionContextA";

function App() {
  return (
    <div>
      <center><h1>Atividade 02</h1></center>
      <hr />
      <h2>Questão 01</h2>
      <h3>Forma atual</h3>
      <FunctionContextA />
      <h3>Forma legada</h3>
      <ClassA />
      <hr />
      <h2>Questão 02 e 03</h2>
      <ComponenteAvo />
      <hr />

    </div>
  );
}

export default App;

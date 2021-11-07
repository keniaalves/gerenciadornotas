import { Component, React } from "react";
import ListaDeNotas from "./Components/ListaDeNotas";
import FormularioCadastro from "./Components/FormularioCadastro";
import "./assets/App.css"
class App extends Component {
  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas:[]
    };
  }
  criarCard(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarCard={this.criarCard.bind(this)} />
        <ListaDeNotas notas={this.state.notas}/>
    </section>
    );
  }
}

export default App;

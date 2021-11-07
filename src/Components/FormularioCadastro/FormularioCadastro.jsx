import React, { Component } from "react";
import "./estilo.css"

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo="";
        this.text="";
    }
    _handleMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    _handleMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }
    _handleCriaCard(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarCard(this.titulo, this.texto);
    }
    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this._handleCriaCard.bind(this)}
            >
                <input 
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15}
                    placeholder="Escreva sua nota"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;
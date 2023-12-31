import React, { Component } from "react";
import './Pokecard.css';
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let addZeros = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${addZeros(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <div>Type: {this.props.type}</div>
                <div>Exp: {this.props.exp}</div>
            </div>
        )
        
    }
}

export default Pokecard;
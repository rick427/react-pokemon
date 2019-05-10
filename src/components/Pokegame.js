import React, { Component } from 'react';
import Pokedecks from './Pokedecks';

class Pokegame extends Component {
 static defaultProps = {
    pokemons : [
        {id: 4, name: "Charmander", type: 'fire', base_exp: 62},
        {id: 7, name: "Squirtle", type: 'water', base_exp: 63},
        {id: 11, name: "Metapod", type: 'bug', base_exp: 72},
        {id: 12, name: "Butterfree", type: 'flying', base_exp: 178},
        {id: 25, name: "Pikachu", type: 'electric', base_exp: 112},
        {id: 39, name: "Jigglypuff", type: 'normal', base_exp: 95},
        {id: 94, name: "Genger", type: 'poison', base_exp: 225},
        {id: 133, name: "Eevee", type: 'normal', base_exp: 65},
    ]
 }
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while(hand1.length < hand2.length){
        let randIndx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randIndx, 1)[0];
        hand1.push(randPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemons) => exp + pokemons.base_exp, 0);
    let exp2 = hand2.reduce((exp, pokemons) => exp + pokemons.base_exp, 0);
    
    return (
      <div>
        <Pokedecks pokemons={hand1} exp={exp1} isWinner={exp1 > exp2}/>
        <Pokedecks pokemons={hand2} exp={exp2} isWinner={exp2 > exp1}/>
      </div>
    )
  }
}
export default Pokegame;

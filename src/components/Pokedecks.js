import React, { Component } from 'react';
import Pokecard from './Pokecard';

class Pokedecks extends Component {
  render() {
      let title;
      if(this.props.isWinner){
          title = <h1 className="pokedex-winner">Winning Hand</h1>
      }
      else{
        title = <h1 className="pokedex-loser">Losing Hand</h1> 
      }
    return (
      <div className="pokedecks">
         {title}
        <h3 className="pokedex-exp">Total Experience: {this.props.exp}</h3>
        <div className="pokedecks-cards">
            {this.props.pokemons.map((pokemon) => (
                <Pokecard
                    key={pokemon.id} 
                    id={pokemon.id} 
                    name={pokemon.name} 
                    type={pokemon.type} 
                    exp={pokemon.base_exp}
                />
            ))}
        </div>
      </div>
    )
  }
}
export default Pokedecks;

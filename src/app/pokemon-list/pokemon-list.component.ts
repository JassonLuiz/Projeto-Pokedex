import { Component } from '@angular/core';
import { Type } from "../../_model/Type";
import { Pokemon } from "../../_model/Pokemon";
import { PokemonService } from 'src/_service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
   /* public pokemons: Pokemon[] = [{
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      number: 1,
      name: "Bulbasur",
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
      number: 2,
      name: "Ivysaur",
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
      number: 3,
      name: "Venosaur",
      types: [
        Type.Grass,
        Type.Poison
      ],
    },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      number: 1,
      name: "Charmander",
      types: [
        Type.Fire,
      ],
    },
  ];
 */

  constructor(
    public pokemonService: PokemonService,
  ){

  }
}

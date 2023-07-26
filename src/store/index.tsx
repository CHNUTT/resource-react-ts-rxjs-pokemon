import { BehaviorSubject } from 'rxjs';


export interface Pokemon {
	id: number;
	name: string;
	type: string[];
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
}

export const rawPokemon$ = new BehaviorSubject<any>([]);

fetch('/mock/pokemon-data.json')
  .then(res => res.json())
  .then(data => rawPokemon$.next(data));
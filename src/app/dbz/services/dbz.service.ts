import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({ providedIn: 'root' })
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character };

    console.log('Main page > onNewCharacter: ', newCharacter);
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    console.log('Main page > deleteCharacterById: ', id);

    this.characters = this.characters.filter(character => character.id !== id);
    // this.characters.splice(index, 1);
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 40;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  changeHero(): void {
    // throw 'Method not implemented';
    this.name = "Spiderman"
  }
  changeAge(): void {
    this.age = 25;
  }
}

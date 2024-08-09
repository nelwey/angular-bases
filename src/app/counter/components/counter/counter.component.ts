import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>2. app counter</h3>
  <hr>
  <p>Counter: {{counter}}</p>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }
  reset() {
    this.counter = 10;
  }
}

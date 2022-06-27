import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); //use of EventEmitter to share data betwen components
  //eventemmitter holds a number as a value
  //remmeber to use @Output to for the intervalFired to be accesed by other components
  interval;
  lastNumber = 0;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.interval);
  }
}

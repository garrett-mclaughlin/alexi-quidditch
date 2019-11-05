import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-quaffle',
  templateUrl: './quaffle.component.html',
  styleUrls: ['./quaffle.component.css']
})
export class QuaffleComponent implements AfterViewInit {
  constructor() {}

  @Input()
  public players: string[] = [];

  @Output()
  public giveQuaffle = new EventEmitter();

  chasers = [];

  ngAfterViewInit() {
    this.loop();
  }

  async loop() {
    this.chasers = this.players.filter(p => p.includes('chaser'));
    const random = this.chasers[
      Math.floor(Math.random() * this.chasers.length)
    ];
    // send quaffle
    const delay = Math.random() * 1000 + 2000;
    await new Promise(resolve => setTimeout(resolve, delay));

    this.giveQuaffle.emit(random);
    this.loop();
  }
}

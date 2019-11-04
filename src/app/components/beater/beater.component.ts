import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beater',
  templateUrl: './beater.component.html',
  styleUrls: ['./beater.component.css']
})
export class BeaterComponent implements OnInit {
  @Input()
  public protectedFromBludger = false;

  @Input()
  public players: string[];

  @Output()
  fallenOffBroom = new EventEmitter();

  @Output()
  savePlayer = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.loop();
  }

  async loop() {
    const player = this.players[
      Math.floor(Math.random() * this.players.length)
    ];
    this.savePlayer.emit(player);
    const delay = Math.random() * 2000 + 2000;
    await new Promise(resolve => setTimeout(resolve, delay));
    this.loop();
  }

  async fallCheck() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!this.protectedFromBludger) {
      this.fallenOffBroom.emit('true');
    } else {
      this.protectedFromBludger = false;
    }
  }
}

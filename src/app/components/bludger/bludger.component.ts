import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bludger',
  templateUrl: './bludger.component.html',
  styleUrls: ['./bludger.component.css']
})
export class BludgerComponent implements OnInit {
  constructor() {}

  @Input()
  public players: string[];

  @Output() attackPlayer = new EventEmitter();

  ngOnInit() {
    this.loop();
  }

  async loop() {
    const player = this.players[
      Math.floor(Math.random() * this.players.length)
    ];
    this.attackPlayer.emit(player);
    const delay = Math.random() * 5000 + 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
    this.loop();
  }
}

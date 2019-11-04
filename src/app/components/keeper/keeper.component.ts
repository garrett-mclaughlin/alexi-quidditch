import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css']
})
export class KeeperComponent implements OnInit {
  @Input()
  public protectedFromBludger = false;

  @Output()
  fallenOffBroom = new EventEmitter();

  @Output()
  blockingShot = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.blockShot();
  }

  async fallCheck() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!this.protectedFromBludger) {
      this.fallenOffBroom.emit('true');
    } else {
      this.protectedFromBludger = false;
    }
  }

  async blockShot() {
    const delay = Math.random() * 2000 + 2000;
    await new Promise(resolve => setTimeout(resolve, delay));
    this.blockingShot.emit();
    this.blockShot();
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chaser',
  templateUrl: './chaser.component.html',
  styleUrls: ['./chaser.component.css']
})
export class ChaserComponent implements OnInit {
  public protectedFromBludger = false;

  hasQuaffle = false;

  @Output()
  fallenOffBroom = new EventEmitter();

  @Output()
  takingShot = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public takeShot() {
    this.hasQuaffle = true;
    this.takingShot.emit();
    setTimeout(() => (this.hasQuaffle = false), 2000);
  }

  async fallCheck() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!this.protectedFromBludger) {
      this.fallenOffBroom.emit();
    } else {
      this.protectedFromBludger = false;
    }
  }
}

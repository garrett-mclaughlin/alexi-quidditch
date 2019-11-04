import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chaser',
  templateUrl: './chaser.component.html',
  styleUrls: ['./chaser.component.css']
})
export class ChaserComponent implements OnInit {
  @Input()
  public protectedFromBludger = false;

  @Output()
  fallenOffBroom = new EventEmitter();

  @Output()
  takingShot = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public takeShot() {
    this.takingShot.emit();
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

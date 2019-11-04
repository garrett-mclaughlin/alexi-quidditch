import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.css']
})
export class SeekerComponent implements OnInit {
  @Input()
  public protectedFromBludger = false;

  @Output()
  fallenOffBroom = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  async fallCheck() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!this.protectedFromBludger) {
      this.fallenOffBroom.emit('true');
    } else {
      this.protectedFromBludger = false;
    }
  }
}

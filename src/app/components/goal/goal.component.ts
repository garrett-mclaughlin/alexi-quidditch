import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  @Input()
  public keeperProtection = true;

  @Output()
  public shotBlocked = new EventEmitter();

  @Output()
  public goalScored = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  async incomingShot() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!this.keeperProtection) {
      this.goalScored.emit();
    } else {
      this.shotBlocked.emit();
      this.keeperProtection = false;
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  constructor() {}

  @Input()
  public team1points = 0;

  @Input()
  public team2points = 0;

  ngOnInit() {}
}

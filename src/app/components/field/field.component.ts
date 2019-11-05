import { Component, OnInit, ViewChild } from '@angular/core';
import { BeaterComponent } from '../beater/beater.component';
import { BludgerComponent } from '../bludger/bludger.component';
import { ChaserComponent } from '../chaser/chaser.component';
import { GoalComponent } from '../goal/goal.component';
import { KeeperComponent } from '../keeper/keeper.component';
import { QuaffleComponent } from '../quaffle/quaffle.component';
import { SeekerComponent } from '../seeker/seeker.component';
import { SnitchComponent } from '../snitch/snitch.component';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
  constructor() {}

  gameInProgress = true;

  @ViewChild('chaser1A', { static: false }) chaser1A: ChaserComponent;
  @ViewChild('chaser1B', { static: false }) chaser1B: ChaserComponent;
  @ViewChild('chaser1C', { static: false }) chaser1C: ChaserComponent;
  @ViewChild('chaser2A', { static: false }) chaser2A: ChaserComponent;
  @ViewChild('chaser2B', { static: false }) chaser2B: ChaserComponent;
  @ViewChild('chaser2C', { static: false }) chaser2C: ChaserComponent;
  @ViewChild('beater1A', { static: false }) beater1A: BeaterComponent;
  @ViewChild('beater1B', { static: false }) beater1B: BeaterComponent;
  @ViewChild('beater2A', { static: false }) beater2A: BeaterComponent;
  @ViewChild('beater2B', { static: false }) beater2B: BeaterComponent;
  @ViewChild('seeker1', { static: false }) seeker1: SeekerComponent;
  @ViewChild('seeker2', { static: false }) seeker2: SeekerComponent;
  @ViewChild('keeper1', { static: false }) keeper1: KeeperComponent;
  @ViewChild('keeper2', { static: false }) keeper2: KeeperComponent;
  @ViewChild('quaffle', { static: false }) quaffle: QuaffleComponent;
  @ViewChild('bludger1', { static: false }) bludger1: BludgerComponent;
  @ViewChild('bludger2', { static: false }) bludger2: BludgerComponent;
  @ViewChild('snitch', { static: false }) snitch: SnitchComponent;
  @ViewChild('goal1', { static: false }) goal1: GoalComponent;
  @ViewChild('goal2', { static: false }) goal2: GoalComponent;

  players = [
    'chaser1A',
    'chaser1B',
    'chaser1C',
    'chaser2A',
    'chaser2B',
    'chaser2C',
    'beater1A',
    'beater1B',
    'beater2A',
    'beater2B',
    'seeker1',
    'seeker2',
    'keeper1',
    'keeper2'
  ];

  chaser1AIsOnBroom = true;
  chaser1BIsOnBroom = true;
  chaser1CIsOnBroom = true;
  chaser2AIsOnBroom = true;
  chaser2BIsOnBroom = true;
  chaser2CIsOnBroom = true;
  beater1AIsOnBroom = true;
  beater1BIsOnBroom = true;
  beater2AIsOnBroom = true;
  beater2BIsOnBroom = true;
  seeker1IsOnBroom = true;
  seeker2IsOnBroom = true;
  keeper1IsOnBroom = true;
  keeper2IsOnBroom = true;

  team1points = 0;
  team2points = 0;
  ngOnInit() {}

  selectComponent(thing: string) {
    switch (thing) {
      case 'chaser1A':
        return this.chaser1A;
      case 'chaser1B':
        return this.chaser1B;
      case 'chaser1C':
        return this.chaser1C;
      case 'chaser2A':
        return this.chaser2A;
      case 'chaser2B':
        return this.chaser2B;
      case 'chaser2C':
        return this.chaser2C;
      case 'beater1A':
        return this.beater1A;
      case 'beater1B':
        return this.beater1B;
      case 'beater2A':
        return this.beater2A;
      case 'beater2B':
        return this.beater2B;
      case 'seeker1':
        return this.seeker1;
      case 'seeker2':
        return this.seeker2;
      case 'keeper1':
        return this.keeper1;
      case 'keeper2':
        return this.keeper2;
      default:
        return null;
    }
  }

  bludgerEvent(player: string) {
    const hitPlayer = this.selectComponent(player);
    if (!hitPlayer) {
      return;
    }
    hitPlayer.fallCheck();
    console.log('bludger hit at ' + player);
  }

  savePlayer(player: string, beater: string) {
    const savedPlayer = this.selectComponent(player) as any;
    if (!savedPlayer) {
      return;
    }
    savedPlayer.protectedFromBludger = true;
    console.log(`${beater} is trying to save ${player}`);
  }

  fall(player: string) {
    console.log(`${player} died`);
    switch (player) {
      case 'chaser1A':
        this.chaser1AIsOnBroom = false;
        break;
      case 'chaser1B':
        this.chaser1BIsOnBroom = false;
        break;
      case 'chaser1C':
        this.chaser1CIsOnBroom = false;
        break;
      case 'chaser2A':
        this.chaser2AIsOnBroom = false;
        break;
      case 'chaser2B':
        this.chaser2BIsOnBroom = false;
        break;
      case 'chaser2C':
        this.chaser2CIsOnBroom = false;
        break;
      case 'beater1A':
        this.beater1AIsOnBroom = false;
        break;
      case 'beater1B':
        this.beater1BIsOnBroom = false;
        break;
      case 'beater2A':
        this.beater2AIsOnBroom = false;
        break;
      case 'beater2B':
        this.beater2BIsOnBroom = false;
        break;
      case 'seeker1':
        this.seeker1IsOnBroom = false;
        break;
      case 'seeker2':
        this.seeker2IsOnBroom = false;

        break;
      case 'keeper1':
        this.keeper1IsOnBroom = false;

        break;
      case 'keeper2':
        this.keeper2IsOnBroom = false;

        break;
      default:
        // do nothing;
        break;
    }
    this.players = this.players.filter(p => p !== player);
    if (!this.players.length) {
      this.gameInProgress = false;
    }
  }

  giveQuaffle(player: string) {
    const chaser = this.selectComponent(player) as ChaserComponent;
    if (!chaser) { return; }
    chaser.takeShot();
    console.log(`Quaffle to ${player}`);
  }

  takingShot(player: string) {
    console.log(`${player} is taking a shot`);
    if (player.includes('1')) {
      this.goal2.incomingShot();
    } else {
      this.goal1.incomingShot();
    }
  }

  blockingShot(player: string) {
    console.log(`${player} is trying to block`);
    if (player.includes('1')) {
      this.goal1.keeperProtection = true;
    } else {
      this.goal2.keeperProtection = true;
    }
  }

  shotBlocked(goal: string) {
    console.log(`Shot blocked at ${goal}`);
  }

  goalScored(goal: string) {
    if (goal.includes('1')) {
      console.log(`Goal made at ${goal}, 10 points for Team 1`);
      this.team1points += 10;
    } else {
      console.log(`Goal made at ${goal}, 10 points for Team 2`);
      this.team2points += 10;
    }
  }
}

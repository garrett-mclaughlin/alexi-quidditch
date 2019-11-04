import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaserComponent } from './components/chaser/chaser.component';
import { BeaterComponent } from './components/beater/beater.component';
import { SeekerComponent } from './components/seeker/seeker.component';
import { QuaffleComponent } from './components/quaffle/quaffle.component';
import { BludgerComponent } from './components/bludger/bludger.component';
import { SnitchComponent } from './components/snitch/snitch.component';
import { GoalComponent } from './components/goal/goal.component';
import { FieldComponent } from './components/field/field.component';
import { KeeperComponent } from './components/keeper/keeper.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaserComponent,
    BeaterComponent,
    SeekerComponent,
    QuaffleComponent,
    BludgerComponent,
    SnitchComponent,
    GoalComponent,
    FieldComponent,
    KeeperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

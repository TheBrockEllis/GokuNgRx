import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';

import { GokuPowerUp, GokuPowerDown } from './actions/goku.actions';
import { GohanPowerUp, GohanPowerDown } from './actions/gohan.actions';
import { VegettaPowerUp, VegettaPowerDown } from './actions/vegetta.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goku-ngrx';

  goku = 'assets/goku/goku0.png'
  gohan = 'assets/gohan/gohan0.png';
  vegetta = 'assets/vegetta/vegetta0.png';

  actionMap = {
    gohan: {
      up: GohanPowerUp,
      down: GohanPowerDown
    },
    goku: {
      up: GokuPowerUp,
      down: GokuPowerDown
    },
    vegetta: {
      up: VegettaPowerUp,
      down: VegettaPowerDown
    }
  }

  constructor(private store: Store<AppState>) {
    store.select('goku').subscribe(goku => {
      this.goku = `assets/goku/goku${goku.powerLevel}.png`;
    });

    store.select('gohan').subscribe(gohan => {
      this.gohan = `assets/gohan/gohan${gohan.powerLevel}.png`;
    });

    store.select('vegetta').subscribe(vegetta => {
      this.vegetta = `assets/vegetta/vegetta${vegetta.powerLevel}.png`;
    });
  }

  increasePowerLevel = (character: string) => {
    console.log('Increase', character);
    this.store.dispatch( new this.actionMap[character]['up']({sound: 'yell.mp3'}) )
  }

  decreasePowerLevel = (character: string) => {
    console.log('Decrease', character);
    this.store.dispatch(new this.actionMap[character]['down']({ sound: 'yell.mp3' }))
  }
}

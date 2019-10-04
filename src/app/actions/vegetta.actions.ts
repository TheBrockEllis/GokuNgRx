import { Action } from '@ngrx/store';

// these are THE actions we can do to this state
export enum VegettaActionTypes {
  PowerUp = '[Vegetta] Power Up',
  PowerDown = '[Vegetta] Power Down'
}

export class VegettaPowerUp implements Action {
  type = VegettaActionTypes.PowerUp;
  constructor(readonly payload: { sound: string; }) { }
}

export class VegettaPowerDown implements Action {
  readonly type = VegettaActionTypes.PowerDown;
  constructor(readonly payload: { sound: string; }) { }
}

// this needs to export all of the types of actions for use in the reducer
export type VegettaActions = VegettaPowerUp | VegettaPowerDown;

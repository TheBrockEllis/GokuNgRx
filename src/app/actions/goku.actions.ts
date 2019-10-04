import { Action } from '@ngrx/store';

// these are THE actions we can do to this state
export enum GokuActionTypes {
  PowerUp = '[Goku] Power Up',
  PowerDown = '[Goku] Power Down'
}

export class GokuPowerUp implements Action {
  type = GokuActionTypes.PowerUp;
  constructor(readonly payload: { sound: string; }) { }
}

export class GokuPowerDown implements Action {
  readonly type = GokuActionTypes.PowerDown;
  constructor(readonly payload: { sound: string; }) { }
}

// this needs to export all of the types of actions for use in the reducer
export type GokuActions = GokuPowerUp | GokuPowerDown;

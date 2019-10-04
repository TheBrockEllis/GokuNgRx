import { Action } from '@ngrx/store';

// these are THE actions we can do to this state
export enum GohanActionTypes {
  PowerUp = '[Gohan] Power Up',
  PowerDown = '[Gohan] Power Down'
}

export class GohanPowerUp implements Action {
  type = GohanActionTypes.PowerUp;
  constructor(readonly payload: { sound: string; }) { }
}

export class GohanPowerDown implements Action {
  readonly type = GohanActionTypes.PowerDown;
  constructor(readonly payload: { sound: string; }) { }
}

// this needs to export all of the types of actions for use in the reducer
export type GohanActions = GohanPowerUp | GohanPowerDown;

import { Action, State } from '@ngrx/store';
import { GokuActionTypes } from '../actions/goku.actions';

// this is the top level key
export const gokuFeatureKey = 'goku';

// this is the structure of the object under this key
export interface GokuState {
  powerLevel: number;
  mood: string;
}

// these are the initial values for this state
export const initialGokuState: GokuState = {
  powerLevel: 0,
  mood: 'happy'
};

// these are the changes we can make to this state
export function reducer(state: GokuState = initialGokuState, action: Action): GokuState {
  switch (action.type) {
    case GokuActionTypes.PowerUp:
      return { ...state, powerLevel: (state.powerLevel + 1 > 6) ? state.powerLevel : state.powerLevel + 1 };
    case GokuActionTypes.PowerDown:
      return { ...state, powerLevel: (state.powerLevel - 1 < -1) ? state.powerLevel : state.powerLevel - 1};
    default:
      return state;
  }
}

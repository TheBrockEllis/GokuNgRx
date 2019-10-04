import { Action, State } from '@ngrx/store';
import { VegettaActionTypes } from '../actions/vegetta.actions';

// this is the top level key
export const vegettaFeatureKey = 'vegetta';

// this is the structure of the object under this key
export interface VegettaState {
  powerLevel: number;
  mood: string;
}

// these are the initial values for this state
export const initialVegettaState: VegettaState = {
  powerLevel: 0,
  mood: 'happy'
};

// these are the changes we can make to this state
export function reducer(state: VegettaState = initialVegettaState, action: Action): VegettaState {
  switch (action.type) {
    case VegettaActionTypes.PowerUp:
      return { ...state, powerLevel: (state.powerLevel + 1 > 3) ? state.powerLevel : state.powerLevel + 1 };
    case VegettaActionTypes.PowerDown:
      return { ...state, powerLevel: (state.powerLevel - 1 < -1) ? state.powerLevel : state.powerLevel - 1 };
    default:
      return state;
  }
}

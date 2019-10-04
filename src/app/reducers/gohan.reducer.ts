import { Action, State } from '@ngrx/store';
import { GohanActionTypes } from '../actions/gohan.actions';

// this is the top level key
export const gohanFeatureKey = 'gohan';

// this is the structure of the object under this key
export interface GohanState {
  powerLevel: number;
  mood: string;
}

// these are the initial values for this state
export const initialGokuState: GohanState = {
  powerLevel: 0,
  mood: 'happy'
};

// these are the changes we can make to this state
export function reducer(state: GohanState = initialGokuState, action: Action): GohanState {
  switch (action.type) {
    case GohanActionTypes.PowerUp:
      return { ...state, powerLevel: (state.powerLevel + 1 > 6) ? state.powerLevel : state.powerLevel + 1 };
    case GohanActionTypes.PowerDown:
      return { ...state, powerLevel: (state.powerLevel - 1 < -1) ? state.powerLevel : state.powerLevel - 1 };
    default:
      return state;
  }
}

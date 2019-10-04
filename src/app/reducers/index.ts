import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromGoku from './goku.reducer';
import * as fromGohan from './gohan.reducer';
import * as fromVegetta from './vegetta.reducer';

// this will hold all of the top level state keys and their objects
export interface AppState {
  [fromGoku.gokuFeatureKey]: fromGoku.GokuState;
  [fromGohan.gohanFeatureKey]: fromGohan.GohanState;
  [fromVegetta.vegettaFeatureKey]: fromVegetta.VegettaState;
}

// this is a list of reducers, which should match the number of top level keys we have
export const reducers: ActionReducerMap<AppState> = {
  [fromGoku.gokuFeatureKey]: fromGoku.reducer,
  [fromGohan.gohanFeatureKey]: fromGohan.reducer,
  [fromVegetta.vegettaFeatureKey]: fromVegetta.reducer,
};

// this is a shortcut for getting a slice of state
export const selectGoku = (state: AppState) => state.goku;
export const selectGohan = (state: AppState) => state.gohan;
export const selectVegetta = (state: AppState) => state.vegetta;

// way to add 'middleware' to actions
// TODO great way to handle localstorage
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];


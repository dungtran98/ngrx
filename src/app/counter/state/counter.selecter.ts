import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ConterState } from "./counter.state";

export const getCounterState = createFeatureSelector<ConterState>("counter");
export const getCounterValue = createSelector(getCounterState, (state: ConterState) => {
  return state.counter;
})
export const getTextCounter = createSelector(createFeatureSelector<ConterState>("counter"), (state) => {
  return state.text;
})
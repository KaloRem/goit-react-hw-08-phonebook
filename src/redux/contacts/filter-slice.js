import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './contacts-initial-state';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

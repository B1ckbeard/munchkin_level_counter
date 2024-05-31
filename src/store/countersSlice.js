import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const countersAdapter = createEntityAdapter();
const initialState = countersAdapter.getInitialState({
  counters: {},
  isRemoveable: false,
  isShowModal: false,
});

export const startLvl = 1;

const countersSlice = createSlice({
  name: 'counters',
  initialState,
  reducers: {
    addCounter: (state, { payload }) => {
      countersAdapter.addOne(state, payload);
    },
    addCounters: countersAdapter.addMany,
    removeCounter: (state, { payload }) => {
      countersAdapter.removeOne(state, payload);
    },
    updateCounter: (state, { payload }) => {
      countersAdapter.updateOne(state, payload);
    },
    toggleRemove: (state) => {
      state.isRemoveable = !state.isRemoveable;
    },
    showRemove: (state) => {
      state.isRemoveable = true;
    },
    closeRemove: (state) => {
      state.isRemoveable = false;
    },
    showModal: (state) => {
      state.isShowModal = true;
    },
    closeModal: (state) => {
      state.isShowModal = false;
    },
  },
});

export const { actions } = countersSlice;
export const selectors = countersAdapter.getSelectors((state) => state.counters);
export default countersSlice.reducer;
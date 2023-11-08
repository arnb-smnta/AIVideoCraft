import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    updateSuggestions: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { updateSuggestions } = searchslice.actions;
export default searchslice.reducer;

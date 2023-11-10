import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/Constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.push(action.payload);
    },
  },
});

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;

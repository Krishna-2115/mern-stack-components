import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({ id: Date.now(), text: action.payload });
    },
    deleteMessage: (state, action) => {
      state.messages = state.messages.filter(msg => msg.id !== action.payload);
    }
  }
});

export const { sendMessage, deleteMessage } = chatSlice.actions;
export default chatSlice.reducer;

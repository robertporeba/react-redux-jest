import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export const episodeSlice = createSlice({
  name: "episode",
  initialState: { episodeNumber: 1 },
  reducers: {
    setEpisode: (state, action: PayloadAction<{ episodeNumber: number }>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.episodeNumber = action.payload.episodeNumber;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEpisode } = episodeSlice.actions;

export default episodeSlice.reducer;

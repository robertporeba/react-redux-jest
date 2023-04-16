import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: { id: 0 },
  reducers: {
    setActiveNavigation: (state, action: PayloadAction<{ id: number }>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = action.payload.id;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;

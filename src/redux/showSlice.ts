import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type ISearchShow } from "../services/shows.service";

export type AuthState = ISearchShow | null;

const initialState = null as AuthState;

export const showSlice = createSlice({
  name: "show",
  initialState: { showDetails: initialState },
  reducers: {
    setShow: (state, action: PayloadAction<{ show: ISearchShow | null }>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.showDetails = action.payload.show;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setShow } = showSlice.actions;

export default showSlice.reducer;

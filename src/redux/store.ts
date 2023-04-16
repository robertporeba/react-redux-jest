import { configureStore } from "@reduxjs/toolkit";
import episodeReducer from "./episodeSlice";
import navigationReducer from "./navigationSlice";

const store = configureStore({
  reducer: {
    episode: episodeReducer,
    navigation: navigationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

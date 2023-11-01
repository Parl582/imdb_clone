import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import favoriteSlice from "./favSlice";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoriteSlice);

export const store = configureStore({
  reducer: {
    search: searchSlice,
    favorite: persistedReducer,
  },
});

export const persister = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

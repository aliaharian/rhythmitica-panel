import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app/slice";
import blogSlice from "./blog/slice";

import userSlice from "./users/slice";

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    app: appSlice.reducer,
    blog: blogSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

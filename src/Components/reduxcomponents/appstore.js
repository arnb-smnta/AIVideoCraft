import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchsuggestionslice";
const appstore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
  },
});
export default appstore;

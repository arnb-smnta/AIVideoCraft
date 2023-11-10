import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchsuggestionslice";
import chatReducer from "./chatSlice";
const appstore = configureStore({
  reducer: {
    app: appReducer,
    search: searchReducer,
    chat: chatReducer,
  },
});
export default appstore;

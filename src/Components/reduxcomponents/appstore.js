import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
const appstore = configureStore({
  reducer: {
    app: appReducer,
  },
});
export default appstore;

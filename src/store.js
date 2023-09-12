import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./Redux/Reducer/BlogReducer";

const store = configureStore({
  reducer: {
    blogReducer: blogReducer,
  },
});

export default store;

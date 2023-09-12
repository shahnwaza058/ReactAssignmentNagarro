import { createReducer } from "@reduxjs/toolkit";
import {
  AddBlog,
  BlogDislike,
  BlogLike,
  DeleteBlog,
  Error,
  GetAllBlog,
  Success,
  UpdateBlog,
} from "../Actions/BlogAction";
import data from "../../Data.json";
const initialState = {
  data: data,
};
export const blogReducer = createReducer(initialState, {
  AddBlog: AddBlog,
  UpdateBlog: UpdateBlog,
  DeleteBlog: DeleteBlog,
  GetAllBlog: GetAllBlog,
  BlogLike: BlogLike,
  BlogDislike: BlogDislike,
  Success: Success,
  Error: Error,
});

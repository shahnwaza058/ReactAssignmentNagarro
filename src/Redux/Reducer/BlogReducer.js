import { createReducer } from "@reduxjs/toolkit";
import {
  AddBlog,
  BlogDislike,
  BlogFileterData,
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
  filterData: [],
};
export const blogReducer = createReducer(initialState, {
  AddBlog: AddBlog,
  UpdateBlog: UpdateBlog,
  DeleteBlog: DeleteBlog,
  GetAllBlog: GetAllBlog,
  BlogLike: BlogLike,
  BlogDislike: BlogDislike,
  BlogFileterData: BlogFileterData,
  Success: Success,
  Error: Error,
});

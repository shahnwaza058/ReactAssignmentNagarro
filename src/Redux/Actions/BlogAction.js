import { toast } from "react-toastify";

export const AddBlog = (state, action) => {
  let blogData = JSON.parse(localStorage.getItem("blogData"));
  blogData = blogData != null ? blogData : [];
  blogData.push(action.payload);
  const currentId = action.payload.id;
  localStorage.setItem(`blogData`, JSON.stringify(blogData));
  localStorage.setItem("blogId", JSON.stringify(parseInt(currentId) + 1));
};
export const UpdateBlog = (state, action) => {
  let blogData = JSON.parse(localStorage.getItem("blogData"));
  const idToRemove = action.payload.id;
  const updatedData = blogData.filter((item) => item.id !== idToRemove);
  updatedData.push(action.payload);
  localStorage.setItem(`blogData`, JSON.stringify(updatedData));
};

export const DeleteBlog = (state, action) => {
  let blogData = JSON.parse(localStorage.getItem("blogData"));
  const idToRemove = action.payload;
  console.log(idToRemove);
  const updatedData = blogData.filter((item) => item.id !== idToRemove);
  console.log(updatedData);
  localStorage.setItem(`blogData`, JSON.stringify(updatedData));
};

export const GetAllBlog = (state, action) => {
  let blogData = JSON.parse(localStorage.getItem("blogData"));
  state.data = blogData;
};
export const Success = (state, action) => {
  toast.success(`Blog ${action.payload} Successfully!`);
};

export const Error = (state) => {
  toast.error(`Something Went Wrong!`);
};

export const BlogLike = (state, action) => {
  let blogData = JSON.parse(localStorage.getItem("blogData"));

  const idToLike = action.payload;
  console.log(idToLike);
  const result = blogData.find((item) => item.id == idToLike);
  const updatedData = blogData.filter((item) => item.id !== idToLike);
  result.likes += 1;
  updatedData.push(result);
  localStorage.setItem(`blogData`, JSON.stringify(updatedData));
};

export const BlogDislike = (state, action) => {
  let blogData = JSON.parse(localStorage.getItem("blogData"));
  const idToLike = action.payload;
  console.log(idToLike);
  const result = blogData.find((item) => item.id == idToLike);
  const updatedData = blogData.filter((item) => item.id !== idToLike);
  result.likes = result.likes - 1 >= 0 ? result.likes - 1 : 0;
  updatedData.push(result);
  localStorage.setItem(`blogData`, JSON.stringify(updatedData));
};

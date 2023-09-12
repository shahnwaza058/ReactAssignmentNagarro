import React, { useEffect, useState } from "react";
import { LiaBlogSolid } from "react-icons/lia";
import { BiMessageRoundedError } from "react-icons/bi";
import "../Style/blog.css";
import { AiFillHeart, AiOutlineDislike } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { formatDate, getTimeAgo } from "../utils/Helper";

import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";
const Blogs = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.blogReducer);
  const reversedBlogs = data
    ? isHomePage
      ? [...data].reverse().slice(0, 4)
      : [...data].reverse()
    : [];

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const handleLike = () => {
    setLike(!like);
    if (dislike) setDislike(false);
  };
  const handleDislike = () => {
    setDislike(!dislike);
    if (like) setLike(false);
  };
  console.log(reversedBlogs);
  useEffect(() => {
    dispatch({ type: "GetAllBlog" });
  }, [localStorage.getItem("blogData")]);
  return (
    <div className="blogs">
      <div className="blog-box">
        <h2 className="heading text-center">
          {reversedBlogs.length == 0
            ? "No Blog Post Yet"
            : isHomePage
            ? "Latest Blogs"
            : "Blogs"}
          <LiaBlogSolid className="mx-1" />
        </h2>
        <div className="blogs-list p-2 d-flex justify-content-center align-items-center flex-wrap w-100">
          {reversedBlogs.length > 0 ? (
            <>
              {reversedBlogs.map((e) => (
                <div className="content-box p-2 m-1 border d-flex justify-content-center align-items-center flex-column">
                  <div className="date-time w-100 d-flex justify-content-between p-2 m-3 fw-semibold">
                    <div class="text-body-secondary font-monospace text-uppercase">
                      {formatDate(e.date)}
                      <p className="text-dark text-capitalize">
                        Category:{e.category}
                      </p>
                    </div>
                    <div class="text-body-secondary font-monospace">
                      {getTimeAgo(new Date(e.date))}
                    </div>
                  </div>
                  <div className="blog-title text-left w-100 fw-bold fs-4 text-justify text-capitalize m-3">
                    {e.title}
                  </div>
                  <div className="blog-description m-3 text-left w-100 text-justify">
                    {e.description}
                  </div>
                  <div className="blog-bottom w-100 m-3 d-flex align-items-center justify-content-between">
                    <div className="like-dislike-post-by">
                      <span className="text-body-secondary text-capitalize">
                        {e.likes > 0 ? e.likes : "No"} likes
                      </span>
                      <div className="post-by">
                        <p className="text-body-secondary fw-bolder text-capitalize ">
                          by {e.name}
                        </p>
                      </div>
                    </div>
                    <div className="readmore">
                      <Link
                        to={`/read-more/${e.id}`}
                        className="text-decoration-none text-reset fs-5 text-capitalize fw-bolder"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="container w-100 text-center mt-4 d-flex justify-content-center flex-column align-items-center">
                <BiMessageRoundedError size={80} className="text-warning" />
                <p className="lead">Be the first to post your blog...</p>
                <Link to="/add-blog" className="mt-3">
                  <Button variant="outline-dark" className="w-full">
                    Add Blog
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

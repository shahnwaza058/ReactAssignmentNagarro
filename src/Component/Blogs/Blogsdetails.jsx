import React, { useEffect, useState } from "react";
import { LiaBlogSolid } from "react-icons/lia";
import "../Style/blog.css";
import { AiFillLike } from "react-icons/ai";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillTrashFill, BsThreeDots } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import { MdModeEdit } from "react-icons/md";
import { formatDate, getTimeAgo } from "../utils/Helper";
import { useDispatch } from "react-redux";
import { BiMessageRoundedError, BiSolidDislike } from "react-icons/bi";
const Blogsdetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogDetails = JSON.parse(localStorage.getItem("blogData"))
    ? JSON.parse(localStorage.getItem("blogData"))
    : [];
  const result = blogDetails.find((item) => item?.id == id);
  const [like, setLike] = useState(result?.likes);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleRedirect = (url) => {
    navigate(url);
  };
  const handleLike = () => {
    setLike(like + 1);
    dispatch({ type: "BlogLike", payload: id });
  };
  const handleDislike = () => {
    setLike(like - 1 >= 0 ? like - 1 : 0);
    dispatch({ type: "BlogDislike", payload: id });
  };
  const handleDeleteBlog = (ID) => {
    dispatch({ type: "DeleteBlog", payload: ID });
    handleClose();
    dispatch({ type: "Success", payload: "Deleted" });
    navigate("/");
  };


  return (
    <div className="blogs-details">
      <div className="blogs">
        <div className="blog-box">
          <h2 className="heading text-center">
            Blog
            <LiaBlogSolid className="mx-1" />
          </h2>
          {result ? (
            <>
              {" "}
              <div className="content-box d-flex justify-content-center align-items-center flex-column">
                <div className="date-time w-100 d-flex justify-content-between p-2 m-3 fw-semibold">
                  <div class="text-body-secondary font-monospace text-uppercase d-flex flex-column justify-content-end">
                    <p className="text-dark text-capitalize m-0">
                      Category:{result.category}
                    </p>
                    {formatDate(result.date)}
                  </div>
                  <div className="right-side d-flex flex-column">
                    <div className="edit-delete align-self-end">
                      <Dropdown data-bs-theme="dark">
                        <Dropdown.Toggle
                          className="m-0 p-0 text-dark"
                          id="dropdown-button-dark-example1"
                          variant="no-style"
                        >
                          <BsThreeDots />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item className="m-0 p-0">
                            <Button
                              variant="outline"
                              className="fs-6 no-style"
                              onClick={() =>
                                handleRedirect(`/update-blog/${result.id}`)
                              }
                            >
                              <MdModeEdit size={15} /> Update
                            </Button>
                          </Dropdown.Item>
                          <Dropdown.Item className="m-0 p-0">
                            <Button
                              variant="outline"
                              className="fs-6 no-style"
                              onClick={handleShow}
                            >
                              <BsFillTrashFill size={15} /> Delete
                            </Button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <div className={`danger`}>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Warning!</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Are you sure you want to delete this post?
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => handleDeleteBlog(result.id)}
                            >
                              Delete
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                    <div class="text-body-secondary font-monospace">
                      {getTimeAgo(new Date(result.date))}
                    </div>
                  </div>
                </div>
                <div className="blog-title text-left w-100 fw-bold fs-4 text-justify text-capitalize m-3">
                  {result.title}
                </div>
                <div className="blog-details m-3 text-left w-100 text-justify">
                  {result.description}
                </div>
                <div className="blog-bottom w-100 m-3 d-flex align-items-center justify-content-between">
                  <div className="like-dislike-post-by">
                    <div className="like-dislike d-flex justify-content-center align-items-center">
                      <div
                        className={`like text-warning}`}
                        onClick={handleLike}
                      >
                        <AiFillLike className="text-primary" />
                      </div>
                      <div className={`like`} onClick={handleDislike}>
                        <BiSolidDislike className="text-danger" />
                      </div>

                      <div className="text-body-secondary text-capitalize">
                        {like > 0 ? like : "No"} likes
                      </div>
                    </div>
                    <div className="post-by">
                      <p className="text-body-secondary fw-bolder text-capitalize m-2">
                        by {result.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container w-100 text-center mt-4 d-flex justify-content-center flex-column align-items-center">
                <BiMessageRoundedError size={80} className="text-warning" />
                <h1 className="mt-3 text-danger text-uppercase fw-bold">
                  Invalid Blog Id
                </h1>
                <p className="lead text-danger text-uppercase fw-semibold">
                  No Blog Found
                </p>
                <Link to="/add-blog" className="mt-3">
                  <Button variant="warning" className="w-full">
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

export default Blogsdetails;

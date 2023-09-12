import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaBlog } from "react-icons/fa";
import { getTimeAgo } from "../utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
const BlogForm = () => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const blogDetails = JSON.parse(localStorage.getItem("blogData"));
      const result = blogDetails.find((item) => item.id == id);
      setFirstName(result.name.split(" ")[0] ? result.name.split(" ")[0] : "");
      setLastName(result.name.split(" ")[1] ? result.name.split(" ")[1] : "");
      setBlogTitle(result.title ? result.title : "");
      setBlogDescription(result.description ? result.description : "");
      setSelectedCategory(result.category ? result.category : "");
    } else {
      ClearData();
    }
  }, [id]);
  const blogId = JSON.parse(localStorage.getItem("blogId"));
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { newBlogId } = useSelector((state) => state.blogReducer);
  const ClearData = () => {
    // Clear the form data by resetting the state to empty values
    setFirstName("");
    setLastName("");
    setBlogTitle("");
    setSelectedCategory("");
    setBlogDescription("");
    setIsChecked(false);
    setValidated(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !blogTitle ||
      !selectedCategory ||
      !blogDescription ||
      !isChecked
    ) {
      return setValidated(true);
    }
    const currentTimestamp = Date.now();
    const currentDate = new Date(currentTimestamp);
    const data = {
      name: firstName + " " + lastName,
      title: blogTitle,
      category: selectedCategory,
      description: blogDescription,
      date: currentDate.toISOString(),
      likes: 0,
    };
    ClearData();
    if (!id) {
      data.id = blogId ? blogId.toString() : "1";
      dispatch({ type: "AddBlog", payload: data });
      dispatch({ type: "Success", payload: "Added" });
      navigate("/blogs");
    } else {
      data.id = id;
      dispatch({ type: "UpdateBlog", payload: data });
      dispatch({ type: "Success", payload: "Updated" });
      navigate(`/read-more/${id}`);
    }
  };

  const categories = [
    { value: "", label: "Select a category..." },
    { value: "entertainment", label: "Entertainment" },
    { value: "technology", label: "Technology" },
    { value: "travel", label: "Travel" },
    { value: "health-fitness", label: "Health & Fitness" },
    { value: "food-cooking", label: "Food & Cooking" },
    { value: "fashion-style", label: "Fashion & Style" },
    { value: "business-finance", label: "Business & Finance" },
    { value: "home-lifestyle", label: "Home & Lifestyle" },
    { value: "science-nature", label: "Science & Nature" },
    { value: "sports-recreation", label: "Sports & Recreation" },
  ];
  const handleCategoryChange = (e) => {
    const selectedValue = e.target.value;
  };

  return (
    <div className="add-blog">
      <div className="blog-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className="text-center text-capitalize fw-bold text-decoration-underline">
            {id ? "Update your Blog" : "Add your Blog"}
            <FaBlog className="mx-1" size={16} />
          </h3>
          <div className="form-field d-flex flex-wrap w-100 justify-content-between align-items-center">
            <div className="input-field">
              <Form.Group controlId="validationCustom04">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  *First name is required.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="input-field">
              <Form.Group controlId="validationCustom04">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  *Last name is reqiured.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="input-field">
              <Form.Group controlId="validationCustom04">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  required
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  *Tile is required.
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            <div className="input-field">
              <Form.Group controlId="validationCustom04">
                <Form.Label>Categories</Form.Label>
                <Form.Select
                  required
                  size="xs"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  *Category is required
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="input-field">
              <Form.Group controlId="validationCustom04">
                <Form.Label>Post Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Type Blog Description..."
                  rows={5}
                  required
                  value={blogDescription}
                  onChange={(e) => setBlogDescription(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  *Post description is reqiured
                </Form.Control.Feedback>
              </Form.Group>
            </div>
          </div>
          <div className="input-field">
            <Form.Group className="mb-3">
              <Form.Check
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button
              className="w-50 text-uppercase"
              variant="dark"
              type="submit"
            >
              {id ? "Update Blog" : "Add Blog"}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BlogForm;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Blogs from "./Component/Blogs/Blogs";
import Blogsdetails from "./Component/Blogs/Blogsdetails";
import GoToTop from "./Component/utils/GoToTop";
import BlogForm from "./Component/Blogs/BlogForm";
import data from "./Data.json";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ScrollToTop } from "./Component/utils/Helper";
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import { AppProvider } from "./Assets/Context/Context";
function App() {
  const [isDataLoad, setIsDataLoad] = useState(false);
  useEffect(() => {
    if (isDataLoad) return;
    if (!localStorage.getItem("blogData")) {
      localStorage.setItem("blogData", JSON.stringify(data));
      localStorage.setItem("blogId", "3");
    } else setIsDataLoad(false);
    setIsDataLoad(true);
  }, [localStorage.getItem("blogData")]);

  return (
    <Router>
      <Header />
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/read-more/:id" element={<Blogsdetails />} />
        <Route path="/add-blog" element={<BlogForm />} />
        <Route path="/update-blog/:id" element={<BlogForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      <GoToTop />
    </Router>
  );
}

export default App;

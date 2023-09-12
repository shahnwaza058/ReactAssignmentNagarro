import React from "react";
import Slider from "react-slick";
import "../Style/home.css";
import image1 from "../../Assets/ezgif-3-cc9fc21153.gif";
import image2 from "../../Assets/BYI (1).png";
import image3 from "../../Assets/BYI (2).png";
import Blogs from "../Blogs/Blogs";
import Social from "../Social/Social";
const Home = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const images = [image1, image2, image3];
  return (
    <>
      <div className="home" id="home">
        <div className="slick-slider">
          <div className="sliders">
            <h2 className="text-uppercase text-white home-heading">
              {" "}
              Welcome to our <span className="text-white">Blog</span>
            </h2>
            <Slider {...settings}>
              {images.map((image) => (
                <div className="slides">
                  <div className="box">
                    <img src={image} alt="" srcset="" width={100} />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Social />
      <Blogs />
    </>
  );
};

export default Home;

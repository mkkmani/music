import { Component } from "react";
import Slider from "react-slick";
import "./index.css";

class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-img-container">
            <img
              src="https://res.cloudinary.com/dj1bucjya/image/upload/v1701458749/music/instruments_akic44.jpg"
              alt="instrument"
              className="carousel-img"
            />
          </div>
          <div className="carousel-img-container">
            <img
              src="https://res.cloudinary.com/dj1bucjya/image/upload/v1701458749/music/all_musians_s2vxoo.png"
              alt="instrument"
              className="carousel-img"
            />
          </div>
          <div className="carousel-img-container">
            <img
              src="https://res.cloudinary.com/dj1bucjya/image/upload/v1701458748/music/veena_aadylu.jpg"
              alt="instrument"
              className="carousel-img"
            />
          </div>
          <div className="carousel-img-container">
            <img
              src="https://res.cloudinary.com/dj1bucjya/image/upload/v1701458748/music/ccm_v8gwyc.jpg"
              alt="instrument"
              className="carousel-img"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;

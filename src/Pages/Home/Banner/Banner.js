import React from "react";
import img1 from "../../../Assets/banner/image1.jpg";
import img2 from "../../../Assets/banner/image2.jpg";
import img3 from "../../../Assets/banner/image3.jpg";
import img4 from "../../../Assets/banner/image4.jpg";
import img5 from "../../../Assets/banner/image5.jpg";
import BannerCard from "./BannerCard";

const Banner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 5,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 1,
    }
  ];
  return (
    <div className="carousel w-full">
      {bannerData.map((slide) => (
        <BannerCard key={slide.id} slide={slide}></BannerCard>
      ))}
    </div>
  );
};

export default Banner;

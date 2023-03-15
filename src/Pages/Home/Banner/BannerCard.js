import React from "react";

const BannerCard = ({ slide }) => {
  const { id, prev, next, image } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full h-1/6">
      <div className="img-gradient">
        <img alt="" src={image} className="w-50" />
      </div>
      <div className="absolute flex justify-end  right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
    // <div id={`slide${id}`} className="carousel-item relative w-50 ">
    //   <div className="img-gradient">
    //     <img alt="" src={image} className="w-full" />
    //   </div>
    //   <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
    //     <a href={`#slide${prev}`} className="btn btn-circle mr-5">
    //       ❮
    //     </a>
    //     <a href={`#slide${next}`} className="btn btn-circle">
    //       ❯
    //     </a>
    //   </div>
    // </div>
  );
};

export default BannerCard;

import React from 'react';
import img1 from "../../../Assets/NewArrivel/History/History1.jpg"
import img2 from "../../../Assets/NewArrivel/History/History2.jpg"
import img3 from "../../../Assets/NewArrivel/History/History3.jpg"
import img4 from "../../../Assets/NewArrivel/History/History4.jpg"
import img5 from "../../../Assets/NewArrivel/History/History5.jpg"

const History = () => {
    return (
        <div>
              <div className="best-books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div> 
        </div>
    );
};

export default History;
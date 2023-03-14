import React from 'react';
import img1 from "../../../Assets/NewArrivel/All/All1.jpg"
import img2 from "../../../Assets/NewArrivel/All/All2.jpg"
import img3 from "../../../Assets/NewArrivel/All/All3.jpg"
import img4 from "../../../Assets/NewArrivel/All/All4.jpg"
import img5 from "../../../Assets/NewArrivel/All/All5.jpg"
import img6 from "../../../Assets/NewArrivel/All/All6.jpg"

const AllBooks = () => {
    return (
        <div>
            <h1>New Arrivals</h1>
           <div className="best-books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
            </div> 
        </div>
    );
};

export default AllBooks;
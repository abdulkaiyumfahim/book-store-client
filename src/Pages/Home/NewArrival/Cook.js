import React from 'react';
import img1 from "../../../Assets/NewArrivel/Cook/cook1.jpg"
import img2 from "../../../Assets/NewArrivel/Cook/cook2.jpg"
import img3 from "../../../Assets/NewArrivel/Cook/cook3.jpg"
import img4 from "../../../Assets/NewArrivel/Cook/cook4.jpg"


const Cook = () => {
    return (
        <div>
             <div className="best-books grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div> 
        </div>
    );
};

export default Cook;
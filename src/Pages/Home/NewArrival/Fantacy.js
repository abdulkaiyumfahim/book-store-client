import React from 'react';
import img1 from "../../../Assets/NewArrivel/Fantacy/Fantacy1.jpg"
import img2 from "../../../Assets/NewArrivel/Fantacy/Fantacy2.jpg"
import img3 from "../../../Assets/NewArrivel/Fantacy/Fantacy3.jpg"
import img4 from "../../../Assets/NewArrivel/Fantacy/Fantacy4.jpg"
import img5 from "../../../Assets/NewArrivel/Fantacy/Fantacy5.jpg"
import img6 from "../../../Assets/NewArrivel/Fantacy/Fantacy6.jpg"

const Fantacy = () => {
    return (
        <div>
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

export default Fantacy;
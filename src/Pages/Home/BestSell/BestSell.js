import React from "react";
import img1 from "../../../Assets/Best Selling/image1.jpg";
import img2 from "../../../Assets/Best Selling/image2.jpg";
import img3 from "../../../Assets/Best Selling/image3.jpg";
import img4 from "../../../Assets/Best Selling/image4.jpg";

const BestSell = () => {
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-medium">Best Selling Books</h1>
      <div>
        <section class="text-gray-600 body-font grid place-content-center">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    src={img1}
                    alt=""
                    className="w-2/4 shadow-lg shadow-zinc-500	"
                  />{" "}
                </div>
              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    src={img2}
                    alt=""
                    className="w-2/4 shadow-lg shadow-zinc-500	"
                  />
                </div>

              </div>
              <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div class="rounded-lg h-64 overflow-hidden">
                  <img
                    src={img3}
                    alt=""
                    className="w-2/4 shadow-lg shadow-zinc-500	"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BestSell;

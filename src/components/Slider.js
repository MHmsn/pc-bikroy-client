import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className="text-white bg-black rounded-xl">
      <Carousel
        showStatus={false}
        showThumbs={false}
        className="my-5 rounded-xl "
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        dynamicHeight={true}
        
      >
        <div>
          <img
            src="https://www.gigabyte.com/FileUpload/Global/KeyFeature/1490/innergigabyteimages/banner.jpg"
            className="rounded-xl"
            alt=""
          />

        </div>
        <div>
          <img
            src="https://www.gigabyte.com/FileUpload/global/news/1842/o202010080956262453.jpg"
            className="rounded-xl"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://dlcdnwebimgs.asus.com/gain/F9741FD2-725D-4134-B0EB-C3E6F0FA7FF0/fwebp"
            className="rounded-xl"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

import React from "react";
import aboutImage from "../assets/images/me.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Welcome to Feed Your Temple, where every bite tells a story! where every bite tells a story! 
            We are passionate about crafting delicious lunches that not only satisfy your taste buds but
             also leave you with a memorable experience.
          </p>
          <p className="text-lg mb-4">
           My journey began with a simple idea: to create lunches that are
           made with love, using the finest ingredients and time-honored
           recipes. From our humble beginnings, we have grown into a cherished
           lunch spot, serving our community with a delectable array of meals.
          </p>
          <p className="text-lg mb-4">
          Quality is at the heart of everything we do. We believe in using
          fresh, locally-sourced ingredients to ensure the highest standard
          in taste and flavor. Our team of dedicated chefs combines skill
          and passion to bring you a delightful selection of lunches, each
          crafted with precision and care..
          </p>
          <p className="text-lg mb-4">
          Whether you're stopping by for a quick bite during lunch or
          enjoying a leisurely meal with our daily specials, Feed Your Temple
          is committed to delivering a delightful dining experience
          every time. Join us on this journey of flavor and indulge in the
          magic of our half-baked creations.
          </p>
          <p className="text-lg">
            Thank you for being a part of our journey! 
          </p>
          <br></br>
          <p className="text-lg">
            Love, Connie and the Feed Your Temple Team
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={aboutImage}
            alt=""
            className="w-[400px] h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};
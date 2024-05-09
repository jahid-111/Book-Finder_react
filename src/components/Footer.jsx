/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="py-6 md:py-8">
        <div className="container mx-auto">
          <p className="text-center text-sm lg:text-base">
            Copyright ©2023 | All rights reserved by Learn with Sumit
          </p>
          <p className="text-center text-sm lg:text-base">
            Code By{" "}
            <a
              className=" text-gray-700 font-semibold"
              title="Git-hub Link"
              href="https://github.com/jahid-111"
            >
              Jahid
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

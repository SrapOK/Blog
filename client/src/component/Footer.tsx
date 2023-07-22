import React from "react";

const Footer = () => {
  return (
    <footer className="border-t  mt-10 py-10 px-2">
      <div className="flex mx-20">
        <div className="w-full mb-5">
          <h6 className=" text-gray-700 mb-3">Company</h6>
          <ul>
            <li>
              <a className="footer-link" href="#">
                Team
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full mb-5">
          <h6 className="text-gray-700 mb-3">Content</h6>
          <ul>
            <li>
              <a className="footer-link" href="#">
                Block
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Policy
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

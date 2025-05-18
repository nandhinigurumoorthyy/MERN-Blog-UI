import blue_logo from "../assets/Arnifi-Primary-Logo_Blue.png";
import stripe from "../assets/stripe_icon.svg";
import paypal from "../assets/paypal_icon.svg";
import mscard from "../assets/master-card_icon.svg";
import visa from "../assets/visa_icon.svg";

import linkedin from "../assets/linkedin-icon.svg";
import insta from "../assets/instagram-icon.svg";
import x from "../assets/x-icon.svg";
import fb from "../assets/facebook-icon.svg";


const Footer = () => {
  return (
    <section id="contact">
    <div className=" lg:px-40 md:px-20 px-10  pt-10 mt-5">
      <div className="h-20 w-32 pb-3 mb-3">
        <img src={blue_logo} alt="logo" />
      </div>

      <div className="grid grid-cols-2  gap-4 md:grid-cols-5 lg:grid-cols-5 w-full mb-3 pb-6">
        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">Arnifi Setup</h4>
          <ul className="leading-6 text-sm pl-0">
            <li>UAE</li>
            <li>Bahrain</li>
            <li>Oman</li>
            <li>Qatar</li>
            <li>Saudi Arabia</li>
            <li>USA</li>
            <li>Singapore</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">Arnifi Funds</h4>
          <ul className="leading-6 text-sm pl-0 ">
            <li>Overview</li>
            <li>Cayman Islands</li>
            <li>British Virgin Island</li>
            <li>Abu Dhabi Global Market - ADGM</li>
            <li>DIFC</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">Products</h4>
          <ul className="leading-6 text-sm pl-0">
            <li>Arnifi Docs</li>
            <li>Arnifi Partners</li>
            <li>Arnifi AI</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">Services</h4>
          <ul className="leading-6 text-sm pl-0">
            <li>Accounting & Tax</li>
            <li>Post setup compliance</li>
            <li>Visa services</li>
          </ul>
        </div>

        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">Resources</h4>
          <ul className="leading-6 text-sm pl-0">
            <li>Blogs</li>
          </ul>
        </div>
      </div>

      <hr className="border border-gray-300"></hr>

      <div className="mt-3 pt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 w-full mb-2 pb-5">
        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">UAE</h4>
          <p className="text-gray-500  text-lg">
            Office 1105, API Trio tower, Sheikh Zayed Road, Dubai{" "}
            <span className="text-xl text-[#7070ff]">→</span>
          </p>
          <p className="text-gray-600 font-medium text-lg">+971-54-3067915</p>
        </div>

        <div>
          <h4 className="text-base mb-2 pb-2 text-[#7070ff]">India</h4>
          <p className="text-gray-500 text-lg  ">
            H-1703, 3rd Floor, Hustlehub, HSR Layout, Bengaluru, 560034- India{" "}
            <span className="text-xl text-[#7070ff]">→</span>
          </p>
          <p className="text-gray-600 font-medium text-lg">+91 7753 818 886</p>
        </div>

        <div>
          <div>
            <p className="text-gray-500 text-sm pb-1">Mail Us</p>
            <p className="text-lg">arnifi@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500 pt-5 mb-3 text-sm">
              Assured Safe & Secure Transaction
            </p>
            <div className="flex">
              <img src={stripe} alt="logo" />
              <img src={visa} alt="logo" />
              <img src={paypal} alt="logo" />
              <img src={mscard} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="bg-gray-100 lg:px-40 md:px-20 px-10  mt-7 py-6 flex   justify-between items-center gap-4">
    <p className="text-gray-500"><span className="font-medium">©2025</span> Arnifi Corporate Service Providers L.L.C</p>
    <p className="text-gray-500"><span className="text-gray-300"> | </span> Privacy Policy <span className="text-gray-300"> | </span> Terms & Conditions<span className="text-gray-300"> | </span> Cancellation Policy <span className="text-gray-300"> | </span> Cookie Policy</p>
    <div className="flex gap-2 lg:flex-row md:flex-row flex-col">
        <img src={insta} alt="logo" className="w-16"/>
              <img src={fb} alt="logo" className="w-16" />
              <img src={linkedin} alt="logo" className="w-16"/>
              <img src={x} alt="logo" className="w-16" />
    </div>
</div>
    </section>
  );
};

export default Footer;

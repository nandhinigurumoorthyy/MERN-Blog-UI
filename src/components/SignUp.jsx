import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import mail from "../assets/email-box.svg";
import white_logo from "../assets/white_logo.svg";
import Image1 from "../assets/pg1.svg";
import Image2 from "../assets/pg2.svg";

function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:10000/auth/signup", {
        username,
        email,
        password,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        alert(
          "Signup failed! Please check your credentials.\n\n" + error.message
        );
      });
  };

  const images = [Image1, Image2];
  const headlines = [
    "Turn Ideas Into Impactful Blogs",
    "The Smart Way to Run Your Blog",
  ];
  const paras = [
    "From your first draft to final publish, take full control of your blog content. Create, edit, and grow your blog — all in one place.",
    "Manage your blog with ease — from writing new posts to editing, organizing, and publishing. Everything you need, in one seamless experience.",
  ];
  const [current, setCurrent] = useState(0);
  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col lg:flex-row md:flex-row min-h-screen bg-white">
        {/* left side content */}

        <div className=" md:w-1/2 w-full bg-[#2e2ea3]">
          {/* logo */}

          <div className="relative flex flex-col overflow-hidden h-screen">
            <figure className="h-28">
              <img
                src={white_logo}
                alt="logo"
                className="pt-12 pl-20 md:pl-14 lg:pl-14 pb-5"
              />
            </figure>

            {/* Main Content */}
            <div className="h-2/3 z-10 text-white text-center px-5 md:px-16 lg:px-16 items-center justify-center flex flex-col pt-5">
              <div className="relative w-full overflow-hidden ">
                <div
                  className="mb-4 pb-5 flex w-full h-full transition-transform duration-700 ease-in-out z-10"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Slide ${index + 1}`}
                      className="w-full group  h-full flex-shrink-0 object-center"
                      title="Happy Client"
                    />
                  ))}
                </div>
              </div>

              <div className="relative w-full h-24 overflow-hidden">
                <div
                  className="flex w-full h-full transition-transform duration-700 ease-in-out z-10"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {headlines.map((i, index) => (
                    <h4
                      key={index}
                      className="w-full h-full flex justify-center text-xl font-medium flex-shrink-0 roboto-serif-regular"
                    >
                      {i}
                    </h4>
                  ))}
                </div>
              </div>

              <div className="relative w-full h-44 md:h-52 lg:h-52 overflow-hidden mt-2">
                <div
                  className="flex w-full h-full transition-transform duration-700 ease-in-out  z-10"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {paras.map((i, index) => (
                    <p
                      key={index}
                      className="w-full h-full flex justify-center text-base text-[#ababda] flex-shrink-0"
                    >
                      {i}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side content */}

       <div className="lg:pt-1 md:pt-1 pt-28  lg:w-1/2 md:w-1/2 w-full relative flex flex-col h-screen items-center justify-center">
          {/* mail icon */}
          <figure className="pb-5">
            <img src={mail} alt="mail icon" />
          </figure>
          <h1 className="roboto-serif-regular font-semibold text-4xl">
            Enter your <span className="text-[#7070ff]">email</span>
          </h1>

          <form
            className="w-full lg:px-24 md:px-24 px-12 pt-4"
            onSubmit={handleSubmit}
          >
            {/* Input Fields */}
            {[
              {
                label: "User Name",
                value: username,
                setter: setUserName,
                type: "text",
                placeholder: "user name",
                id: "username",
              },

              {
                label: "Email address",
                value: email,
                setter: setEmail,
                type: "email",
                placeholder: "name@example.com",
                id: "email",
              },
              {
                label: "Password",
                value: password,
                setter: setPassword,
                type: "password",
                placeholder: "********",
                id: "password",
              },
            ].map(({ label, value, setter, type, placeholder, id }) => (
              <div className="mb-2" key={id}>
                <label
                  htmlFor={id}
                  className="block text-base font-medium text-[#171752] mt-2 pt-2"
                >
                  {label}
                </label>
                <input
                  name={id}
                  type={type}
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className="mt-2 p-3 w-full rounded-sm border-2 border-gray-300 focus:outline-none focus:border-2 focus:border-[#2e2ea3] hover:border-2 hover:border-[#2e2ea3]"
                  placeholder={placeholder}
                  required
                />
              </div>
            ))}

            <div className="flex items-center justify-center pt-5">
              <button
                type="submit"
                className="text-xl w-32 h-12 rounded bg-[#3434a7] text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
              >
                <span className="absolute bg-[#3a3aaa] w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                <span className="absolute bg-[#2e2ea3] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                Register
              </button>
            </div>

            {/* Login Link */}
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-2 mt-3 pt-2  text-sm sm:text-base">
              <p className="text-gray-500 text-xl">Already have an account?</p>
              <Link
                to="/"
                className=" cursor-pointer text-xl font-medium text-[#3939cc] flex gap-2 items-center no-underline justify-center py-1 px-3 transition-all duration-300"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;

import React from 'react';
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileScreenButton } from 'react-icons/fa6';

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FootLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white'>
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className='max-w-[50px]'/>
              Mall</h1>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet iste cum officia atque repellendus dolore?</p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FootLinks.map((link) => (
                      <li className="cursor-pointer hover:text-orange-200 hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                        <span className="">{link.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                <ul className='flex flex-col gap-3'>
                  {
                    FootLinks.map((link) => (
                      <li className="cursor-pointer hover:text-orange-200 hover:translate-x-1 duration-300 text-gray-200" key={link.title}>
                        <span className="">{link.title}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            {/* social links */}
            <div className="">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className='text-3xl' />
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl' />
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl' />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pardesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileScreenButton />
                  <p>+91 1234567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
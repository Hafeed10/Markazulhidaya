import React from 'react';
import logo from './Img/logo.png';
import { Link } from 'react-scroll';
import { CgFacebook, CgInstagram, CgMail, CgPhone, CgTwitter } from 'react-icons/cg';

const Footer = () => {
  const navigations = [
    { option: 'Home', path: 'Home' },
    { option: 'Academics', path: 'Academics' },
    { option: 'Admission', path: 'Admission' },
    { option: 'Examination', path: 'Examination' },
    { option: 'Event', path: 'Event' },
    { option: 'Contact', path: 'Contact' }
  ];

  return (
    <footer className="bg-[#2C2C2C] text-white px-3 md:px-10 lg:px-10 xl:px-36 py-7 md:py-16">
      <div className="grid gap-5 md:gap-10 lg:gap-32 opacity-90 font-sans items-end md:grid-cols-3">
        <div className="space-y-5 py-5">
          <img src={logo} className="w-80" alt="" />
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab sequi iusto! Numquam, saepe ipsam iste
            mollitia odit exercitationem molestiae labore voluptates culpa unde placeat quisquam. Doloribus laboriosam
            sequi corporis.
          </p>
        </div>
        <div className='py-5'>
          <ul className="space-y-3 h-full flex flex-col items-start justify-between">
            {navigations.map((navigation, index) => (
              <li
                key={index}
                className="font-normal text-sm md:text-base hover:text-[#eee] text-[#fff] tracking-wider text-start uppercase transition-all duration-200 ease-in cursor-pointer"
              >
                <Link
                  activeClass="active"
                  to={navigation.path}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  {navigation.option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='py-5'>
          <h4 className="text-lg font-semibold tracking-wide mb-5">Contact</h4>
          <ul className="space-y-2.5">
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgPhone />
              </span>{' '}
              <span>00914933 - 270439 <br /> 00914933 - 270439</span>
            </li>
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgMail />
              </span>{' '}
              <span>aljamiaalislamia@gmail.com</span>
            </li>
            <li className="flex items-center tracking-wider space-x-2.5">
              <span className="text-2xl">
                <CgMail />
              </span>{' '}
              <span>
                SANTHAPURAM . P.O. PATTIKKAD <br /> 679325, MALAPPURA, KERALA
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="text-base font-sans font-thin text-center md:text-left">
          © 2023 al jamia All Rights Reserved Privacy Policy
        </h1>
        <div className="flex space-x-8 text-xl items-center mt-5 md:mt-0">
          <a href="#">
            <CgInstagram />
          </a>
          <a href="#">
            <CgFacebook />
          </a>
          <a href="#">
            <CgTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

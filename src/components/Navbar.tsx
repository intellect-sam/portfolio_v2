import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../constants';
import styles from '../style';
// import { Link } from "react-router-dom";
import { handleDownloadResume } from './utils';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sticky top-0">
      <nav
        className={`flex justify-between px-3 py-6 md:items-center md:py-10 md:mx-80 md:px-14 ${styles.textWhite}`}>
        <a
          href="/"
          className="text-xl font-bold font-pop">
          Sam.Dev
        </a>

        <div className="flex justify-between md:gap-8">
          <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-pop font-light cursor-pointer hover:text-blue-800 text-[10px] ${
                  active === nav.title ? 'text-white' : 'text-dimBlack'
                } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className="justify-end invisible md:visible">
            <button
              className="justify-end px-2 py-1 text-sm font-bold text-white bg-red-700 rounded shadow-md hover:bg-blue-700"
              onClick={handleDownloadResume}>
              Resume
            </button>
          </div>
        </div>

        <div className="flex items-center justify-end flex-1 sm:hidden">
          <div>
            {toggle ? (
              <FaTimes
                className="object-contain w-5 h-5"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <FaBars
                className="object-contain w-5 h-5"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex-col gap-10'
            } p-6 bg-[#030712] z-40 absolute top-20 right-0 left-0 w-full h-screen`}>
            <ul className="flex flex-col items-center justify-center py-40 list-none">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-pop font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? 'text-white' : 'text-dimBlack'
                  } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                  onClick={() => setActive(nav.title)}>
                  {/* <Link to={nav.id>{nav.title}</Link> */}
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <button
                className="justify-end px-2 py-2 mt-10 text-sm font-light text-white bg-red-500 rounded shadow-md hover:bg-blue-700"
                onClick={handleDownloadResume}>
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import footerImage from "../assets/images/banner/ictd-logo.png";
import ictLogo1 from "../assets/logo/ict-logo-1.png";
import ictLogo2 from "../assets/logo/ict-logo-2.png";
import ictLogo3 from "../assets/logo/ict-logo-5.jpg";
import ictLogo4 from "../assets/logo/ict-logo-6.png";

const Footer = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${footerImage})`,
        }}
        className="mt-24 bg-top bg-cover bg-no-repeat"
      >
        <div className="bg-black/85 h-full pt-8 px-8">
          <div className="max-w-7xl mx-auto px-3 lg:px-0">
            {/* Footer Top */}
            <div className="border-b py-5 border-gray-400 space-y-8 lg:flex items-center justify-between gap-10">
              {/* Subscribe */}
              <div className="space-y-2 flex-1">
                <h3 className="font-semibold text-gray-200">
                  SUBSCRIBE TO CONNECT WITH US
                </h3>
                <div className="flex w-full max-w-xl items-center space-x-2">
                  <input
                    className="focus-visible:ring-offset-0 text-orange-500 rounded-2xl bg-white md:w-96 p-2"
                    type="email"
                    placeholder="Enter your email address..."
                  />
                  <button
                    className="bg-green-700 rounded-2xl text-white hover:bg-white hover:text-green-500 w-36 p-2"
                    type="submit"
                  >
                    SUBSCRIBE
                  </button>
                </div>
              </div>

              {/* Border */}
              <div className="hidden lg:block h-16 w-[1px] border-r border-gray-400"></div>

              <div className="flex-1 flex flex-col md:flex-row justify-between gap-8 md:gap-10">
                {/* Social */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-200">JOIN US ON:</h3>
                  <div className="flex items-center gap-4">
                    <Link to="https://web.facebook.com/">
                      <svg
                        className="text-gray-200 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                      </svg>
                    </Link>
                    <Link to="https://www.instagram.com/">
                      <svg
                        className="text-gray-200 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </Link>
                    <Link to="https://www.youtube.com/">
                      <svg
                        className="text-gray-200 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 576 512"
                      >
                        <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                      </svg>
                    </Link>
                    <Link to="https://www.twitter.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-200 w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                      >
                        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47 8.4 .8 16.6 1.1 25.3 1.1 49.1 0 94.3-16.6 130.4-44.8-46-1.1-84.8-31.2-98.1-72.8 6.4 .8 12.8 1.4 19.5 1.4 9.5 0 18.7-1.4 27.5-3.6-48.3-9.5-84.3-52.2-84.3-103v-1.1c14.1 7.8 30.3 12.5 47.5 13.6-28.3-19.2-46.7-51.1-46.7-87.5 0-19.5 5-37.8 14.4-53.6 52.2 64 130.4 105.6 218.4 110.2-1.4-7.8-2.2-15.9-2.2-24.1 0-57.5 46.7-104.2 104.2-104.2 30.3 0 57.5 12.5 76.7 32.8 23.7-4.5 46-13.3 65.9-25.3-7.8 24.5-24.5 45-46.4 57.8 21.1-2.2 41.6-8.1 60.5-16.1-14.4 20.8-32.5 39.4-53.6 54.2z" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-200">CONTACT US</h3>
                  <div>
                    <Link
                      className="hover:underline text-[#ffffff] hover:text-green-500"
                      to="tel:+123456789"
                    >
                      +123 456 789
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="hover:underline text-[#ffffff] hover:text-green-500"
                      to="mailto:example@email.com"
                    >
                      example@email.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="py-10 flex flex-col md:flex-row justify-between items-center">
              {/* Logo */}
              <Link to="/">
                <img src={footerImage} className="h-20" alt="Footer Logo" />
              </Link>

              {/* Payment */}
              <div className="flex gap-8 py-6 md:py-0">
                <img src={ictLogo1} alt="Visa" className="h-10 w-12 " />
                <img src={ictLogo2} alt="Visa" className="h-10 w-12 " />
                <img src={ictLogo3} alt="Visa" className="h-10 w-12 " />
                <img src={ictLogo4} alt="Visa" className="h-10 w-12 " />
              </div>

              {/* Copyright */}
              <div>
                <p className="text-gray-200 font-semibold text-center">
                  &copy; {new Date().getFullYear()} ICTD. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
